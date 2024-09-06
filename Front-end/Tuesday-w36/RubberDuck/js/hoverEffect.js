var duckText = document.getElementById('duckText');
var duckLogo = document.getElementById('duckLogo');

duckLogo.addEventListener('mouseover', function () {
  duckText.classList.remove('hidden');
  duckText.classList.add('visible');
});

duckLogo.addEventListener('mouseout', function () {
  duckText.classList.remove('visible');
  duckText.classList.add('hidden');
});
