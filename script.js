// Character data 
const characters = [
  {
    name: "Zoe-Chen",
    image: "Real_img/zoe chen.jpg",
    shadowImage: "Shadow_img/ZOE CHAN.jpg",
    hint: "Are you sure you need clue to recognize her?",
    acceptableAnswers: ["zoe", "zoe-chen", "cm"]
  },
  {
    name: "ZUN",
    image: "Real_img/zun.jpg",
    shadowImage: "Shadow_img/zun.jpg",
    hint: "The king of alpha,who got the content creation sbt",
    acceptableAnswers: ["zun", "zunxbt", "zun"]
  },
  {
    name: "YAHAYATI",
    image: "Real_img/yahayati.jpg",
    shadowImage: "Shadow_img/yahayati.jpg",
    hint: "If it aint she...the only one , Seems like sign intern ",
    acceptableAnswers: [ "yahayati ","yahayati.sign", ]
  },
  {
    name: "XIN",
    image: "Real_img/XIN.jpg",
    shadowImage: "Shadow_img/XIN.jpg",
    hint: "Why you have clicked it hmmmm. You don't know about daddy?",
    acceptableAnswers: ["xin", "xin yan", "xin shin yan" ,"sign daddy" ]
  },
  {
    name: "Tokentable",
    image: "Real_img/tokentable.jpg",
    shadowImage: "Shadow_img/TOKENNTABLE.jpg",
    hint: "Like seriously! you don't know about this product of sign",
    acceptableAnswers: ["tokentable", "tokentable", "CM"]
  },
  {
    name: "LJ",
    image: "Real_img/LJ.jpg",
    shadowImage: "Shadow_img/LJ.jpg",
    hint: "The punk of Sign.",
    acceptableAnswers: ["lj", "ljxbt", "ops guy"]
  },
  {
    name: "Angryguy",
    image: "Real_img/angry guy.jpg",
    shadowImage: "Shadow_img/angry guy.jpg",
    hint: "Captain of the sign knights. Always angry hahaha.....",
    acceptableAnswers: ["angry Guy", "angry guy", "kkle56"]
  },
  {
    name: "Lucky",
    image: "Real_img/lucky.jpg",
    shadowImage: "Shadow_img/lucky.jpg",
    hint: "Seems like our support warrior.Sign maxi also early contr..... gib too much info haha",
    acceptableAnswers: ["lucky", "lucky esemuede", "lucky of web3"]
  },
  {
    name: "POTTER",
    image: "Real_img/POTTER.jpg",
    shadowImage: "Shadow_img/POTTER.jpg",
    hint: "Harry porter.mehh just joking,spreading sign 🧡",
 

    acceptableAnswers: ["potter","potter.sign","potter"]
  },
  {
    name: "Tajudeen",
    image: "Real_img/tajudeen.jpg",
    shadowImage: "Shadow_img/tajudeen.png",
    hint: "I will judt say king and pass hehe..",
    acceptableAnswers: ["tajudeen","tajudeen","tajudeen10"]
  },
  {
    name: "Big Gids",
    image: "Real_img/big gids.jpg",
    shadowImage: "Shadow_img/big gids.jpg",
    hint: "Ecosystem lead at orange dynasty. host of ....... podcast.",
    acceptableAnswers: ["big gids","big gids","biggids"]
  },
  {
    name: "CRYPTO RAKIB",
    image: "Real_img/CRYPTO RAKIB.jpg",
    shadowImage: "Shadow_img/CRYPTO RAKIB.jpg",
    hint: "Building BD Orange Dynasty🧡. I think it's enough to guess him!",
    acceptableAnswers: ["crypto rakib", "rakib web3", "rakib"]
  },
  {
    name: "ISRAFIL",
    image: "Real_img/ISRAFIL.jpg",
    shadowImage: "Shadow_img/ISRAFIL.jpg",
    hint: "Sign active contributor from BD.Did you played his game????",
    acceptableAnswers: [ "israfil", "israfil Sign", "oxisrafil"]
  },
  {
    name: "HAIKEYS",
    image: "Real_img/HAIKEYS.jpg",
    shadowImage: "Shadow_img/HAIKEYS.png",
    hint: "Thanks for him that we are getting sign newsletter.need more??? ahh ok he is chief content maker.",
    acceptableAnswers: ["haikeys", "haikeystweett", "haikeys"]
  },
  {
    name: "CLAIREM",
    image: "Real_img/CLAIREM.jpg",
    shadowImage: "Shadow_img/CLAIREM.jpg",
    hint: "The product turtle. do you know she is a product queen aka.",
    acceptableAnswers: ["clairemxd", "clairem","clairemxd.eth", "clairemxd"]
  },
  {
    name: "Eyyss",
    image: "Real_img/eyyss.jpg",
    shadowImage: "Shadow_img/eyyss.jpg",
    hint: "Wearing a mask with orange color jacket.Still clueless? He's the sign Ace",
    acceptableAnswers: ["eyyss", "eyyss.sign", "ox_eyyss"]
  },
  {
    name: "FRANS",
    image: "Real_img/FRANS.jpg",
    shadowImage: "Shadow_img/FRANS.jpg",
    hint: "I don't think you need a clue atm but if you still need then remember who's the official sign superhero. ",
    acceptableAnswers: ["frans-TP", "fransTp0", "frans" ]
  },
  {
    name: "HIM",
    image: "Real_img/HIM.jpg",
    shadowImage: "Shadow_img/HIM.jpg",
    hint: "Got a serious builder and support warrior here.Do you know HIM.Opps I already told the name. ",
    acceptableAnswers: ["hIM.sign", "him", "hIM"]
  },
  {
    name: "JACK",
    image: "Real_img/JACK.jpg",
    shadowImage: "Shadow_img/JACK.jpg",
    hint: "Built EthSign CTO",
    acceptableAnswers: ["jack Xu", "jack", "headcpx"]
  },
  {
    name: "JUSTIN",
    image: "Real_img/JUSTIN.jpg",
    shadowImage: "Shadow_img/JUSTIN.jpg",
    hint: "Product Designer at @sign. Justin bieber??????" ,
    acceptableAnswers: ["justin Zhang", "justin", "justin jhang"]
  },
  // {
  //   // name: "JAYPEE",
  //   // image: "Real_img/JAYPEE.jpg",
  //   // shadowImage: "Shadow_img/JAYPEE.jpg",
  //   // hint: "Cutest mode",
  //   // acceptableAnswers: ["Zoe", "zoe-chan", "CM"]
  // },
  // {
  //   name: "JERRYZ",
  //   image: "Real_img/JERRYZ.jpg",
  //   shadowImage: "Shadow_img/JERRYZ.jpg",
  //   hint: "Cutest mode",
  //   acceptableAnswers: ["Zoe", "zoe-chan", "CM"]
  // },
  // {
  //   name: "KORO J",
  //   image: "Real_img/KORO J.jpg",
  //   shadowImage: "Shadow_img/KORO J.jpg",
  //   hint: "Cutest mode",
  //   acceptableAnswers: ["Zoe", "zoe-chan", "CM"]
  // },
  {
    name: "0xTowhid",
    image: "Real_img/me.png",
    shadowImage: "Shadow_img/me.png",
    hint: "Looks like this user created me!",
    acceptableAnswers: ["0xTowhid", "towhid", "oxtowhid"]
  },
  // {
  //   name: "NEDU",
  //   image: "Real_img/NEDU.jpg",
  //   shadowImage: "Shadow_img/NEDU.jpg",
  //   hint: "Cutest mode",
  //   acceptableAnswers: ["Zoe", "zoe-chan", "CM"]
  // },
  // {
  //   name: "nikita mane",
  //   image: "Real_img/nikita mane.jpg",
  //   shadowImage: "Shadow_img/nikita mane.jpg",
  //   hint: "Cutest mode",
  //   acceptableAnswers: ["Zoe", "zoe-chan", "CM"]
  // },
  // {
  //   name: "PENG",
  //   image: "Real_img/PENG.jpg",
  //   shadowImage: "Shadow_img/PENG.jpg",
  //   hint: "Cutest mode",
  //   acceptableAnswers: ["Zoe", "zoe-chan", "CM"]
  // },
  {
    name: "PRETTY",
    image: "Real_img/PRETTY.jpg",
    shadowImage: "Shadow_img/PRETTY.jpg",
    hint: "xoxo.pretty sign🧡 . Support warrior",
    acceptableAnswers: ["pretty", "pretty.sign", "Pretty"]
  },
  {
    name: "Quwrof",
    image: "Real_img/quwrof.jpg",
    shadowImage: "Shadow_img/quwrof.jpg",
    hint: "Shakespeare of Sign.......From korea",
    acceptableAnswers: ["quwrof", "quwrof.sign", "quwrof"]
  },
  {
    name: "RARAL",
    image: "Real_img/RARAL.jpg",
    shadowImage: "Shadow_img/RARAL.jpg",
    hint: "1st round SBT holder . xoxo.sign.signage.Name starts with R",
    acceptableAnswers: ["raralph.sign", "raralph", "raral"]
  },
  // {
  //   name: "SNOWIEE",
  //   image: "Real_img/SNOWIEE.jpg",
  //   shadowImage: "Shadow_img/SNOWIEE.jpg",
  //   hint: "Cutest mode",
  //   acceptableAnswers: ["Zoe", "zoe-chan", "CM"]
  // },
  // {
  //   name: "STARLIO",
  //   image: "Real_img/STARLIO.jpg",
  //   shadowImage: "Shadow_img/STARLIO.jpg",
  //   hint: "Cutest mode",
  //   acceptableAnswers: ["Zoe", "zoe-chan", "CM"]
  // },
  {
    name: "THOTH",
    image: "Real_img/THOTH.jpg",
    shadowImage: "Shadow_img/THOTH.jpg",
    hint: "Sign sensei & contributor .Has TH in his name.",
    acceptableAnswers: ["thoth", "thoth", "thoth.sign"]
  },
  {
    name: "Truth",
    image: "Real_img/truth.jpg",
    shadowImage: "Shadow_img/truth.jpg",
    hint: "I think if you are a active signor you don't need a hint this time.....ok fine- who's the co-founder of signacademy?",
    acceptableAnswers: ["truth", "truth", "truthOnchained"]
  },
  {
    name: "TYRANT",
    image: "Real_img/TYRANT.jpg",
    shadowImage: "Shadow_img/TYRANT.jpg",
    hint: "he's the sign Loveboy. he's mentor is sign daddy",
    acceptableAnswers: ["tyrant", "tyrant.sign", "tyrant"]
  },
  {
    name: "TYLER",
    image: "Real_img/TYLER.jpg",
    shadowImage: "Shadow_img/TYLER.jpg",
    hint: "he's name is Ty..r ; A dog is seeign sign in hos pfp.",
    acceptableAnswers: ["tyler", "tyler", "tyler.sign"]
  },
  {
    name: "Hanz",
    image: "Real_img/hanz.jpg",
    shadowImage: "Shadow_img/hanz.png",
    hint: "Signed by sign. Xoxo:3 Name is H..Z?",
    acceptableAnswers: ["hanz","hanz.sign","hanz"]
  },
  {
    name: "Honeylab",
    image: "Real_img/honeylab.jpg",
    shadowImage: "Shadow_img/honeylab.png",
    hint: "A cutie with honeyzar or honey with the cutie? also loves Sign!",
    acceptableAnswers: ["honeylab.Sign", "honeylab", "honeylab sign"]
  },
  {
    name: "Maying",
    image: "Real_img/maying.jpg",
    shadowImage: "Shadow_img/maying.png",
    hint: "Pussycat Gang;signee; May+ing",
    acceptableAnswers: ["maying.sign", "maying", "Maying"]
  },

];

