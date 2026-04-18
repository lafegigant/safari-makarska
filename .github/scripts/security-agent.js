#!/usr/bin/env node

/**
 * SECURITY AGENT
 * Handles vulnerability scanning, secret detection, and security audits
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SECURITY_CONFIG = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../agents/config/security.config.json'), 'utf8')
);

const REPORT_PATH = path.join(__dirname, '../agents/reports/security-report.md');

class SecurityAgent {
  constructor() {
    // Create reports directory if it doesn't exist
    const reportsDir = path.dirname(REPORT_PATH);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    this.report = [];
    this.vulnerabilities = [];
    this.passed = true;
    this.startTime = Date.now();
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = level.toUpperCase().padEnd(7);
    console.log(`[${timestamp}] [${prefix}] ${message}`);
  }

  addReport(section, content) {
    this.report.push(`\n### ${section}\n${content}`);
  }

  async scanNpmAudit() {
    this.log('Running npm audit...', 'task');
    try {
      const output = execSync(`npm audit --json`, { encoding: 'utf8' });
      const auditResult = JSON.parse(output);
      
      const vulnerabilities = auditResult.vulnerabilities || {};
      const criticalCount = Object.values(vulnerabilities).filter(v => v.severity === 'critical').length;
      const highCount = Object.values(vulnerabilities).filter(v => v.severity === 'high').length;

      if (criticalCount > 0) {
        this.passed = false;
        this.vulnerabilities.push(`Critical: ${criticalCount}`);
      }

      this.addReport('NPM Audit Results', `
- Total Vulnerabilities: ${Object.keys(vulnerabilities).length}
- Critical: ${criticalCount}
- High: ${highCount}

\`\`\`json
${JSON.stringify(auditResult, null, 2)}
\`\`\`
      `);
    } catch (error) {
      this.log('npm audit scan failed', 'error');
      this.vulnerabilities.push('npm audit failed');
      this.passed = false;
    }
  }

  async scanSecrets() {
    this.log('Scanning for secrets...', 'task');
    try {
      const secretPatterns = [
        { pattern: /["']?api[_-]?key["']?\s*[:=]\s*["'][^"']+["']/gi, name: 'API Key' },
        { pattern: /["']?secret["']?\s*[:=]\s*["'][^"']+["']/gi, name: 'Secret' },
        { pattern: /["']?password["']?\s*[:=]\s*["'][^"']+["']/gi, name: 'Password' },
        { pattern: /["']?token["']?\s*[:=]\s*["'][^"']+["']/gi, name: 'Token' },
        { pattern: /-----BEGIN (RSA|PRIVATE) KEY-----/gi, name: 'Private Key' },
      ];

      const srcDir = path.join(__dirname, '../../src');
      const files = this.getAllFiles(srcDir);
      const secrets = [];

      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        secretPatterns.forEach(({ pattern, name }) => {
          if (pattern.test(content)) {
            secrets.push(`Found ${name} in ${path.relative(srcDir, file)}`);
          }
        });
      });

      if (secrets.length > 0) {
        this.passed = false;
        this.vulnerabilities.push(`Secrets found: ${secrets.length}`);
      }

      this.addReport('Secret Scanning', secrets.length > 0 
        ? `⚠️ Found ${secrets.length} potential secrets:\n${secrets.map(s => `- ${s}`).join('\n')}`
        : '✓ No secrets detected'
      );
    } catch (error) {
      this.log('Secret scan failed', 'warn');
    }
  }

  getAllFiles(dir) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      if (fs.statSync(fullPath).isDirectory()) {
        if (!['node_modules', '.next', '.git'].includes(item)) {
          files = files.concat(this.getAllFiles(fullPath));
        }
      } else if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.json')) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  generateReport() {
    const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);
    const status = this.passed ? '✅ PASSED' : '⚠️ WARNINGS FOUND';

    let markdown = `# Security Report

**Status:** ${status}  
**Duration:** ${duration}s  
**Timestamp:** ${new Date().toISOString()}

## Summary
- Vulnerabilities Found: ${this.vulnerabilities.length}
- Security Status: ${this.passed ? 'Clear' : 'Issues Detected'}

`;

    if (this.vulnerabilities.length > 0) {
      markdown += `\n## Vulnerabilities\n`;
      this.vulnerabilities.forEach(vuln => {
        markdown += `- 🚨 ${vuln}\n`;
      });
    }

    markdown += this.report.join('\n');

    fs.writeFileSync(REPORT_PATH, markdown);
    this.log(`Report generated: ${REPORT_PATH}`, 'info');
  }

  async run() {
    this.log('🔒 SECURITY AGENT STARTED', 'task');
    
    if (SECURITY_CONFIG.securityConfig.scanTypes.includes('npm-audit')) {
      await this.scanNpmAudit();
    }

    if (SECURITY_CONFIG.securityConfig.scanTypes.includes('secret-scanning')) {
      await this.scanSecrets();
    }

    this.generateReport();

    if (!this.passed) {
      this.log('SECURITY CHECK COMPLETED WITH WARNINGS', 'warn');
      process.exit(SECURITY_CONFIG.securityConfig.severity.critical === 'block' ? 1 : 0);
    }

    this.log('✓ SECURITY AGENT COMPLETED SUCCESSFULLY', 'success');
    process.exit(0);
  }
}

const agent = new SecurityAgent();
agent.run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
