let lang = 'en';
const dialogs = {
  en: [
    "Welcome, adventurer! I am Don Francisco, your guide.",
    "This quest will take you through the hidden gems of Pateros.",
    "Each level reveals a part of our culture. Let's begin!"
  ],
  fil: [
    "Maligayang pagdating, manlalakbay! Ako si Don Francisco, ang iyong gabay.",
    "Sa paglalakbay na ito, matutuklasan mo ang yaman ng Pateros.",
    "Bawat antas ay may kwento. Tara na't simulan na!"
  ]
};

const tutorial = {
  en: {
    title: "Tutorial",
    text: "Answer trivia questions to earn badges. Complete each level to unlock maps and explore Pateros!"
  },
  fil: {
    title: "Patnubay",
    text: "Sagutin ang mga tanong para makakuha ng badge. Kumpletuhin ang bawat antas upang tuklasin ang mapa ng Pateros!"
  }
};

let currentLine = 0;

function setLanguage(selected) {
  lang = selected;
  document.getElementById('language-selection').classList.add('hidden');
  document.getElementById('game-content').classList.remove('hidden');
  document.getElementById('dialog-text').innerText = dialogs[lang][0];
}

function nextDialog() {
  currentLine++;
  if (currentLine < dialogs[lang].length) {
    document.getElementById('dialog-text').innerText = dialogs[lang][currentLine];
  } else {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('tutorial').classList.remove('hidden');
    document.getElementById('tutorial-title').innerText = tutorial[lang].title;
    document.getElementById('tutorial-text').innerText = tutorial[lang].text;
  }
}

function startLevel1() {
    
        window.location.href = "level1.html"; // Replace with your actual menu file name
      
}
