# Portfolio Website - Complete File Manifest

This document explains every file in your portfolio and what to do with it.

---

## 🎯 Main Website Files

### 1. `index.html`
**Purpose:** Main portfolio website that visitors see

**What to do:**
- ✅ **DO:** Read this file to understand structure
- ✅ **DO:** Update contact info (email, phone) if needed
- ✅ **DO:** Update project links and descriptions
- ❌ **DON'T:** Change file name
- ❌ **DON'T:** Delete any sections unless you're sure

**Key sections to customize:**
- Hero section (line ~80): Your tagline
- About section (line ~105): Your bio
- Contact info (line ~400+): Email, phone, location
- Projects section (line ~300): Your projects
- Certifications: Your certs
- Education: Your education details

**When to upload:** After any content updates

---

### 2. `styles.css`
**Purpose:** All website styling and responsive design

**What to do:**
- ✅ **DO:** Leave it as is
- ✅ **DO:** Customize colors if desired:
  - Line 12-20: Color variables (--primary-color, etc.)
  - Change `#0066cc` to your brand color
- ❌ **DON'T:** Delete CSS classes used by HTML
- ❌ **DON'T:** Change file name

**Optional customization:**
```css
:root {
    --primary-color: #0066cc;  /* Change this to your brand color */
    --secondary-color: #0052a3;
    /* ... */
}
```

**When to upload:** Only if you customize colors

---

### 3. `script.js`
**Purpose:** Main website functionality (form, navigation, etc.)

**What to do:**
- ✅ **DO:** Leave as is
- ✅ **DO:** Make sure firebase-config.js is loaded before this
- ❌ **DON'T:** Edit this file unless you know JavaScript
- ❌ **DON'T:** Change file name

**When to upload:** Deployment only

---

## 🔐 Firebase & Backend Files

### 4. `firebase-config.js`
**Purpose:** Firebase configuration (MOST IMPORTANT)

