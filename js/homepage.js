// homepage.js

import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { 
    collection, 
    addDoc, 
    getDoc, 
    doc 
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Sample Word Database
const words = [
    {
        word: "Jeprox",
        meaning: "Cool or laid-back person",
        example: "Si Juan ay isang tunay na jeprox, lagi siyang relax kahit anong mangyari."
    },
    {
        word: "Chika",
        meaning: "Gossip or talk",
        example: "May bagong chika si Maria tungkol sa kanilang barkada."
    },
    // Add more words as needed
    // ...
];

const wordElement = document.getElementById('word');
const meaningElement = document.getElementById('meaning');
const exampleElement = document.getElementById('example');
const newWordBtn = document.getElementById('new-word-btn');

let currentUser = null;

onAuthStateChanged(auth, (user) => {
    if (user) {
        currentUser = user;
        // Optionally, you can fetch user-specific data here
    } else {
        // User is signed out
    }
});

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function displayWord(wordObj) {
    wordElement.textContent = wordObj.word;
    meaningElement.textContent = wordObj.meaning;
    exampleElement.textContent = wordObj.example;
}

async function logWord(wordObj) {
    if (currentUser) {
        try {
            await addDoc(collection(db, "users", currentUser.uid, "wordLogs"), {
                word: wordObj.word,
                meaning: wordObj.meaning,
                example: wordObj.example,
                timestamp: new Date()
            });
        } catch (error) {
            console.error("Error logging word:", error);
        }
    }
}

// Initialize with a random word
const initialWord = getRandomWord();
displayWord(initialWord);
logWord(initialWord);

// Event Listener for New Word Button
newWordBtn.addEventListener('click', () => {
    const newWord = getRandomWord();
    displayWord(newWord);
    logWord(newWord);
});
