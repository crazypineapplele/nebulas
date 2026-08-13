const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  window.open('https://www.nasa.gov/universe/nebulae/', '_blank', 'noopener,noreferrer');
});

button.addEventListener('mouseenter', () => {
  button.style.backgroundColor = '#F9FAF8'
  button.style.color = '#3882F6'
}
);

button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = '#3882F6'
  button.style.color = '#F9FAF8'
}
);