**WHAT YOU MUST DO:**
1. ✅ **REPLACE** placeholder values with YOUR Firebase config:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY_HERE",          // ← REPLACE
       authDomain: "YOUR_AUTH_DOMAIN_HERE",  // ← REPLACE
       projectId: "YOUR_PROJECT_ID_HERE",    // ← REPLACE
       storageBucket: "YOUR_STORAGE_BUCKET_HERE", // ← REPLACE
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE", // ← REPLACE
       appId: "YOUR_APP_ID_HERE"             // ← REPLACE
   };
   ```

2. ✅ **GET VALUES FROM:**
   - Go to Firebase Console
   - Project Settings
   - Copy the Web app config

3. ⚠️ **IMPORTANT SECURITY:**
   - Never commit this to public GitHub
   - Add to .gitignore (already done)
   - This contains your API keys
   - Keep this file private

**When to upload:** MUST upload with YOUR config before going live

---

### 5. `firestore-rules.txt`
**Purpose:** Security rules for your database (reference file)

**WHAT YOU MUST DO:**
1. ✅ **COPY** the rules from this file
2. ✅ **PASTE** into Firebase Console > Firestore > Rules tab
3. ✅ **REPLACE** 'YOUR_ADMIN_UID_HERE' with your admin user ID:
   ```javascript
   function isAdmin(userId) {
       return userId in ['YOUR_ADMIN_UID_HERE'];  // ← REPLACE
   }
   ```
4. ✅ **CLICK** "Publish" button

**How to get your Admin UID:**
1. Firebase Console > Authentication > Users
2. Find your admin user
3. Copy the UID
4. Paste in the rules

**What these rules do:**
- ✅ Anyone can submit contact forms
- ✅ Only you (admin) can read messages
- ✅ Only you can delete messages
- ✅ No one can modify messages

**Status:** Reference file only (not uploaded to server)

---

## 👨‍💼 Admin Dashboard Files

### 6. `admin.html`
**Purpose:** Dashboard to view contact form submissions

**What to do:**
- ✅ **DO:** Keep this file
- ✅ **DO:** Upload to your hosting
- ✅ **DO:** Go to https://your-domain/admin.html to log in
- ❌ **DON'T:** Share this link publicly
- ❌ **DON'T:** Change file name

**How to use:**
1. Open `admin.html` in browser
2. Log in with your email/password (set in Firebase)
3. View all contact submissions
4. Click "View" to see full message
5. Click "Delete" to remove message

**Security:**
- Only you should have access
- Password protected by Firebase
- Don't share this URL

**When to upload:** Before going live

---

### 7. `admin.js`
**Purpose:** Functionality for admin dashboard

**What to do:**
- ✅ **DO:** Leave as is
- ✅ **DO:** Make sure this loads with admin.html
- ❌ **DON'T:** Edit this file
- ❌ **DON'T:** Change file name

**When to upload:** Deployment only

---

## 📄 Supporting Files

### 8. `Shakthi-Devi-V-Resume.pdf`
**Purpose:** Your resume that users download

**WHAT YOU MUST DO:**
1. ✅ **REPLACE** with your actual resume PDF
2. ✅ **KEEP** the filename: `Shakthi-Devi-V-Resume.pdf`
   - OR update the filename in index.html:
     ```html
     <a href="YOUR-NEW-FILENAME.pdf" download="YOUR-NEW-FILENAME.pdf">
     ```
3. ✅ **MAKE SURE** it's in the same folder as index.html

**How it works:**
- Users click "Download Resume" button
- File downloads to their computer
- Users click "View Resume" button
- File opens in a new browser tab

**When to update:**
- When your resume changes
- Keep it current

---

### 9. `README.md`
**Purpose:** Complete documentation and setup guide

**What to do:**
- ✅ **DO:** Read this when you have questions
- ✅ **DO:** Share with anyone helping you
- ✅ **DO:** Follow setup instructions if needed
- ❌ **DON'T:** Edit this file
- ❌ **DON'T:** Upload to website (it's documentation only)

**Read when:**
- Setting up Firebase
- Deploying for first time
- Troubleshooting issues
- Updating content

---

### 10. `SETUP-CHECKLIST.md`
**Purpose:** Quick checklist to remember all setup steps

**What to do:**
- ✅ **DO:** Print or reference while setting up
- ✅ **DO:** Check off each step as you complete
- ❌ **DON'T:** Upload to website (documentation only)

**Use when:**
- First time setup
- Forgot a step
- Need quick reference

---

### 11. `DEPLOYMENT-GUIDE.md`
**Purpose:** Instructions for uploading your site to different platforms

**What to do:**
- ✅ **DO:** Choose one platform (Firebase, GitHub Pages, Netlify, etc.)
- ✅ **DO:** Follow the instructions for that platform
- ❌ **DON'T:** Try all platforms (choose one)
- ❌ **DON'T:** Upload to website (documentation only)

**Choose based on:**
- **Firebase Hosting:** Best integration with Firebase
- **Netlify:** Easiest setup
- **GitHub Pages:** Best if you use GitHub
- **Traditional Hosting:** If you already have hosting

---

### 12. `FILE-MANIFEST.md` (This File)
**Purpose:** Explains what each file does and when to use it

**Use this:**
- When you're confused about a file
- When deciding what to edit
- When uploading files

---

### 13. `.gitignore`
**Purpose:** Tells Git which files NOT to upload to GitHub

**What to do:**
- ✅ **DO:** Keep this file
- ✅ **DO:** Use with GitHub
- ❌ **DON'T:** Edit this file
- ❌ **DON'T:** Upload to website (Git only)

**Why it matters:**
- Prevents firebase-config.js from being uploaded to public GitHub
- Protects your API keys
- Is automatically used by Git

---

## 📊 File Upload Checklist

### Upload to Your Website (index.html hosting)
✅ UPLOAD these files:
```
index.html                    ← Main website
admin.html                    ← Admin dashboard
styles.css                    ← Styling
script.js                     ← Website functionality
admin.js                      ← Admin functionality
firebase-config.js           ← WITH YOUR CONFIG VALUES ⚠️
Shakthi-Devi-V-Resume.pdf    ← Your resume
```

### DON'T upload (Documentation only)
❌ DON'T upload these:
```
README.md                     ← Documentation
SETUP-CHECKLIST.md           ← Documentation
DEPLOYMENT-GUIDE.md          ← Documentation
FILE-MANIFEST.md             ← Documentation (this file)
firestore-rules.txt          ← Reference (goes in Firebase, not hosting)
.gitignore                   ← Git only (if using GitHub)
```

---

## 🔄 File Dependencies

```
index.html
├── styles.css (required)
├── script.js (required)
├── firebase-config.js (required - WITH YOUR CONFIG)
└── Shakthi-Devi-V-Resume.pdf (required)

