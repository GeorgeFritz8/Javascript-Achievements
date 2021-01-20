let changetxt = document.getElementById('changingText');
let reset = document.getElementById('resetButton');
let recordclick = document.getElementById('recordclicks');
let output = document.getElementById('output');
let clicks = 0

changetxt.addEventListener('wheel', () => {
    changetxt.style.fontSize = "50px";
    changetxt.style.color = "blue";
});

reset.addEventListener('click', () => {
    changetxt.style.fontSize = "18px";
    changetxt.style.color = "black";
});

recordclick.addEventListener('click', () => {
    clicks += 1;
    let message = "amount of clicks: " + clicks;
    output.innerHTML = message;
})