document.querySelectorAll('.recipe-item').forEach(item => {
  item.addEventListener('click', () => {
      alert('Recipe details will be displayed here.');
  });
});
document.querySelector('.close-button').addEventListener('click', () => {
  window.close();
});