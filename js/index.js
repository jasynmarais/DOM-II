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
let focush2 = document.getElementById("destinationh2");
focush2.addEventListener("focus", event => {
    event.target.style.background = "purple";
    alert("Focus");
});

// resize
window.addEventListener("resize", () => {
    alert("RESIZING!!!");
},
    { once: true }
);

//scroll
document.addEventListener("scroll", () => {
    alert("SCROLLING!!!");
},
   { once: true }
);