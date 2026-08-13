// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact Form Validation and Firebase Submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Validation functions
const validateName = (name) => {
    return name.trim().length >= 2;
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validateSubject = (subject) => {
    return subject.trim().length >= 3;
};

const validateMessage = (message) => {
    return message.trim().length >= 10;
};

// Clear error messages
const clearErrors = () => {
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
        error.classList.remove('show');
    });
    document.querySelectorAll('input, textarea').forEach(field => {
        field.classList.remove('error');
    });
};

// Show error message
const showError = (fieldId, message) => {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(`${fieldId}Error`);
    field.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
};

// Show form status
const showStatus = (message, isSuccess) => {
    formStatus.textContent = message;
    formStatus.classList.add('show');
    formStatus.classList.toggle('success', isSuccess);
    formStatus.classList.toggle('error', !isSuccess);
    
    if (isSuccess) {
        setTimeout(() => {
            formStatus.classList.remove('show');
            contactForm.reset();
        }, 3000);
    }
};

// Form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();
    formStatus.classList.remove('show');

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Validate
    let hasErrors = false;

    if (!validateName(name)) {
        showError('name', 'Name must be at least 2 characters');
        hasErrors = true;
    }

    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        hasErrors = true;
    }

    if (!validateSubject(subject)) {
        showError('subject', 'Subject must be at least 3 characters');
        hasErrors = true;
    }

    if (!validateMessage(message)) {
        showError('message', 'Message must be at least 10 characters');
        hasErrors = true;
    }

    if (hasErrors) {
        return;
    }

    // Disable submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
        // Add document to Firestore
        const docRef = await db.collection('contact_messages').add({
            name: name,
            email: email,
            subject: subject,
            message: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        showStatus('Thank you for contacting me! Your message has been received.', true);
        console.log('Message sent with ID:', docRef.id);
    } catch (error) {
        console.error('Error sending message:', error);
        showStatus('Error sending message. Please try again later.', false);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Check if Firebase is initialized
window.addEventListener('load', () => {
    // Check if firebase-config.js loaded properly
    if (typeof db === 'undefined') {
        console.error('Firebase not initialized. Please check firebase-config.js');
        showStatus('Database connection error. Please contact directly.', false);
    }
});
