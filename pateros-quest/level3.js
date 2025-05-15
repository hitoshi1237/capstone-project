const draggables = document.querySelectorAll('.drag-item');
const dropzones = document.querySelectorAll('.drop-box');
const feedback = document.getElementById('drag-feedback');
const nextBtn = document.getElementById('next-level-btn');

let correctCount = 0;

draggables.forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

dropzones.forEach(zone => {
  zone.addEventListener('dragover', allowDrop);
  zone.addEventListener('drop', handleDrop);
});

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function allowDrop(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();
  const droppedId = e.dataTransfer.getData('text/plain');
  const correctMatch = e.currentTarget.dataset.match;

  if (droppedId === correctMatch) {
    const item = document.getElementById(droppedId);
    e.currentTarget.appendChild(item);
    e.currentTarget.classList.add('correct');
    item.setAttribute('draggable', false);
    correctCount++;
    checkIfCompleted();
  } else {
    feedback.innerText = `❌ Try again! ${droppedId} doesn't match here.`;
  }
}

function checkIfCompleted() {
  if (correctCount === 3) {
    feedback.innerText = '✅ Great! All items matched.';
    nextBtn.classList.remove('hidden');
  }
}

function goToNextLevel() {
  window.location.href = "level4.html"; // placeholder
}

