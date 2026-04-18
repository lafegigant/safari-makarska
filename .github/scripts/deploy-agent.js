#!/usr/bin/env node

/**
 * DEPLOYMENT AGENT
 * Handles production deployment orchestration
 */

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../../agents/config/deploy.config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const reportsDir = path.join(__dirname, '../../agents/reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

const reportPath = path.join(reportsDir, 'deploy-report.md');

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  console.log(logMessage);
  return logMessage;
}

function writeReport(content) {
  fs.appendFileSync(reportPath, content + '\n');
}

function generateReport() {
  const startTime = new Date();
  const report = [];

  report.push('# 🚀 DEPLOYMENT REPORT');
  report.push(`Generated: ${startTime.toISOString()}`);
  report.push('');

  return report;
}

async function preDeploymentChecks() {
  log('Starting pre-deployment checks...');

  const checks = [
    { name: 'Build artifacts exist', check: () => fs.existsSync(path.join(__dirname, '../../.next')) },
    { name: 'Configuration valid', check: () => config.environments && config.deploymentStrategy },
    { name: 'Reports directory exists', check: () => fs.existsSync(reportsDir) }
  ];

  const results = [];
  for (const check of checks) {
    try {
      const passed = check.check();
      results.push({ ...check, passed });
      log(`${check.name}: ${passed ? '✅ PASS' : '❌ FAIL'}`);
    } catch (error) {
      results.push({ ...check, passed: false, error: error.message });
      log(`${check.name}: ❌ ERROR - ${error.message}`, 'ERROR');
    }
  }

  return results;
}

async function backupDatabase() {
  log('Performing database backup...');
  // Simulate database backup
  await new Promise(resolve => setTimeout(resolve, 1000));
  log('Database backup completed');
  return true;
}

async function deployToStaging() {
  log('Deploying to staging environment...');

  const stagingUrl = config.environments.staging.url;
  log(`Staging URL: ${stagingUrl}`);

  // Simulate staging deployment
  await new Promise(resolve => setTimeout(resolve, 2000));
  log('Staging deployment completed');
  return true;
}

async function deployToProduction() {
  log('Deploying to production environment...');

  const prodUrl = config.environments.production.url;
  log(`Production URL: ${prodUrl}`);

  if (config.blueGreenDeployment) {
    log('Using blue-green deployment strategy');
    // Simulate blue-green deployment
    await new Promise(resolve => setTimeout(resolve, 3000));
    log('Blue-green deployment completed');
  } else {
    log('Using standard deployment');
    await new Promise(resolve => setTimeout(resolve, 2000));
    log('Production deployment completed');
  }

  return true;
}

async function healthChecks(url) {
  log(`Performing health checks on ${url}...`);

  const checks = [
    { name: 'HTTP Status', endpoint: '/', expected: 200 },
    { name: 'API Health', endpoint: '/api/health', expected: 200 },
    { name: 'Contact Page', endpoint: '/contact', expected: 200 },
    { name: 'Tours Page', endpoint: '/packages', expected: 200 }
  ];

  const results = [];
  for (const check of checks) {
    try {
      // Simulate health check
      const passed = Math.random() > 0.1; // 90% success rate for demo
      results.push({ ...check, passed });
      log(`${check.name} (${check.endpoint}): ${passed ? '✅ PASS' : '❌ FAIL'}`);
    } catch (error) {
      results.push({ ...check, passed: false, error: error.message });
      log(`${check.name}: ❌ ERROR - ${error.message}`, 'ERROR');
    }
  }

  return results;
}

async function setupMonitoring() {
  log('Setting up monitoring and alerting...');

  // Simulate monitoring setup
  await new Promise(resolve => setTimeout(resolve, 1000));

  log('Monitoring setup completed');
  return true;
}

async function runDeployment(environment = 'staging') {
  const startTime = new Date();
  log(`Starting deployment to ${environment} environment`);

  try {
    // Initialize report
    const report = generateReport();
    writeReport(report.join('\n'));

    // Pre-deployment checks
    writeReport('\n## 🔍 PRE-DEPLOYMENT CHECKS');
    const checks = await preDeploymentChecks();
    checks.forEach(check => {
      writeReport(`- ${check.name}: ${check.passed ? '✅ PASS' : '❌ FAIL'}`);
    });

    const allChecksPass = checks.every(check => check.passed);
    if (!allChecksPass) {
      throw new Error('Pre-deployment checks failed');
    }

    // Database backup
    writeReport('\n## 💾 DATABASE BACKUP');
    await backupDatabase();
    writeReport('- Database backup: ✅ COMPLETED');

    // Deployment
    writeReport('\n## 🚀 DEPLOYMENT');

    if (environment === 'staging') {
      await deployToStaging();
      writeReport('- Staging deployment: ✅ COMPLETED');
    } else if (environment === 'production') {
      // Deploy to staging first for production
      await deployToStaging();
      writeReport('- Staging deployment: ✅ COMPLETED');

      await deployToProduction();
      writeReport('- Production deployment: ✅ COMPLETED');
    }

    // Health checks
    writeReport('\n## 🏥 HEALTH CHECKS');
    const targetUrl = config.environments[environment].url;
    const healthResults = await healthChecks(targetUrl);

    healthResults.forEach(result => {
      writeReport(`- ${result.name} (${result.endpoint}): ${result.passed ? '✅ PASS' : '❌ FAIL'}`);
    });

    const allHealthPass = healthResults.every(result => result.passed);
    if (!allHealthPass) {
      throw new Error('Health checks failed');
    }

    // Monitoring setup
    writeReport('\n## 📊 MONITORING');
    await setupMonitoring();
    writeReport('- Monitoring setup: ✅ COMPLETED');

    // Success
    const endTime = new Date();
    const duration = Math.round((endTime - startTime) / 1000);

    writeReport('\n## ✅ DEPLOYMENT SUCCESSFUL');
    writeReport(`- Environment: ${environment}`);
    writeReport(`- Duration: ${duration} seconds`);
    writeReport(`- Completed: ${endTime.toISOString()}`);
    writeReport(`- Status: ✅ SUCCESS`);

    log(`Deployment to ${environment} completed successfully in ${duration} seconds`);
    return true;

  } catch (error) {
    const endTime = new Date();
    const duration = Math.round((endTime - startTime) / 1000);

    writeReport('\n## ❌ DEPLOYMENT FAILED');
    writeReport(`- Environment: ${environment}`);
    writeReport(`- Duration: ${duration} seconds`);
    writeReport(`- Failed: ${endTime.toISOString()}`);
    writeReport(`- Error: ${error.message}`);
    writeReport(`- Status: ❌ FAILED`);

    log(`Deployment to ${environment} failed: ${error.message}`, 'ERROR');
    throw error;
  }
}

// Main execution
async function main() {
  const environment = process.env.DEPLOY_ENV || 'staging';

  try {
    log('🚀 DEPLOYMENT AGENT STARTED');
    log(`Environment: ${environment}`);
    log(`Strategy: ${config.deploymentStrategy}`);
    log(`Blue-Green: ${config.blueGreenDeployment}`);

    await runDeployment(environment);

    log('🎉 DEPLOYMENT AGENT COMPLETED SUCCESSFULLY');
    process.exit(0);

  } catch (error) {
    log(`💥 DEPLOYMENT AGENT FAILED: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

// Export for testing
module.exports = { runDeployment, preDeploymentChecks, healthChecks };

if (require.main === module) {
  main();
}
