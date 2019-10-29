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

// keydown event

document.addEventListener("keydown",() => {
    alert("Work Harder!");
    },
    {once:true}
);

// wheel event

let wheelitem = document.getElementById("funbustext");
wheelitem.addEventListener("wheel" , () => {
    wheelitem.style.fontSize = "3rem";
});

// load event

window.addEventListener("load", () => {
    alert("Locked and Loaded!");
},
    { once: true }
);

// click event

const button = document.querySelectorAll('.btn');
button[0].textContent = 'Style the Navigation';
button[0].addEventListener('click', (e) => {
  const navEl = document.querySelector('.main-navigation')
  if (navEl.style.background !== 'yellow') {
    navEl.style.background = 'yellow';
    button[0].textContent = 'Revert';
  } else {
    navEl.style.background = '';
    button[0].textContent = 'Style the Navigation';
  }
})

// double click event

button[1].textContent = 'Double Click Me'
button[1].addEventListener('dblclick', (e) => {
  const navEl = document.querySelector('.main-navigation');
  if (navEl.style.display !== 'none') {
    navEl.style.display = 'none';
    button[1].textContent = 'Bring Navigation Back';
  } else {
    navEl.style.display = 'initial';
    button[1].textContent = 'Double Click Me';
  };	  
});

// Add focus and blur events to nav links

const navEl = document.querySelectorAll('.main-navigation a');

// focus
navEl.forEach(item => item.addEventListener('focus', (e) => {
  e.target.style.color = 'red';    
}));

// blur
navEl.forEach(item => item.addEventListener('blur', (e) => {
  e.target.style.color = '';    
}));

// Add resize event on window

function reportWindowSize() {
    console.log(`Window Height: ${window.innerHeight}`);
    console.log(`Window Width: ${window.innerWidth}`);
  }
  
  window.addEventListener('resize', reportWindowSize);

