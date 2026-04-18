# Safari Makarska - Biokovo Mountain Tours Website

Professional, animated website for Safari Makarska touristic agency featuring Biokovo mountain trips.

## 🎯 Project Overview

A fully responsive, modern website built with Next.js, featuring:
- **Smooth Animations** with Framer Motion
- **Responsive Design** with Tailwind CSS
- **Optimized Images** with Next.js Image component
- **Contact Form** with validation
- **Easy Content Management** via JSON data files
- **SEO Optimized** with proper meta tags
- **Mobile-Friendly** with responsive navigation
- **Fast Performance** with Next.js optimization

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with Header & Footer
│   ├── globals.css           # Global styles
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── packages/
│   │   └── page.tsx          # Tour packages page
│   ├── gallery/
│   │   └── page.tsx          # Gallery page
│   └── contact/
│       └── page.tsx          # Contact page
├── components/               # Reusable React components
│   ├── Header.tsx            # Navigation header with mobile menu
│   ├── Hero.tsx              # Landing hero section
│   ├── Tours.tsx             # Tour packages display
│   ├── Testimonials.tsx      # Customer testimonials
│   ├── Gallery.tsx           # Photo gallery
│   ├── Contact.tsx           # Contact form
│   └── Footer.tsx            # Footer with links
└── data/                     # Content management (easy to update!)
    ├── tours.json            # Tour packages data
    ├── testimonials.json      # Customer reviews
    └── agency.json           # Agency information
```

## 🚀 Quick Start

### Installation & Setup
```bash
cd nextjs-app
npm install
```

### Running Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## ✏️ How to Customize Content

All content is managed through JSON files in `src/data/` - **NO coding required!**

### Update Tour Packages
Edit `src/data/tours.json` - Add, remove, or modify tour packages with pricing, duration, difficulty level.

### Update Testimonials
Edit `src/data/testimonials.json` - Add customer reviews and ratings.

### Update Agency Info
Edit `src/data/agency.json` - Update contact details, hours, social media links.

## 🎨 Website Sections

- **Hero Section** - Animated banner with CTA buttons
- **Tour Packages** - Interactive cards with pricing
- **Testimonials** - Customer reviews with ratings
- **Gallery** - Image showcase
- **Contact Form** - Fully functional contact form
- **Responsive Navigation** - Mobile-friendly menu
- **Professional Footer** - Links and social media

## 🔧 Technologies Used

- Next.js 16.2.4
- React 19.2.4
- TypeScript
- Tailwind CSS 4
- Framer Motion (animations)
- React Hook Form (contact form)

## 🖼️ Adding Images

1. Place images in `public/images/` directory
2. Update image paths in `src/data/` JSON files
3. Images are automatically optimized by Next.js

## 🤖 Multi-Agent Automation System

This project includes a **complete multi-agent automation system** for building, security, marketing, and deployment!

### 🏗️ Build Agent
Automated testing, linting, and build verification
- ESLint code quality checks
- TypeScript type checking
- Unit tests
- Build verification
- Dependency analysis

### 🔒 Security Agent
Continuous security scanning and vulnerability detection
- NPM audit
- Secret scanning
- Code analysis
- License compliance
- Daily automated scans

### 📱 Marketing Agent
Content generation and SEO optimization
- Meta tag generation
- Social media content
- Sitemap generation
- SEO analysis
- Analytics configuration

### 🚀 Deployment Agent
Production deployment with health monitoring
- Pre-deployment checks
- Database backups
- Staging & production deployment
- Health checks
- Blue-green deployment

### 📚 Documentation
- **AGENTS_PLAN.md** - Complete architecture and planning document
- **AGENTS.md** - Comprehensive agent system guide
- **QUICKSTART.md** - Get started in 60 seconds
- **DOCS.md** - Documentation index

### ⚡ Quick Start with Agents

```bash
# Run all agents locally (before committing)
node .github/scripts/build-agent.js
node .github/scripts/security-agent.js
node .github/scripts/marketing-agent.js
node .github/scripts/deploy-agent.js

# Commit and push to GitHub
git push origin main

# Monitor workflows in Actions tab
```

**Learn more:** See [QUICKSTART.md](QUICKSTART.md) for complete setup

---

## 📱 Features

✅ Fully Responsive (Mobile, Tablet, Desktop)  
✅ Smooth Animations & Transitions  
✅ Contact Form with Validation  
✅ SEO Optimized  
✅ Fast Loading  
✅ Easy Content Management  
✅ Multi-Agent Automation  
✅ CI/CD Pipeline  
✅ Security Scanning  
✅ Automated Marketing  
✅ Production Deployment  

## 🚀 Deploy

Ready to deploy? Use Vercel (recommended):
```bash
npm install -g vercel
vercel
```

Also works with Netlify, AWS, Docker, or any Node.js hosting.

## 📞 Website Pages

- **Home** (`/`) - Landing page with all sections
- **About** (`/about`) - Agency story and team
- **Packages** (`/packages`) - Tour offerings
- **Gallery** (`/gallery`) - Photo gallery
- **Contact** (`/contact`) - Contact form and info

---

**Built with ❤️ for Safari Makarska**
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