// Game var
let score = 0;
let attempts = 0;
let hasGuessedCorrectly = false;
let availableCharacters = [];
let usedCharacters = [];
let currentCharacterIndex = 0;
let feedbackTimeout;
let playerName = '';
let finalScore = 0;  
let finalAttempts = 0;  

// DOM Ele
const characterImageEl = document.getElementById('characterImage');
const guessInputEl = document.getElementById('guessInput');
const feedbackEl = document.getElementById('feedback');
const scoreValueEl = document.getElementById('scoreValue');
const attemptsValueEl = document.getElementById('attemptsValue');
const hintPopupEl = document.getElementById('hintPopup');
const hintTextEl = document.getElementById('hintText');
const nextBtnEl = document.querySelector('.nextBtn');
const leaderboardBtnEl = document.getElementById('leaderboardBtn');
const startAgainBtnEl = document.getElementById('startAgainBtn'); 
const leaderboardPopupEl = document.getElementById('leaderboardPopup');
const leaderboardListEl = document.getElementById('leaderboardList');
const sharePopupEl = document.getElementById('sharePopup');
const playerNameInputEl = document.getElementById('playerNameInput');
const finalScoreEl = document.getElementById('finalScore');
const finalAttemptsEl = document.getElementById('finalAttempts');
const sounds = {
  background: new Audio('path/to/background-music.mp3'),
  buttonClick: new Audio('audio/button_click.mp3'),
  correctGuess: new Audio('audio/correct_guess.mp3'),
  wrongGuess: new Audio('audio/wrogn_guess.mp3')
};


