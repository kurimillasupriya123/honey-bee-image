var score=0;
function increase(){
    score=score+5;
    document.getElementById("score").textContent=score;
    
}
function decrease(){
    score=score-5;
    document.getElementById("score").textContent=score;
}