const grid = document.querySelector('.grid');
const cells = Array.from(document.querySelectorAll('.cell'));

if (grid) {
  grid.addEventListener('mouseenter', () => {
    grid.classList.add('grid-highlight');
  });

  grid.addEventListener('mouseleave', () => {
    grid.classList.remove('grid-highlight');
  });
}

cells.forEach((cell) => {
  cell.addEventListener('mouseenter', () => {
    cell.classList.add('cell-highlight');
  });

  cell.addEventListener('mouseleave', () => {
    cell.classList.remove('cell-highlight');
  });

  cell.addEventListener('click', () => {
    const hue = Math.floor(Math.random() * 360);
    cell.style.backgroundColor = `hsl(${hue}, 85%, 75%)`;
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'd') {
    document.body.classList.toggle('dark-mode');
  }
});