sounds.background.loop = true;
sounds.background.volume = 0.3;


function playSound(soundName) {
 sounds[soundName].currentTime = 0;
  

  sounds[soundName].play().catch(error => {
    console.log("Audio play failed: " + error);
  });
}

document.addEventListener('click', function() {
  if (sounds.background.paused) {
    playSound('background');
  }
}, {once: true});


document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => playSound('buttonClick'));
});



document.querySelector('.nextBtn').addEventListener('click', function() {
  playSound('buttonClick');
  document.querySelector('.image-box img').classList.remove('reveal-animation');

});

function initGame() {
  score = 0;
  attempts = 0;
  hasGuessedCorrectly = false;
  scoreValueEl.textContent = score;
  attemptsValueEl.textContent = attempts;
  
  availableCharacters = [...characters];
  usedCharacters = [];
  
  selectRandomCharacter();
  
  guessInputEl.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      checkGuess();
    }
  });
  
  guessInputEl.focus();
}


function selectRandomCharacter() {
  if (availableCharacters.length === 0) {
    if (usedCharacters.length === 0) {
      availableCharacters = [...characters];
    } else {
      feedbackEl.textContent = "That was the final character! Game over!";
      feedbackEl.className = 'feedback-message';
      
      finalScore = score;
      finalAttempts = attempts;
      
      showSharePopup();
      return;
    }
  }
  
  const randomIndex = Math.floor(Math.random() * availableCharacters.length);
  
  const selectedCharacter = availableCharacters[randomIndex];
  availableCharacters.splice(randomIndex, 1); 
  usedCharacters.push(selectedCharacter);  
  currentCharacterIndex = characters.findIndex(char => char.name === selectedCharacter.name);
  displayCharacter();
}


