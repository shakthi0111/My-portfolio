# Shakthi Devi V - Professional Portfolio Website

A modern, fully responsive portfolio website for a BCA graduate and Web Developer, built with HTML, CSS, JavaScript, and Firebase integration for contact form submissions.

## Features

✨ **Portfolio Sections:**
- Hero section with CTA buttons
- About me with contact information
- Technical skills (Frontend, Backend, Database)
- Soft skills showcase
- Education details
- Internship experience
- Certifications
- Project showcase with live links
- Resume download/view
- Functional contact form with Firebase backend

✨ **Technical Features:**
- Fully responsive design (mobile, tablet, desktop)
- Sticky navigation with smooth scrolling
- Mobile hamburger menu
- Form validation with error messages
- Firebase Firestore database integration
- Firebase Authentication for admin access
- Admin dashboard to view contact submissions
- Firestore security rules for data protection
- Fast loading and optimized performance
- Accessible HTML and CSS

## Project Structure

```
portfolio/
├── index.html                 # Main portfolio website
├── admin.html                 # Admin dashboard for contact submissions
├── styles.css                 # Responsive styling
├── script.js                  # Main website functionality
├── admin.js                   # Admin dashboard functionality
├── firebase-config.js         # Firebase configuration (requires setup)
├── firestore-rules.txt        # Firestore security rules
├── Shakthi-Devi-V-Resume.pdf # Resume file (add your resume)
└── README.md                  # This file
```

## Getting Started

### Prerequisites

- A Firebase project (free tier is sufficient)
- A text editor or IDE
- A modern web browser
- Your resume PDF file

### Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "shakthi-portfolio")
4. Follow the setup wizard
5. Enable Google Analytics (optional)

### Step 2: Get Firebase Configuration

1. In Firebase Console, click Settings ⚙️ > Project settings
2. Scroll to "Your apps" section
3. Click on your Web app (or create one if needed)
4. Copy the config object that looks like:

```javascript
{
  apiKey: "AIzaSyD...",
  authDomain: "shakthi-portfolio.firebaseapp.com",
  projectId: "shakthi-portfolio",
  storageBucket: "shakthi-portfolio.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123xyz..."
}
```

### Step 3: Configure Firebase Settings

1. Open `firebase-config.js` in a text editor
2. Replace the placeholder values with your Firebase config:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",           // ← Replace
    authDomain: "YOUR_AUTH_DOMAIN_HERE",   // ← Replace
    projectId: "YOUR_PROJECT_ID_HERE",     // ← Replace
    storageBucket: "YOUR_STORAGE_BUCKET_HERE", // ← Replace
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE", // ← Replace
    appId: "YOUR_APP_ID_HERE"              // ← Replace
};
```

3. Save the file

### Step 4: Setup Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click "Create database"
3. Select **Start in test mode** (we'll secure it in the next step)
4. Choose your region (closest to your users)
5. Click "Create"

### Step 5: Configure Firestore Security Rules

1. In Firestore, click on the **"Rules"** tab
2. Clear all existing content
3. Paste the security rules from `firestore-rules.txt`
4. **Important:** First, get your Admin UID:
   - Go to **Firebase Console > Authentication**
   - Create a new user with your email and a secure password
   - Copy the UID of this user
5. In the security rules, replace `'YOUR_ADMIN_UID_HERE'` with your actual UID
6. Click **"Publish"** to apply the rules

Example with your actual UID:
```javascript
function isAdmin(userId) {
  return userId in ['abc123xyz789def456'];  // Your actual admin UID
}
```

### Step 6: Setup Firebase Authentication

1. In Firebase Console, go to **Authentication**
2. Click **"Sign-in method"** tab
3. Enable **"Email/Password"**:
   - Click on it
   - Enable "Email/Password"
   - Click "Save"

### Step 7: Add Your Resume

1. Save your resume as **`Shakthi-Devi-V-Resume.pdf`**
2. Place it in the portfolio folder (same location as index.html)
3. The website will automatically link to it

### Step 8: Test Locally

1. Open `index.html` in your web browser
2. Test all sections:
   - Navigation scrolling
   - Mobile hamburger menu (shrink browser window)
   - Project links
   - Resume download/view
   - Contact form

### Step 9: Test Contact Form

1. Fill out the contact form on the website
2. Submit it
3. Go to Firebase Console > Firestore > collection `contact_messages`
4. Verify your message appears in the database

### Step 10: Access Admin Dashboard

1. Open `admin.html` in your browser
2. Log in with the admin email/password you created in Step 5
3. You should see the contact form submission in the table
4. Click "View" to see full message details
5. Click "Delete" to remove messages

## Deployment

### Option 1: Deploy on Firebase Hosting (Recommended)

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase in your project folder:**
   ```bash
   firebase login
   firebase init hosting
   ```
   - When asked "What do you want to use as your public directory?" → Answer: `.` (current directory)
   - When asked "Configure as single-page app" → Answer: `N`

3. **Deploy:**
   ```bash
   firebase deploy
   ```

4. **Your site will be live at:**
   - `https://your-project-id.web.app`
   - `https://your-project-id.firebaseapp.com`

