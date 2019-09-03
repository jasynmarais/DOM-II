// Your code goes here

// mouseover
let magicbus = document.getElementById("funbus");

magicbus.addEventListener("mouseover", event => {
    event.target.style.visibility="hidden";
    setTimeout(function () {
        event.target.style.visibility = "visible";
    }, 500);
}, {once:true}
);

//keydown
document.addEventListener("keydown",() => {
    alert("Work Harder!");
    },
    {once:true}
);