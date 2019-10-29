// Your code goes here

// mouseover event

const h2El = document.querySelectorAll('h2');

h2El.forEach(item => item.addEventListener('mouseover', (e) => {
  item.style.cursor = 'pointer';
  if (item.style.color != 'green') {
    item.style.color = 'green';
  } else {
    item.style.color = 'black';
  }
}))
