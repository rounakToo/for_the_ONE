function nextPage() {
    window.location.href = "ye_hojae.html";
}

function moveButton() {
    const noButton = document.getElementById('no');
    const maxX = window.innerWidth - noButton.offsetWidth - 85;
    const maxY = window.innerHeight - noButton.offsetHeight - 48;
  
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
  
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  }