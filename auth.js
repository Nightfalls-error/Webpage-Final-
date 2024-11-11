// auth.js

import { auth, db } from './firebase-config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { 
    doc, 
    setDoc 
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Sign Up Form
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store additional user info in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email
            });

            // Redirect to homepage
            window.location.href = "homepage.html";
        } catch (error) {
            console.error("Error signing up:", error);
            alert(error.message);
        }
    });
}

// Log In Form
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to homepage
            window.location.href = "homepage.html";
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Incorrect email or password.");
        }
    });
}

// Password Reset
const resetPasswordLink = document.getElementById('reset-password');
if (resetPasswordLink) {
    resetPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        const email = prompt("Please enter your email for password reset:");
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Password reset email sent!");
                })
                .catch((error) => {
                    console.error("Error sending password reset email:", error);
                    alert("Error: " + error.message);
                });
        }
    });
}

// Log Out Button
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        signOut(auth).then(() => {
            window.location.href = "login.html";
        }).catch((error) => {
            console.error("Error signing out:", error);
            alert("Error signing out.");
        });
    });
}

// Authentication State Observer
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // User is signed out, redirect to login
        const currentPage = window.location.pathname.split("/").pop();
        if (currentPage !== "login.html" && currentPage !== "signup.html" && currentPage !== "index.html") {
            window.location.href = "login.html";
        }
    }
});
