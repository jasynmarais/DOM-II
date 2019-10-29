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
    wheelitem.style.fontSize = "3.5rem";
});