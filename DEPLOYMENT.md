# 🚀 DEPLOYMENT & PRODUCTION GUIDE

Complete guide to deploying Safari Makarska with the multi-agent system.

## 📋 PRE-DEPLOYMENT CHECKLIST

### 1. Local Testing ✅
```bash
# Verify all files
node verify-agents.js

# Test build
npm run build

# Test agents
node .github/scripts/build-agent.js
node .github/scripts/security-agent.js
```

### 2. GitHub Repository Setup ✅
```bash
# Initialize git (if not already done)
git init
git add .

# Create initial commit
git commit -m "🚀 Initial commit: Safari Makarska website + multi-agent system"

# Add GitHub remote
git remote add origin https://github.com/YOUR-USERNAME/safari-makarska.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Secrets ✅

Go to: **Settings → Secrets and variables → Actions**

Add these secrets:

```
# Required for production
DEPLOYMENT_KEY              # SSH key for server access
DATABASE_PASSWORD           # Database password (if applicable)

# Optional but recommended
SLACK_WEBHOOK_URL           # For Slack notifications
SENTRY_DSN                  # Error tracking
```

### 4. Configure Repository Settings ✅

Go to: **Settings → General**

- ✅ Make repository public (or private as needed)
- ✅ Enable GitHub Pages (optional)
- ✅ Set default branch to `main`

Go to: **Settings → Branches**

- ✅ Add branch protection rule for `main`
- ✅ Require status checks to pass
- ✅ Require PR reviews (recommended)

---

## 🔄 WORKFLOW EXECUTION

### First Time Setup

```
1. Commit files to GitHub
   ↓
2. Workflows trigger automatically
   ↓
3. Build Agent runs (5 min)
   ├─ ESLint ✓
   ├─ TypeScript ✓
   ├─ Build ✓
   └─ Reports ✓
   ↓
4. Security Agent runs (2 min)
   ├─ NPM Audit ✓
   ├─ Secret Scan ✓
   └─ Reports ✓
   ↓
5. Marketing Agent runs (1 min)
   ├─ Content Gen ✓
   ├─ SEO ✓
   └─ Reports ✓
   ↓
6. Artifacts saved ✓
   ↓
7. PRs commented ✓
```

### Monitor Progress

1. Go to GitHub repository
2. Click **Actions** tab
3. Watch workflow execution
4. Click workflow name for details
5. View logs in real-time

---

## 📊 DEPLOYMENT STRATEGIES

### Strategy 1: Automatic Deploy on Push
```bash
# Push to main automatically triggers deployment
git push origin main

# Workflow runs:
# 1. Build Agent
# 2. Security Agent
# 3. Marketing Agent
# 4. Deployment Agent
```

### Strategy 2: Manual Deploy (Recommended)
```bash
# Using GitHub CLI
gh workflow run 4-deploy-agent.yml -f environment=staging
gh workflow run 4-deploy-agent.yml -f environment=production

# Or via GitHub UI:
# Actions → 4-deploy-agent → Run workflow
```

### Strategy 3: PR-Based Deploy
```bash
# Create feature branch
git checkout -b feature/new-tour

# Make changes
# Commit changes
git commit -m "feat: add new tour package"

# Push and create PR
git push origin feature/new-tour
# Go to GitHub and create PR

# Workflow runs on PR:
# - Build Agent checks
# - Security Agent scans
# - Marketing Agent generates content

# After PR merge to main:
# - Deployment Agent deploys to production
```

---

## 🎯 PRODUCTION DEPLOYMENT CHECKLIST

### Before Deployment

- [ ] All tests passing
- [ ] No security vulnerabilities
- [ ] Code reviewed (if required)
- [ ] Staging deployment successful
- [ ] Content reviewed
- [ ] Database backed up
- [ ] Environmental variables set

### During Deployment

- [ ] Monitor logs in real-time
- [ ] Check build report
- [ ] Verify health checks pass
- [ ] Monitor application metrics

### After Deployment

- [ ] Test website functionality
- [ ] Check all pages load
- [ ] Verify forms work
- [ ] Test on mobile devices
- [ ] Monitor error tracking (Sentry)
- [ ] Review performance metrics

---

## 🔒 SECURITY BEST PRACTICES

### 1. Secrets Management
```bash
# Generate a strong SSH key
ssh-keygen -t ed25519 -C "github-actions"