### Option 2: Deploy on GitHub Pages

1. Create a GitHub repository named `portfolio`
2. Push all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch"
5. Choose `main` branch and root folder
6. Your site will be at `https://your-github-username.github.io/portfolio/`

### Option 3: Deploy on Netlify

1. Drag and drop the portfolio folder into [Netlify](https://netlify.com)
2. Or connect your GitHub repository
3. Your site will be deployed automatically

### Option 4: Traditional Web Hosting

1. Upload all files to your web hosting provider via FTP
2. Make sure the hosting supports HTTPS (required by Firebase)
3. Your site will work on your domain

## Updating Content

### Update Your Information

Edit `index.html` and search for:
- `shakthiv966@gmail.com` - Replace with your email
- `8553083297` - Replace with your phone
- Project URLs and descriptions
- Education details
- Skills and certifications

### Update Your Resume

1. Replace the `Shakthi-Devi-V-Resume.pdf` file with your new resume
2. Keep the filename the same, or update the filename in `index.html`:
   ```html
   <a href="your-new-filename.pdf" download="your-new-filename.pdf">
   ```

### Update Projects

Edit the Projects section in `index.html`:
```html
<div class="project-card">
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description</p>
        <div class="project-tech">
            <span class="tech-badge">Technology 1</span>
            <span class="tech-badge">Technology 2</span>
        </div>
        <div class="project-buttons">
            <a href="your-project-url" target="_blank" class="btn btn-primary">
                <i class="fas fa-external-link-alt"></i> Live Project
            </a>
            <a href="your-github-repo" target="_blank" class="btn btn-secondary">
                <i class="fab fa-github"></i> GitHub
            </a>
        </div>
    </div>
</div>
```

### Update Skills

Edit the Skills section in `index.html` to add/remove skill badges:
```html
<span class="skill-badge">Your Skill</span>
```

## Viewing Contact Submissions

### On Your Laptop

1. Go to `admin.html`
2. Log in with your admin credentials
3. View all contact form submissions in the table
4. Click "View" for full message details
5. Click "Delete" to remove unwanted messages

### On Your Mobile Phone

1. Open the portfolio website (index.html)
2. Fill out and submit the contact form
3. The submission is saved to Firebase Firestore
4. Go to your laptop and open `admin.html`
5. You'll see the message submitted from your phone
6. The data syncs in real-time across devices

## Security Considerations

✅ **What's Protected:**
- Contact form is open to visitors (anyone can submit)
- Contact messages can only be read by authenticated admins
- Contact messages cannot be modified, only deleted
- Firestore rules enforce data validation

✅ **Best Practices:**
1. **Never commit Firebase credentials to public Git repositories**
   - Add `firebase-config.js` to `.gitignore` if using Git
   - Store credentials in environment variables for sensitive deployments

2. **Use strong admin password**
   - Don't use simple passwords like "password123"
   - Use a password manager

3. **Keep admin credentials private**
   - Don't share `admin.html` link publicly
   - Only you should access the admin dashboard

4. **Monitor your Firebase usage**
   - Free tier includes generous quotas
   - Monitor read/write operations in Firebase Console
   - Implement rate limiting if needed (can be added to rules)

5. **Enable backup/export**
   - Periodically export your contact messages
   - Firebase has built-in backup features
   - Can export Firestore data to CSV

## Troubleshooting

### Contact Form Not Submitting

**Problem:** "Database connection error" message

**Solution:**
1. Check Firebase configuration in `firebase-config.js`
2. Verify Firestore Database is created and active
3. Check browser console for error messages (F12)
4. Ensure HTTPS is used (Firebase requires it)

### Can't Log Into Admin Dashboard

**Problem:** "Login failed" error

**Solution:**
1. Verify you created an admin user in Firebase Authentication
2. Check that email/password are correct
3. Make sure "Email/Password" is enabled in Firebase Authentication
4. Try resetting your password in Firebase Console

### Messages Not Appearing in Admin Dashboard

**Problem:** Form submits but messages don't show in admin panel

**Solution:**
1. Check Firestore security rules are published
2. Verify your Admin UID in the rules is correct
3. Make sure you're logged in as the correct admin user
4. Check that Firestore collection exists and has documents

### Website Not Loading

**Problem:** Page is blank or shows errors

**Solution:**
1. Open browser Developer Tools (F12)
2. Check Console tab for error messages
3. Verify Firebase config is correct in `firebase-config.js`
4. Make sure all HTML, CSS, and JS files are in the same folder
5. Test in a different browser

## Browser Support

✅ Works on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

Note: Requires HTTPS for Firebase to work (except localhost for testing)

## Performance Optimization

The portfolio is already optimized for:
- ⚡ Fast loading (minimal dependencies)
- 📱 Mobile-first responsive design
- ♿ Accessible HTML/CSS
- 🔍 SEO-friendly structure
- 🎯 Professional appearance

## Next Steps

1. ✅ Deploy your portfolio
2. ✅ Share the link with recruiters
3. ✅ Monitor contact form submissions
4. ✅ Keep your portfolio up-to-date with latest projects
5. ✅ Share on LinkedIn and GitHub

## Support & Help

If you encounter issues:

1. **Firebase Issues:**
   - Check [Firebase Documentation](https://firebase.google.com/docs)
   - Visit [Firebase Support](https://firebase.google.com/support)

2. **General Web Issues:**
   - Check browser console (F12) for error messages
   - Test in different browser
   - Clear browser cache

3. **Deployment Issues:**
   - Refer to platform-specific documentation
   - Check that all files are uploaded
   - Verify file paths are correct

## Making Changes After Deployment

The website auto-updates! Here's how:

### On Firebase Hosting:
```bash
# After making changes locally:
firebase deploy
```

### On GitHub Pages:
```bash
# After making changes:
git add .
git commit -m "Update portfolio"
git push origin main
```

### On Netlify:
- Just push to GitHub, Netlify auto-deploys

### On Traditional Hosting:
- Use FTP to upload updated files
- Clear browser cache to see changes

## Important Files

| File | Purpose |
|------|---------|
| `index.html` | Main portfolio website |
| `admin.html` | Contact submission dashboard |
| `styles.css` | All website styling |
| `script.js` | Website functionality & form handling |
| `admin.js` | Admin dashboard functionality |
| `firebase-config.js` | Firebase setup (requires configuration) |
| `firestore-rules.txt` | Database security rules |
| `Shakthi-Devi-V-Resume.pdf` | Your resume PDF |

## License

This portfolio is created specifically for Shakthi Devi V. Feel free to customize and use for your personal brand.

---

**Last Updated:** 2026
**Version:** 1.0
**Status:** Ready for deployment
