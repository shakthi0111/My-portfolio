# Deployment Guide

Choose your preferred hosting platform and follow the steps below.

## Option 1: Firebase Hosting (Recommended) ⭐

**Pros:** Free tier, automatic HTTPS, fast CDN, integrated with Firebase

**Steps:**

### Install Firebase CLI

```bash
npm install -g firebase-tools
```

### Login to Firebase

```bash
firebase login
```

### Initialize Firebase

Navigate to your portfolio folder and run:

```bash
firebase init hosting
```

When prompted:
- **"What do you want to use as your public directory?"** → Type: `.` (current directory)
- **"Configure as single-page app?"** → Type: `N`
- **"Set up automatic builds and deploys?"** → Type: `N`

### Deploy

```bash
firebase deploy
```

### View Your Site

Your portfolio will be live at:
- `https://YOUR-PROJECT-ID.web.app`
- `https://YOUR-PROJECT-ID.firebaseapp.com`

### Update After Changes

```bash
# After making changes:
firebase deploy
```

---

## Option 2: GitHub Pages

**Pros:** Free, easy to use, auto-deploys from git, good for version control

**Steps:**

### Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Create new repository named `portfolio`
3. Don't add README/gitignore/license

### Initialize Local Git

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. **Source:** Deploy from a branch
4. **Branch:** main / root
5. Click Save

### View Your Site

Your portfolio will be at:
- `https://YOUR-USERNAME.github.io/portfolio/`

### Update After Changes

```bash
git add .
git commit -m "Update portfolio"
git push
```

Changes deploy automatically in 1-2 minutes.

---

## Option 3: Netlify

**Pros:** Free, very easy, auto-deploys from git, good dashboard

**Steps:**

### Method A: Drag and Drop (Easiest)

1. Go to [Netlify](https://netlify.com)
2. Sign up / Login
3. Drag and drop your portfolio folder
4. Done! 🎉

### Method B: GitHub Integration

1. Push your portfolio to GitHub (see Option 2)
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select GitHub
5. Choose your portfolio repository
6. Click Deploy

### View Your Site

Your portfolio will be at:
- `https://SITE-NAME.netlify.app` (auto-generated)
- Or your custom domain

### Update After Changes

Just push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```

Netlify auto-deploys within seconds!

---

## Option 4: Traditional Web Hosting (cPanel/FTP)

**Pros:** Works anywhere, full control, uses your domain

**Steps:**

### Upload Files

1. Open FTP client (FileZilla, WinSCP, etc.)
2. Connect to your hosting account
3. Navigate to `public_html` folder
4. Upload all portfolio files:
   - index.html
   - admin.html
   - styles.css
   - script.js
   - admin.js
   - firebase-config.js (with YOUR config)
   - Your resume PDF
   - Other files

### Set Up HTTPS

1. In cPanel, go to "AutoSSL" or "Let's Encrypt"
2. Install SSL certificate
3. Make sure HTTPS is enabled

### Test Your Site

1. Go to `https://your-domain.com` (use HTTPS, not HTTP)
2. Test all functionality
3. Check contact form works

### Update After Changes

1. Connect via FTP
2. Replace changed files
3. Changes appear immediately

---

## Comparison Table

| Platform | Cost | Setup Time | Custom Domain | Auto Deploy | CDN | Support |
|----------|------|-----------|----------------|-----------|-----|---------|
| Firebase Hosting | Free | 5 min | Yes | Manual | Yes | Excellent |
| GitHub Pages | Free | 10 min | Yes | Auto | Yes | Good |
| Netlify | Free | 2 min | Yes | Auto | Yes | Excellent |
| Traditional | $3-10/mo | 15 min | Yes | Manual | Depends | Basic |

---

## My Recommendation

**Best for beginners:** Netlify (easiest setup)

**Best for Firebase integration:** Firebase Hosting (tightly integrated)

**Best with version control:** GitHub Pages or Netlify (with GitHub)

**Best for custom domain:** Any of the above

---

## After Deployment

### Test Your Deployed Site

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Links open in new tabs (external)
- [ ] Contact form submits
- [ ] Messages appear in admin dashboard
- [ ] Mobile layout works
- [ ] Resume downloads

### Set Up Custom Domain (Optional)

**Firebase Hosting:**
1. Go to Hosting in Firebase Console
2. Click "Connect domain"
3. Follow the wizard

**Netlify:**
1. Site Settings → Domain Management
2. Add custom domain
3. Update DNS settings

**GitHub Pages:**
1. Settings → Pages
2. Enter custom domain
3. Update DNS settings

**Traditional Hosting:**
- Use your registrar's DNS settings
- Point domain to your hosting

---

## Monitoring Your Site

### Firebase Hosting
- Firebase Console → Hosting → View analytics
- Check request logs
- Monitor bandwidth usage

### Netlify
- Site Analytics dashboard
- Deploy history
- Performance metrics

### GitHub Pages
- GitHub Actions tab (see deployments)
- GitHub Insights

### Traditional Hosting
- cPanel analytics
- Traffic reports
- Server logs

---

## Troubleshooting Deployments

### Site shows 404 errors
- Check all files are uploaded
- Verify file names are correct (case-sensitive)
- Make sure index.html is in root folder

### Images/CSS not loading
- Check file paths in HTML
- Verify files are uploaded
- Clear browser cache

### Contact form not working
- Verify firebase-config.js is deployed with YOUR config
- Check Firestore Database exists
- Verify Security Rules are published
- Check browser console for errors

### Site is slow
- Use Firebase Hosting or Netlify for better CDN
- Compress images
- Minimize CSS/JavaScript
- Enable browser caching

---

## Keeping Your Site Updated

### Update Information
1. Edit index.html locally
2. Push to your hosting platform
3. Changes appear within seconds/minutes

### Update Resume
1. Replace Shakthi-Devi-V-Resume.pdf
2. Push to your hosting platform
3. Changes appear immediately

### Update Projects/Skills
1. Edit index.html
2. Push to your hosting platform
3. Changes appear immediately

### If You Use GitHub
```bash
# After making changes locally:
git add .
git commit -m "Update portfolio - added new project"
git push origin main
```

---

## Important Reminders

⚠️ **Before you deploy:**
- [ ] Firebase config has YOUR actual credentials
- [ ] Admin UID is in firestore-rules.txt
- [ ] Security rules are published
- [ ] Your correct contact info is in index.html
- [ ] Your resume is added
- [ ] Using HTTPS (all platforms support this)

⚠️ **Security:**
- Never share your Firebase credentials
- Don't commit firebase-config.js to public repos
- Use .gitignore to protect sensitive files
- Use strong passwords for admin account

---

## Need Help?

**Firebase Hosting Issues:**
https://firebase.google.com/docs/hosting

**Netlify Help:**
https://docs.netlify.com/

**GitHub Pages Help:**
https://docs.github.com/en/pages

**Traditional Hosting:**
Check your hosting provider's support

---

**Choose a platform and deploy! Your portfolio will be live in minutes.** 🚀
