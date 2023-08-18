var timer = 60;
var score = 0;
var a  = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function randomHit() {
    a = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = a;
    console.log(a);
}
randomHit();

console.log(a);
function makeBubble() {
    var clutter = "";
    
    for(var i = 1; i <= 114; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function setTimer() {
    var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            document.querySelector("#pbtm").textContent= "";
            clearInterval(timerint);
        }
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum == a){
        increaseScore();
        makeBubble();
        randomHit();
    }
    
})


setTimer();
makeBubble();