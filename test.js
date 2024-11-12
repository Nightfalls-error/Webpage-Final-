// Slang words data (embedded to avoid CORS issues)
const slangWords = [
    { word: "Astig", meaning: "Cool or awesome" }, 
    { word: "Gigil", meaning: "The urge to pinch or squeeze someone cute" },
    { word: "Charot", meaning: "Just kidding" },
    { word: "Jowa", meaning: "Boyfriend or girlfriend" },
    { word: "Petmalu", meaning: "Incredible or impressive" },
    { word: "Lodi", meaning: "Idol or someone you admire" },
    { word: "Werpa", meaning: "Power or encouragement" },
    { word: "Sana all", meaning: "I hope everyone experiences that" },
    { word: "Baks", meaning: "Used to refer to a person (typically a friend" },
    { word: "Tara", meaning: "Let's go" },
    { word: "Olats", meaning: "Loser" },
    { word: "Keri", meaning: "Manageable or can do it" },
    { word: "Basag", meaning: "Drunk or wasted" },
    { word: "Kalurks", meaning: "Crazy or overwhelming" },
    { word: "Bai", meaning: "My Friend" },
    { word: "Hanep", meaning: "Amazing" },
    { word: "Chika", meaning: "Small Chatter" },
    { word: "Epal", meaning: "Attention-seeker" },
    { word: "Beshie", meaning: "Best friend" },
    { word: "Bongga", meaning: "Extravagant or fabulous" },
    { word: "Eme", meaning: "Just kidding" },
    { word: "GG", meaning: "Good Game" }, 
    { word: "Finna", meaning: "About to" },
    { word: "Skibidi", meaning: "Adjective like cool, bad, or dumb" },
    { word: "Sigma", meaning: "CLassification of people who are popular and successful but also silent" },
    { word: "Rizz", meaning: "Charisma" }, 
    { word: "Bruh", meaning: "Informal term for a male friend" },
    { word: "Yap", meaning: "To talk noisily or foolishly" }, 
    { word: "Gar", meaning: "Comrade" }, 
    { word: "Mid", meaning: "Mediocre" }, 
    { word: "Word", meaning: "True or Same" }, 
    { word: "nt", meaning: "Nice Try" }, 
    { word: "wp", meaning: "Well Played" },
    { word: "stir", meaning: "Jail" }, 
    { word: "L or W", meaning: "Lose or Win" }, 
    { word: "Aura", meaning: "Badass or cool" }, 
    { word: "Dew Dew", meaning: "A happy meaning" },
    { word: "Ez", meaning: "Easy" }, 
    { word: "Getting Owned", meaning: "Facing a large loss" },
    { word: "Nhay", meaning: "Girl" },
    { word: "Diff", meaning: "Difference or Difficulty" }
];

const button = document.getElementById('randomSlangBtn');
const display = document.getElementById('slangDisplay');
let lastIndex = -1;

button.addEventListener('click', () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * slangWords.length);
    } while (randomIndex === lastIndex);

    const randomSlang = slangWords[randomIndex];
    display.textContent = `${randomSlang.word}: ${randomSlang.meaning}`;
    lastIndex = randomIndex;
});