# Add to GitHub Secrets
# Never commit private keys
# Store in secure location
```

### 2. Branch Protection
- Require PR reviews
- Require status checks to pass
- Dismiss approvals on push
- Allow force pushes only for admins

### 3. Regular Security Audits
```bash
# Weekly security checks
npm audit
npm outdated

# Review security-report.md
cat agents/reports/security-report.md

# Address vulnerabilities promptly
npm update
npm audit fix
```

### 4. Monitoring & Alerts
- Enable Slack notifications
- Set up error tracking (Sentry)
- Monitor performance metrics
- Review logs regularly

---

## 📈 MONITORING & MAINTENANCE

### Daily Monitoring
- Check GitHub Actions status
- Review any failed workflows
- Monitor website uptime
- Check error logs

### Weekly Monitoring
- Review security reports
- Check performance metrics
- Update dependencies (if needed)
- Review user feedback

### Monthly Maintenance
- Audit access logs
- Review security patches
- Update documentation
- Plan optimizations

### Quarterly Review
- Performance analysis
- Security assessment
- Cost optimization
- Feature planning

---

## 🆘 TROUBLESHOOTING

### Workflow Fails

```bash
# Check logs
gh run list

# View detailed logs
gh run view <run-id> --log

# Check for errors
cat agents/reports/build-report.md
cat agents/reports/security-report.md
```

### Build Fails

```bash
# Test locally
npm run build

# Check TypeScript
npx tsc --noEmit

# Check for errors
npm run lint
```

### Deployment Fails

```bash
# Check deployment config
cat agents/config/deploy.config.json

# Verify secrets
gh secret list

# Test health checks
curl https://safarimakarska.com/api/health
```

### Security Warnings

```bash
# Check vulnerabilities
npm audit

# Fix automatically
npm audit fix

# Review details
cat agents/reports/security-report.md
```

---

## 📞 ROLLBACK PROCEDURE

If deployment has issues:

```bash
# Option 1: Rollback via GitHub
# Actions → 4-deploy-agent → View failed run → Rollback button

# Option 2: Deploy previous version
git revert <commit-hash>
git push origin main

# Option 3: Manual rollback
# SSH into server and restore from backup
```

---

## 🎓 TEAM DOCUMENTATION

### For Developers
- Read: QUICKSTART.md
- Setup: Local development environment
- Workflow: Create PR for changes
- Test: Run agents locally

### For DevOps
- Read: AGENTS.md (full document)
- Configure: GitHub secrets
- Monitor: GitHub Actions
- Maintain: Deploy configurations

### For Marketing
- Read: AGENTS.md (Marketing Agent section)
- Review: agents/reports/marketing-report.md
- Use: Generated content
- Schedule: Social media posts

### For Project Manager
- Read: AGENTS_PLAN.md
- Monitor: GitHub Actions tab
- Track: Deployment status
- Report: System health

---

## ✅ PRODUCTION READINESS

Your system is production-ready when:

✅ All workflows passing  
✅ No security vulnerabilities  
✅ Staging deployment successful  
✅ Performance metrics good  
✅ Error tracking working  
✅ Monitoring active  
✅ Documentation complete  
✅ Team trained  
✅ Backup strategy in place  
✅ Rollback plan documented  

---

## 🎯 GOING LIVE CHECKLIST

- [ ] Local verification complete
- [ ] GitHub repository created
- [ ] Workflows tested
- [ ] Secrets configured
- [ ] First deployment successful
- [ ] Production URL configured
- [ ] SSL certificate installed
- [ ] Domain configured
- [ ] Email notifications set up
- [ ] Monitoring enabled
- [ ] Team trained
- [ ] Documentation finalized
- [ ] Launch announcement ready

---

## 🚀 FINAL STEPS

1. **Verify System**
   ```bash
   node verify-agents.js
   ```

2. **Commit Everything**
   ```bash
   git add .
   git commit -m "🚀 Production-ready deployment"
   git push origin main
   ```

3. **Monitor First Workflow**
   - Go to Actions tab
   - Watch all agents execute
   - Review generated reports

4. **Deploy to Production**
   ```bash
   # Via GitHub CLI
   gh workflow run 4-deploy-agent.yml -f environment=production
   
   # Or via GitHub UI
   # Actions → 4-deploy-agent → Run workflow → Select production
   ```

5. **Celebrate! 🎉**
   - Your website is live!
   - Multi-agent system is active!
   - Continuous deployment is working!

---

**Safari Makarska is ready for production! 🚀**

*Questions? Review the documentation files or GitHub Actions logs.*
