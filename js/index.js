// Your code goes here

// mouseover
let magicbus = document.getElementById("funbus");

magicbus.addEventListener("mouseover", event => {
    event.target.style.visibility="hidden";
    setTimeout(function () {
        event.target.style.visibility = "visible";
    }, 600);
}, {once:true}
);

// keydown
document.addEventListener("keydown",() => {
    alert("Work Harder!");
    },
    {once:true}
);

// wheel
let wheelitem = document.getElementById("funbustext");
wheelitem.addEventListener("wheel" , () => {
    wheelitem.style.fontSize = "3.5rem";
});

// drag/drop
let dragitem = document.querySelector(".rounded");
let adventure = document.querySelector("#adventure");
dragitem.addEventListener("drag", event => {
    //Prevent Default
    event.preventDefault()
    adventure.style.color = "red";
});

// load
window.addEventListener("load", () => {
    alert("Locked and Loaded!");
},
    { once: true }
);

// focus
var x = document.getElementById("myForm");
x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
  document.getElementById("myInput").style.backgroundColor = "purple";  
}

function myBlurFunction() {
  document.getElementById("myInput").style.backgroundColor = "";  
}

// resize
window.addEventListener("resize", () => {
    alert("RESIZING!!!");
},
    { once: true }
);

// scroll
document.addEventListener("scroll", () => {
    alert("SCROLLING!!!");
},
   { once: true }
);

// select
let textselect = document.getElementById("textselection");
textselect.addEventListener("select", event => {
    event.target.style.color = "blue";
});

// doubleclick
let doubleclick = document.getElementById("btn1");
doubleclick.addEventListener('dblclick', () => {
    alert("DOUBLE CLICK!!!");
    event.stopImmediatePropagation();
});

let propdoubleclick = document.querySelector(".destination");
propdoubleclick.addEventListener('dblclick', () => {
    alert("Destination Double Click!!!");
});