admin.html
├── firebase-config.js (required - WITH YOUR CONFIG)
└── admin.js (required)

firebase-config.js
├── Firebase SDK (loaded from CDN in HTML files)
└── Your Firebase config values (required)
```

**Important:** If any required file is missing, the website won't work!

---

## 🚀 Quick Start

1. **Edit content:**
   - Open `index.html` in a text editor
   - Update your contact info, projects, skills
   - Save the file

2. **Add resume:**
   - Save your resume as `Shakthi-Devi-V-Resume.pdf`
   - Put in same folder as index.html

3. **Setup Firebase:**
   - Get your Firebase config
   - Update `firebase-config.js`
   - Setup Firestore and Auth in Firebase Console
   - Paste security rules from `firestore-rules.txt`

4. **Test locally:**
   - Open `index.html` in your browser
   - Test all sections and forms

5. **Deploy:**
   - Follow DEPLOYMENT-GUIDE.md
   - Choose Firebase, Netlify, GitHub Pages, or traditional hosting

6. **Go live:**
   - Your site is now online!

---

## 📞 File Support Matrix

| File | Must Edit | Must Upload | Can Delete | Purpose |
|------|-----------|------------|-----------|---------|
| index.html | ✅ Yes | ✅ Yes | ❌ No | Main website |
| admin.html | ❌ No | ✅ Yes | ❌ No | Admin panel |
| styles.css | ✅ Optional | ✅ Yes | ❌ No | Styling |
| script.js | ❌ No | ✅ Yes | ❌ No | Functionality |
| admin.js | ❌ No | ✅ Yes | ❌ No | Admin functionality |
| firebase-config.js | ✅ YES! | ✅ Yes | ❌ No | Firebase setup |
| Shakthi-Devi-V-Resume.pdf | ✅ Yes | ✅ Yes | ❌ No | Your resume |
| README.md | ❌ No | ❌ No | ✅ Ok | Documentation |
| SETUP-CHECKLIST.md | ❌ No | ❌ No | ✅ Ok | Documentation |
| DEPLOYMENT-GUIDE.md | ❌ No | ❌ No | ✅ Ok | Documentation |
| FILE-MANIFEST.md | ❌ No | ❌ No | ✅ Ok | Documentation |
| firestore-rules.txt | ✅ Maybe | ❌ No | ✅ Ok | Firebase reference |
| .gitignore | ❌ No | ❌ No | ✅ Ok | Git security |

---

## ✅ Final Checklist

Before going live, verify:

- [ ] index.html has YOUR content
- [ ] firebase-config.js has YOUR Firebase config
- [ ] firestore-rules.txt has YOUR admin UID
- [ ] Shakthi-Devi-V-Resume.pdf is YOUR resume
- [ ] All links work
- [ ] Contact form submits
- [ ] No broken images or CSS
- [ ] Mobile layout works

**Once verified, you're ready to deploy!** 🚀

---

Need more details on any file? Check README.md or SETUP-CHECKLIST.md
