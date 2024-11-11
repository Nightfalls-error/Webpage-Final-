// wordlog.js

import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { 
    collection, 
    getDocs, 
    query, 
    orderBy 
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const wordLogBody = document.getElementById('word-log-body');

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const q = query(collection(db, "users", user.uid, "wordLogs"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const row = document.createElement('tr');
            
            const wordCell = document.createElement('td');
            wordCell.textContent = data.word;
            row.appendChild(wordCell);
            
            const meaningCell = document.createElement('td');
            meaningCell.textContent = data.meaning;
            row.appendChild(meaningCell);
            
            const exampleCell = document.createElement('td');
            exampleCell.textContent = data.example;
            row.appendChild(exampleCell);
            
            wordLogBody.appendChild(row);
        });
    } else {
        // User is not logged in
    }
});
