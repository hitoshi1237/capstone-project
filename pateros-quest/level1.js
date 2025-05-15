const questions = [
    {
      question: "What is Pateros known for producing?",
      choices: ["Shoes", "Balut", "Banig", "Lechon"],
      correct: 1,
      fact: "Pateros is famous for producing high-quality 'balut' or fertilized duck egg."
    },
    {
      question: "What is the name of the traditional slippers made in Pateros?",
      choices: ["Abaniko", "Alfombra", "Bakya", "Tsinelas"],
      correct: 1,
      fact: "Alfombra slippers are soft, hand-crafted footwear unique to Pateros."
    },
    {
      question: "Which river runs alongside Pateros?",
      choices: ["Pasig River", "Marikina River", "San Juan River", "Taguig River"],
      correct: 0,
      fact: "The Pasig River flows through and beside Pateros."
    }
  ];
  
  let currentIndex = 0;
  let score = 0;
  
  const qTitle = document.getElementById('question-title');
  const choicesContainer = document.getElementById('choices-container');
  const feedback = document.getElementById('feedback');
  const nextBtn = document.getElementById('next-btn');
  const scoreDisplay = document.getElementById('score');
  
  function loadQuestion() {
    const q = questions[currentIndex];
    qTitle.innerText = q.question;
    choicesContainer.innerHTML = "";
    feedback.innerText = "";
    nextBtn.classList.add("hidden");
  
    q.choices.forEach((choice, index) => {
      const btn = document.createElement("button");
      btn.innerText = choice;
      btn.onclick = () => checkAnswer(index);
      btn.className = "choice-btn";
      choicesContainer.appendChild(btn);
    });
  }
  
  function checkAnswer(selectedIndex) {
    const q = questions[currentIndex];
    if (selectedIndex === q.correct) {
      feedback.innerText = "✅ Correct! " + q.fact;
      score++;
    } else {
      feedback.innerText = `❌ Wrong! ${q.fact}`;
    }
    nextBtn.classList.remove("hidden");
    document.querySelectorAll(".choice-btn").forEach(btn => btn.disabled = true);
    scoreDisplay.innerText = `Score: ${score}/${questions.length}`;
  }
  
  function nextQuestion() {
    currentIndex++;
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      qTitle.innerText = "🎉 Quiz Completed!";
      choicesContainer.innerHTML = "";
      feedback.innerText = `Final Score: ${score}/${questions.length}`;
      nextBtn.style.display = "none";
    }
  }
  
  window.onload = loadQuestion;
  // On successful quiz
localStorage.setItem('level1Completed', 'true');
nextBtn.onclick = nextQuestion;
  nextBtn.classList.add("hidden");
  scoreDisplay.innerText = `Score: ${score}/${questions.length}`;
  
  // Add event listener to the button to go to the next level
  document.getElementById('next-level-btn').onclick = function() {
    window.location.href = "level2.html"; // Link to level2.html
  };