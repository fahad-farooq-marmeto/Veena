const condomsDiv = document.getElementById('condoms');
const lubesDiv = document.getElementById('lubes');

const condomsBtn = document.getElementById('product-btn-c');
const lubesBtn = document.getElementById('product-btn-l');

condomsBtn.addEventListener('click', () => {
  condomsDiv.style.display = 'flex';
  lubesDiv.style.display = 'none';
});

lubesBtn.addEventListener('click', () => {
  lubesDiv.style.display = 'flex';
  condomsDiv.style.display = 'none';
});