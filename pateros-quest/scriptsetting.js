function toggleSettings() {
    const panel = document.getElementById('settings');
    panel.style.display = panel.style.display === 'flex' ? 'none' : 'flex';
  }

  function toggleOption(element) {
    element.classList.toggle('on');
  }