# 🚀 Quick Start Guide - Multi-Agent System

Get the entire system up and running in minutes!

## ⚡ 60-Second Setup

### 1. Verify Structure
```bash
# Check all files are in place
ls -la .github/workflows/
ls -la .github/scripts/
ls -la agents/config/
```

### 2. Commit to GitHub
```bash
git add .github/ agents/ AGENTS.md AGENTS_PLAN.md .env.example
git commit -m "🤖 Add multi-agent automation system"
git push origin main
```

### 3. Monitor First Run
- Go to GitHub → Actions tab
- Watch workflows execute
- Check reports in artifacts

**That's it! 🎉 System is live!**

---

## 📋 What Each Agent Does

### 🏗️ Build Agent (Automatic)
- Checks code quality
- Runs tests
- Builds application
- Fails PR if issues found

**When:** Every push & pull request

### 🔒 Security Agent (Automatic)
- Scans for vulnerabilities
- Detects secrets
- Checks licenses
- Runs daily

**When:** Every push & daily schedule

### 📱 Marketing Agent (Weekly)
- Generates social posts
- Optimizes SEO
- Creates content
- Monday 8 AM

**When:** Weekly + on data changes

### 🚀 Deployment Agent (Manual)
- Deploys to staging/production
- Runs health checks
- Monitors performance

**When:** Manual trigger or push to main

---

## 🎯 Common Tasks

### Run All Agents
```bash
# View all workflows
gh workflow list

# Run orchestrator (runs all agents)
gh workflow run 5-orchestrator.yml
```

### Deploy to Production
```bash
# Option 1: Via GitHub Actions UI
# Actions → 4-deploy-agent → Run workflow → Select "production"

# Option 2: Via GitHub CLI
gh workflow run 4-deploy-agent.yml -f environment=production
```

### Check Build Status
```bash
# View latest workflow run
gh run list --workflow=1-build-agent.yml -L 1

# View detailed logs
gh run view <run-id> --log
```

### View Generated Reports
```bash
# Download all reports
gh run download <run-id> --dir ./reports
ls -la reports/
```

---

## 🔧 Customization

### Change Build Timeout
Edit `agents/config/build.config.json`:
```json
{
  "buildConfig": {
    "timeout": 3600
  }
}
```

### Add Security Rules
Edit `agents/config/security.config.json`:
```json
{
  "securityConfig": {
    "scanTypes": ["npm-audit", "secret-scanning"]
  }
}
```

### Modify Social Media Schedule
Edit `agents/config/marketing.config.json`:
```json
{
  "scheduling": {
    "postTimes": ["09:00", "14:00", "18:00"]
  }
}
```

### Update Deployment URL
Edit `agents/config/deploy.config.json`:
```json
{
  "environments": {
    "production": {
      "url": "safarimakarska.com"
    }
  }
}
```

---

## 🐛 Troubleshooting

### Workflow Not Running
```bash
# Check workflow syntax
gh workflow view 1-build-agent.yml

# Enable workflow
gh workflow enable 1-build-agent.yml

# View recent runs
gh run list
```

### Agent Failing Locally
```bash
# Test build agent
node .github/scripts/build-agent.js

# Check errors
cat agents/reports/build-report.md

# Review logs
npm ls --depth=0
```

### Secrets Not Found
```bash
# List all secrets
gh secret list

# Add new secret
gh secret set SLACK_WEBHOOK_URL

# Test secret access
gh secret list --limit 1
```

---

## 📊 Monitoring Dashboard

### GitHub Actions Tab
- Real-time workflow status
- Execution duration
- Artifacts downloads

### Workflow Reports
- `agents/reports/build-report.md`
- `agents/reports/security-report.md`
- `agents/reports/marketing-report.md`
- `agents/reports/deploy-report.md`

### Notifications
- ✅ Success messages
- ❌ Failure alerts
- ⚠️ Warning summaries

---

## 🎯 Next Steps

1. ✅ **Commit files** - Push to GitHub
2. ✅ **Monitor runs** - Watch Actions tab
3. ✅ **Review reports** - Check artifacts
4. ✅ **Add secrets** - For production
5. ✅ **Configure alerts** - Slack/email (optional)
6. ✅ **Document changes** - Update config files

---

## 💡 Pro Tips

**Tip 1:** Commit small changes to trigger agents frequently  
**Tip 2:** Check reports before merging PRs  
**Tip 3:** Use manual dispatch for testing  
**Tip 4:** Keep config files documented  
**Tip 5:** Review security reports weekly  

---

## 🆘 Need Help?

1. **Check Logs:** Actions → Workflow → Run details
2. **Review Reports:** In artifacts folder
3. **Read Docs:** AGENTS.md file
4. **Check Config:** agents/config/*.json

**Everything is ready to go! Happy automating! 🚀**
