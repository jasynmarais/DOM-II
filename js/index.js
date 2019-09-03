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

//wheel
let wheelitem = document.getElementById("funbustext");
wheelitem.addEventListener("wheel" , () => {
    wheelitem.style.fontSize = "3.5rem";
});