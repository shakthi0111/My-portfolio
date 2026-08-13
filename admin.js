// Admin Dashboard JavaScript
// ==========================

let currentUser = null;

// UI Elements
const authSection = document.getElementById('authSection');
const dashboardSection = document.getElementById('dashboardSection');
const loginForm = document.getElementById('loginForm');
const authAlert = document.getElementById('authAlert');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userEmailDisplay = document.getElementById('userEmailDisplay');
const loadingSpinner = document.getElementById('loadingSpinner');
const emptyState = document.getElementById('emptyState');
const tableWrapper = document.getElementById('tableWrapper');
const messagesBody = document.getElementById('messagesBody');
const messageCount = document.getElementById('messageCount');
const messageModal = document.getElementById('messageModal');

// Check authentication state
auth.onAuthStateChanged((user) => {
    if (user) {
        currentUser = user;
        showDashboard();
        loadMessages();
    } else {
        currentUser = null;
        showLoginForm();
    }
});

// Show login form
function showLoginForm() {
    authSection.style.display = 'flex';
    dashboardSection.classList.remove('active');
}

// Show dashboard
function showDashboard() {
    authSection.style.display = 'none';
    dashboardSection.classList.add('active');
    userEmailDisplay.textContent = currentUser.email;
}

// Login handler
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    loginBtn.disabled = true;
    loginBtn.textContent = 'Logging in...';
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
        authAlert.classList.remove('show', 'error');
        authAlert.classList.add('success');
        authAlert.innerHTML = '<i class="fas fa-check-circle"></i> Login successful!';
    } catch (error) {
        authAlert.classList.add('show', 'error');
        authAlert.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + error.message;
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = 'Login';
    }
});

// Logout handler
logoutBtn.addEventListener('click', async () => {
    try {
        await auth.signOut();
        messagesBody.innerHTML = '';
        messageCount.textContent = '0';
        tableWrapper.style.display = 'none';
        emptyState.style.display = 'block';
    } catch (error) {
        console.error('Logout error:', error);
    }
});

// Load messages from Firestore
function loadMessages() {
    loadingSpinner.style.display = 'block';
    tableWrapper.style.display = 'none';
    emptyState.style.display = 'none';

    // Query messages ordered by date (newest first)
    db.collection('contact_messages')
        .orderBy('createdAt', 'desc')
        .onSnapshot(
            (snapshot) => {
                loadingSpinner.style.display = 'none';
                messagesBody.innerHTML = '';
                
                if (snapshot.empty) {
                    tableWrapper.style.display = 'none';
                    emptyState.style.display = 'block';
                    messageCount.textContent = '0';
                    return;
                }

                tableWrapper.style.display = 'block';
                emptyState.style.display = 'none';
                messageCount.textContent = snapshot.size;

                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const row = createMessageRow(doc.id, data);
                    messagesBody.appendChild(row);
                });
            },
            (error) => {
                loadingSpinner.style.display = 'none';
                console.error('Error loading messages:', error);
                authAlert.classList.add('show', 'error');
                authAlert.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error loading messages. Please refresh.';
            }
        );
}

// Create table row for a message
function createMessageRow(docId, data) {
    const row = document.createElement('tr');
    
    // Format date
    let dateStr = 'N/A';
    if (data.createdAt) {
        const date = data.createdAt.toDate();
        dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Get message preview
    const preview = data.message.substring(0, 50) + (data.message.length > 50 ? '...' : '');

    row.innerHTML = `
        <td>${escapeHtml(data.name)}</td>
        <td>${escapeHtml(data.email)}</td>
        <td>${escapeHtml(data.subject)}</td>
        <td class="message-preview" title="${escapeHtml(data.message)}">${escapeHtml(preview)}</td>
        <td class="message-date">${dateStr}</td>
        <td>
            <button class="btn-view" onclick="viewMessage('${docId}')">
                <i class="fas fa-eye"></i> View
            </button>
            <button class="btn-delete" onclick="deleteMessage('${docId}')">
                <i class="fas fa-trash"></i> Delete
            </button>
        </td>
    `;

    return row;
}

// View message details
async function viewMessage(docId) {
    try {
        const doc = await db.collection('contact_messages').doc(docId).get();
        const data = doc.data();

        if (!data) return;

        // Populate modal
        document.getElementById('modalName').textContent = data.name;
        document.getElementById('modalEmail').href = `mailto:${data.email}`;
        document.getElementById('modalEmail').textContent = data.email;
        document.getElementById('modalSubject').textContent = data.subject;
        document.getElementById('modalMessage').textContent = data.message;

        // Format date
        let dateStr = 'N/A';
        if (data.createdAt) {
            const date = data.createdAt.toDate();
            dateStr = date.toLocaleString();
        }
        document.getElementById('modalDate').textContent = dateStr;

        // Show modal
        messageModal.classList.add('show');
    } catch (error) {
        console.error('Error viewing message:', error);
        alert('Error loading message');
    }
}

// Close modal
function closeModal() {
    messageModal.classList.remove('show');
}

// Delete message
async function deleteMessage(docId) {
    if (!confirm('Are you sure you want to delete this message?')) {
        return;
    }

    try {
        await db.collection('contact_messages').doc(docId).delete();
        alert('Message deleted successfully');
    } catch (error) {
        console.error('Error deleting message:', error);
        alert('Error deleting message');
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === messageModal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

console.log('Admin dashboard initialized');
