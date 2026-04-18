#!/usr/bin/env node

/**
 * SETUP VERIFICATION SCRIPT
 * Verifies that all agent files are properly installed
 */

const fs = require('fs');
const path = require('path');

const requiredFiles = {
  'Workflows': [
    '.github/workflows/1-build-agent.yml',
    '.github/workflows/2-security-agent.yml',
    '.github/workflows/3-marketing-agent.yml',
    '.github/workflows/4-deploy-agent.yml',
    '.github/workflows/5-orchestrator.yml'
  ],
  'Scripts': [
    '.github/scripts/build-agent.js',
    '.github/scripts/security-agent.js',
    '.github/scripts/marketing-agent.js',
    '.github/scripts/deploy-agent.js'
  ],
  'Configs': [
    'agents/config/build.config.json',
    'agents/config/security.config.json',
    'agents/config/marketing.config.json',
    'agents/config/deploy.config.json'
  ],
  'Documentation': [
    'AGENTS_PLAN.md',
    'AGENTS.md',
    'QUICKSTART.md',
    'DOCS.md',
    '.env.example'
  ]
};

const requiredDirs = [
  '.github/workflows',
  '.github/scripts',
  'agents/config',
  'agents/reports'
];

function checkFiles() {
  console.log('\n🔍 Verifying Multi-Agent System Installation\n');
  console.log('='.repeat(60));

  let allPresent = true;

  for (const [category, files] of Object.entries(requiredFiles)) {
    console.log(`\n📂 ${category}`);
    files.forEach(file => {
      const fullPath = path.join(process.cwd(), file);
      const exists = fs.existsSync(fullPath);
      const status = exists ? '✅' : '❌';
      console.log(`  ${status} ${file}`);
      if (!exists) allPresent = false;
    });
  }

  console.log('\n' + '='.repeat(60));
  return allPresent;
}

function checkDirectories() {
  console.log('\n📁 Checking Directories\n');
  let allPresent = true;

  requiredDirs.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    const exists = fs.existsSync(fullPath);
    const status = exists ? '✅' : '❌';
    console.log(`  ${status} ${dir}`);
    if (!exists) allPresent = false;
  });

  return allPresent;
}

function displaySummary(filesOk, dirsOk) {
  console.log('\n' + '='.repeat(60));
  console.log('\n📊 VERIFICATION SUMMARY\n');

  if (filesOk && dirsOk) {
    console.log('✅ All files are present!');
    console.log('✅ All directories are created!');
    console.log('\n🎉 Multi-Agent System is ready for deployment!\n');
    console.log('Next steps:');
    console.log('  1. Read QUICKSTART.md');
    console.log('  2. Commit files: git add . && git commit -m "🤖 Add multi-agent system"');
    console.log('  3. Push to GitHub: git push origin main');
    console.log('  4. Monitor in Actions tab\n');
    return true;
  } else {
    console.log('❌ Some files or directories are missing!');
    console.log('\nPlease ensure all files are in place before committing.');
    return false;
  }
}

function testAgents() {
  console.log('\n🧪 Agent Quick Test\n');
  
  const scripts = [
    '.github/scripts/build-agent.js',
    '.github/scripts/security-agent.js',
    '.github/scripts/marketing-agent.js',
    '.github/scripts/deploy-agent.js'
  ];

  console.log('To test agents locally, run:\n');
  scripts.forEach(script => {
    console.log(`  node ${script}`);
  });
  console.log('');
}

// Main execution
try {
  const filesOk = checkFiles();
  const dirsOk = checkDirectories();
  const systemReady = displaySummary(filesOk, dirsOk);

  if (systemReady) {
    testAgents();
  }

  process.exit(systemReady ? 0 : 1);
} catch (error) {
  console.error('Error during verification:', error);
  process.exit(1);
}