function displayCharacter() {
  const character = characters[currentCharacterIndex];
   const img = document.createElement('img');
  
  img.src = character.shadowImage;
  img.alt = "Guess this character";
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "contain";
  
 
  characterImageEl.innerHTML = '';
  characterImageEl.appendChild(img);
  

  guessInputEl.value = '';
  clearFeedback();
  

  hintTextEl.textContent = character.hint;
  hasGuessedCorrectly = false;
  guessInputEl.focus();
}

function clearFeedback() {
  if (feedbackTimeout) {
    clearTimeout(feedbackTimeout);
  }
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback-message';
}

function showFeedback(message, isCorrect) {
  clearFeedback();
  
  feedbackEl.textContent = message;
  feedbackEl.className = isCorrect ? 'feedback-message correct' : 'feedback-message wrong';
  feedbackTimeout = setTimeout(clearFeedback, 3000);
}


function showRealImage() {
  const character = characters[currentCharacterIndex];
  
  const img = document.createElement('img');
  img.src = character.image;
  img.alt = character.name;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "contain";
  
  
  characterImageEl.innerHTML = '';
  characterImageEl.appendChild(img);
}


function checkGuess() {
  if (hasGuessedCorrectly) {
    showFeedback("Ara! Ara! move to the next signor", true);
    return;
  }
  
  const currentCharacter = characters[currentCharacterIndex];
  const userGuess = guessInputEl.value.trim().toLowerCase();
  
  if (!userGuess) {
    showFeedback("Opps enter the name first!", false);
    return;
  }
  
  
  attempts++;
  attemptsValueEl.textContent = attempts;
  
  if (currentCharacter.acceptableAnswers.includes(userGuess)) {
    playSound('correctGuess'); 
    score += 6; 
    scoreValueEl.textContent = score;
    hasGuessedCorrectly = true;
    
    showRealImage();
    showFeedback(`Correct! That's our beloved ${currentCharacter.name}!`, true);
  } else {
  
    playSound('wrongGuess'); 
    showFeedback("Sorry, Signor", false);
  }
}

