// search.js

import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultWord = document.getElementById('result-word');
const resultMeaning = document.getElementById('result-meaning');
const resultExample = document.getElementById('result-example');

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

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();
    const found = words.find(w => w.word.toLowerCase() === query);
    
    if (found) {
        resultWord.textContent = found.word;
        resultMeaning.textContent = found.meaning;
        resultExample.textContent = found.example;
    } else {
        resultWord.textContent = "Not Found";
        resultMeaning.textContent = "-";
        resultExample.textContent = "-";
        alert("Word not found in the database.");
    }
});
