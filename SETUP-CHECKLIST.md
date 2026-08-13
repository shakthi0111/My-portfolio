# Portfolio Website - Setup Checklist

Follow these steps in order to get your portfolio online:

## ✅ Pre-Deployment Checklist

### 1. Firebase Project Setup
- [ ] Create Firebase project at https://console.firebase.google.com/
- [ ] Copy Firebase config from Project Settings
- [ ] Paste config into `firebase-config.js`

### 2. Firestore Database
- [ ] Go to Firestore Database in Firebase Console
- [ ] Create a database
- [ ] Start in "Test mode" (we'll secure it in step 3)

### 3. Firebase Authentication
- [ ] Enable "Email/Password" authentication method
- [ ] Create an admin user account (use your email)
- [ ] Copy the admin user's UID
- [ ] Add UID to `firestore-rules.txt`

### 4. Firestore Security Rules
- [ ] Open "Rules" tab in Firestore
- [ ] Paste rules from `firestore-rules.txt`
- [ ] Replace 'YOUR_ADMIN_UID_HERE' with your actual UID
- [ ] Click "Publish"

### 5. Add Your Files
- [ ] Add your resume as `Shakthi-Devi-V-Resume.pdf`
- [ ] Update contact info in `index.html` (if needed)
- [ ] Update projects and skills in `index.html` (if needed)

### 6. Local Testing
- [ ] Open `index.html` in browser
- [ ] Test navigation and links
- [ ] Test contact form submission
- [ ] Check console (F12) for errors
- [ ] Open `admin.html` and log in
- [ ] Verify submitted message appears in table

### 7. Deploy
Choose one platform:

**Firebase Hosting (Recommended):**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

**GitHub Pages:**
- [ ] Create GitHub repo
- [ ] Push files
- [ ] Enable Pages in Settings

**Netlify:**
- [ ] Drag and drop folder to Netlify
- [ ] Or connect GitHub repo

**Traditional Hosting:**
- [ ] Upload via FTP
- [ ] Ensure HTTPS is enabled

---

## Quick Reference: Firebase Setup

### Getting Your Firebase Config:

1. Firebase Console → Your Project
2. Settings ⚙️ → Project Settings
3. Scroll to "Your apps" section
4. Copy this:

```javascript
const firebaseConfig = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};
```

### Getting Your Admin UID:

1. Firebase Console → Authentication → Users
2. Find your admin user
3. Copy the UID
4. Paste in `firestore-rules.txt`:

```javascript
return userId in ['YOUR_ADMIN_UID_HERE'];
// Becomes:
return userId in ['abc123xyz789def456'];
```

---

## Testing the Complete Flow

### Test 1: Contact Form Works
1. Open `index.html`
2. Scroll to Contact section
3. Fill form and submit
4. Should see success message

### Test 2: Data in Database
1. Open Firebase Console
2. Go to Firestore Database
3. Check `contact_messages` collection
4. Your test message should be there

### Test 3: Admin Dashboard Works
1. Open `admin.html`
2. Log in with your email/password
3. Should see the test message
4. Click "View" to see full message
5. Try deleting a message

### Test 4: Responsive on Mobile
1. Open `index.html` on your phone
2. Check all sections display correctly
3. Test hamburger menu
4. Submit form from phone
5. Check message appears in admin dashboard on laptop

---

## Common Issues & Fixes

### Contact form says "Database connection error"
- ✅ Check firebase-config.js has correct values
- ✅ Verify Firestore Database is created
- ✅ Check browser console (F12) for errors
- ✅ Make sure you're using HTTPS

### Can't log into admin panel
- ✅ Verify admin user exists in Firebase Authentication
- ✅ Check email and password are correct
- ✅ Make sure "Email/Password" is enabled
- ✅ Try resetting password in Firebase Console

### Admin dashboard shows no messages
- ✅ Check Firestore rules are published
- ✅ Verify your admin UID is correct
- ✅ Make sure you're logged in as the right user
- ✅ Check the messages collection exists

---

## Updating After Deployment

### Update Project Info
1. Edit `index.html`
2. Upload to your host
3. Done!

### Update Resume
1. Replace `Shakthi-Devi-V-Resume.pdf`
2. Upload to your host
3. Done!

### Update Skills/Projects
1. Edit `index.html`
2. Upload to your host
3. Done!

---

## File Checklist Before Deploying

Make sure you have these files:
- [ ] index.html
- [ ] admin.html
- [ ] styles.css
- [ ] script.js
- [ ] admin.js
- [ ] firebase-config.js (with YOUR config)
- [ ] Shakthi-Devi-V-Resume.pdf (your actual resume)
- [ ] README.md
- [ ] SETUP-CHECKLIST.md (this file)
- [ ] firestore-rules.txt (reference only)

---

## Getting Help

**Firebase Documentation:** https://firebase.google.com/docs

**Firebase Support:** https://firebase.google.com/support

**Check browser console:** Press F12, click Console tab

**Read the README.md:** For detailed information

---

## Important: Before You Go Live

✅ **Security:**
- [ ] Firebase config has YOUR values (not placeholder)
- [ ] Admin UID is updated in firestore-rules.txt
- [ ] Security rules are published
- [ ] Using strong admin password

✅ **Content:**
- [ ] Your correct email and phone
- [ ] Your actual resume PDF
- [ ] Real project links
- [ ] Accurate education/experience
- [ ] Your real LinkedIn and GitHub

✅ **Testing:**
- [ ] Contact form works
- [ ] Admin dashboard works
- [ ] Resume downloads
- [ ] All links work
- [ ] Mobile layout works
- [ ] No console errors

---

When everything is checked, you're ready to deploy! 🚀