// hint popup
function hint() {
  hintPopupEl.classList.remove('hidden');
}

function closeHintPopup() {
  hintPopupEl.classList.add('hidden');
}

function nextBtn() {
  if (!hasGuessedCorrectly) {
    showFeedback("You need to guess correctly first!", false);
    return;
  }
  
  closeHintPopup();
  
  if (availableCharacters.length === 0 && usedCharacters.length === characters.length) {
    showFeedback("That was the final Signor! See you soon!", false);
    
    // Save portal
    finalScore = score;
    finalAttempts = attempts;
    
    showSharePopup();
    return;
  }
  
  selectRandomCharacter();
}

// Start again 
function startAgain() {
  finalScore = score;
  finalAttempts = attempts;
  showSharePopup();
}

// Leaderboard 
function getLeaderboard() {
  const leaderboard = localStorage.getItem('superheroLeaderboard');
  return leaderboard ? JSON.parse(leaderboard) : [];
}

function saveLeaderboard(leaderboard) {
  localStorage.setItem('superheroLeaderboard', JSON.stringify(leaderboard));
}

function addToLeaderboard(name, score, attempts) {
  const leaderboard = getLeaderboard();
  
  leaderboard.push({
    name: name || 'Anonymous',
    score: score,
    attempts: attempts,
    date: new Date().toISOString().slice(0, 10)
  });
  
  // Sort by score 
  leaderboard.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return a.attempts - b.attempts;
  });
  
  const topTen = leaderboard.slice(0, 10);
  saveLeaderboard(topTen);
  
  return topTen;
}

function showLeaderboard() {
  const leaderboard = getLeaderboard();
  
  leaderboardListEl.innerHTML = '';
  
  if (leaderboard.length === 0) {
    const emptyItem = document.createElement('li');
    emptyItem.textContent = 'No scores yet.Wanna be the first?';
    leaderboardListEl.appendChild(emptyItem);
  } else {

    const headerItem = document.createElement('li');
    headerItem.className = 'leaderboard-header';
    headerItem.innerHTML = '<span>Rank</span><span>Name</span><span>Score</span><span>Attempts</span><span>Date</span>';
    leaderboardListEl.appendChild(headerItem);
    

    leaderboard.forEach((entry, index) => {
      const item = document.createElement('li');
      item.className = 'leaderboard-item';
      item.innerHTML = `
        <span>${index + 1}</span>
        <span>${entry.name}</span>
        <span>${entry.score}</span>
        <span>${entry.attempts}</span>
        <span>${entry.date}</span>
      `;
      leaderboardListEl.appendChild(item);
    });
  }
  

  leaderboardPopupEl.classList.remove('hidden');
}

function closeLeaderboard() {
  leaderboardPopupEl.classList.add('hidden');
}

// Show share popup 
function showSharePopup() {

  finalScoreEl.textContent = finalScore;
  finalAttemptsEl.textContent = finalAttempts;
  
  playerNameInputEl.value = '';
  sharePopupEl.classList.remove('hidden');
}

function closeSharePopup() {
  sharePopupEl.classList.add('hidden');
  
  initGame();
}

//= share on X
function saveScoreAndShare() {
  playerName = playerNameInputEl.value.trim() || 'Anonymous';
  
  addToLeaderboard(playerName, finalScore, finalAttempts);
  
  const shareText = `I just scored ${finalScore} points in the Who's the Signor Game with ${finalAttempts} attempts! Can you beat me? Made with love by @0xTowhid`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  window.open(shareUrl);
  
  closeSharePopup();
  showLeaderboard();
}

window.addEventListener('click', function(event) {
  if (event.target === hintPopupEl) {
    closeHintPopup();
  } else if (event.target === leaderboardPopupEl) {
    closeLeaderboard();
  } else if (event.target === sharePopupEl) {
    closeSharePopup();
  }
});



document.addEventListener('DOMContentLoaded', function() {
  initGame();
  
  
  if (leaderboardBtnEl) {
    leaderboardBtnEl.addEventListener('click', showLeaderboard);
  }
  
  if (startAgainBtnEl) {
    startAgainBtnEl.addEventListener('click', startAgain);
  }
});