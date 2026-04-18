#!/usr/bin/env node

/**
 * BUILD AGENT
 * Handles automated testing, linting, and build verification
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BUILD_CONFIG = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../agents/config/build.config.json'), 'utf8')
);

const REPORT_PATH = path.join(__dirname, '../agents/reports/build-report.md');

class BuildAgent {
  constructor() {
    this.report = [];
    this.errors = [];
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

  runCommand(command, description) {
    this.log(`Running: ${description}`, 'start');
    try {
      const output = execSync(command, { encoding: 'utf8' });
      this.log(`✓ ${description} completed`, 'success');
      this.addReport(description, `\`\`\`\n${output}\n\`\`\``);
      return true;
    } catch (error) {
      this.log(`✗ ${description} failed`, 'error');
      this.errors.push(`${description}: ${error.message}`);
      this.passed = false;
      this.addReport(`${description} (FAILED)`, `\`\`\`\n${error.message}\n\`\`\``);
      return false;
    }
  }

  async runLint() {
    this.log('Starting lint check...', 'task');
    this.runCommand(BUILD_CONFIG.buildConfig.lintCommand, 'ESLint');
  }

  async runTypeCheck() {
    this.log('Starting TypeScript type check...', 'task');
    this.runCommand('tsc --noEmit', 'TypeScript Compilation');
  }

  async runBuild() {
    this.log('Starting build process...', 'task');
    this.runCommand(BUILD_CONFIG.buildConfig.buildCommand, 'Next.js Build');
  }

  async checkDependencies() {
    this.log('Checking dependencies...', 'task');
    try {
      const output = execSync('npm ls --depth=0', { encoding: 'utf8' });
      this.addReport('Dependencies', `\`\`\`\n${output}\n\`\`\``);
    } catch (error) {
      this.log('Dependency check warning (non-fatal)', 'warn');
    }
  }

  generateReport() {
    const duration = ((Date.now() - this.startTime) / 1000).toFixed(2);
    const status = this.passed ? '✅ PASSED' : '❌ FAILED';

    let markdown = `# Build Report

**Status:** ${status}  
**Duration:** ${duration}s  
**Timestamp:** ${new Date().toISOString()}

## Summary
- Errors: ${this.errors.length}
- Build Status: ${this.passed ? 'Success' : 'Failed'}

`;

    if (this.errors.length > 0) {
      markdown += `\n## Errors\n`;
      this.errors.forEach(err => {
        markdown += `- ⚠️ ${err}\n`;
      });
    }

    markdown += this.report.join('\n');

    fs.writeFileSync(REPORT_PATH, markdown);
    this.log(`Report generated: ${REPORT_PATH}`, 'info');
  }

  async run() {
    this.log('🏗️  BUILD AGENT STARTED', 'task');
    
    await this.runLint();
    await this.runTypeCheck();
    await this.runBuild();
    await this.checkDependencies();

    this.generateReport();

    if (!this.passed) {
      this.log('BUILD FAILED', 'error');
      process.exit(1);
    }

    this.log('✓ BUILD AGENT COMPLETED SUCCESSFULLY', 'success');
    process.exit(0);
  }
}

const agent = new BuildAgent();
agent.run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
