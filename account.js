// account.js

import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { 
    doc, 
    getDoc 
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const userNameElement = document.getElementById('user-name');
const userEmailElement = document.getElementById('user-email');

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            const data = docSnap.data();
            userNameElement.textContent = data.name;
            userEmailElement.textContent = data.email;
        } else {
            console.log("No such document!");
        }
    } else {
        // User is not logged in
    }
});
