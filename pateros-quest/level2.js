const grid = document.getElementById('puzzle-grid');
const feedback = document.getElementById('puzzle-feedback');
const nextBtn = document.getElementById('next-level-btn');

let tiles = [];
let draggedTile = null;

function createTiles() {
  tiles = [];
  grid.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.style.backgroundImage = "url('images/sanroque.jpg')";
    tile.style.backgroundSize = "300px 300px";
    tile.style.backgroundPosition = `${-(i % 3) * 100}px ${-Math.floor(i / 3) * 100}px`;
    tile.dataset.correctIndex = i;
    tile.draggable = true;

    addDragEvents(tile);
    tiles.push(tile);
  }
  shuffleTiles();
}

function addDragEvents(tile) {
  tile.addEventListener('dragstart', handleDragStart);
  tile.addEventListener('dragover', handleDragOver);
  tile.addEventListener('drop', handleDrop);
}

function handleDragStart(e) {
  draggedTile = this;
}

function handleDragOver(e) {
  e.preventDefault(); // Necessary to allow dropping
}

function handleDrop(e) {
  e.preventDefault();
  if (draggedTile !== this) {
    swapTiles(draggedTile, this);
    checkPuzzleSolved();
  }
}

function shuffleTiles() {
  const shuffled = [...tiles].sort(() => Math.random() - 0.5);
  grid.innerHTML = '';
  shuffled.forEach((tile, index) => {
    tile.dataset.currentIndex = index;
    grid.appendChild(tile);
  });
  feedback.innerText = '';
  nextBtn.classList.add('hidden');
}

function swapTiles(tile1, tile2) {
  const index1 = Array.from(grid.children).indexOf(tile1);
  const index2 = Array.from(grid.children).indexOf(tile2);

  const tile1Clone = tile1.cloneNode(true);
  const tile2Clone = tile2.cloneNode(true);

  tile1Clone.dataset.currentIndex = index2;
  tile2Clone.dataset.currentIndex = index1;

  addDragEvents(tile1Clone);
  addDragEvents(tile2Clone);

  grid.replaceChild(tile1Clone, tile2);
  grid.replaceChild(tile2Clone, tile1);
}

function checkPuzzleSolved() {
  const children = Array.from(grid.children);
  const isSolved = children.every((tile, i) => parseInt(tile.dataset.correctIndex) === i);
  if (isSolved) {
    feedback.innerText = "🎉 Correct! You've rebuilt the landmark!";
    nextBtn.classList.remove('hidden');
    localStorage.setItem('level2Completed', 'true');
  }
}

function goToNextLevel() {
  window.location.href = "level3.html"; // Change this to your next level file
}

window.onload = createTiles;
