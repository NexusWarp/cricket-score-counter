let score = 0;
let wickets = 0;
let ballz = 0;
let overz = 0;
document.getElementById("overs").innerHTML=overz;
document.getElementById("score").innerHTML=score;
document.getElementById("wickets").innerHTML=wickets;
document.getElementById("balls").innerHTML=ballz;
document.getElementById("six").addEventListener("click", ()=>{
   updateScore(6);
})
document.getElementById("four").addEventListener("click", ()=>{
    updateScore(4);
 })
 document.getElementById("three").addEventListener("click", ()=>{
    updateScore(3);
 })
 document.getElementById("two").addEventListener("click", ()=>{
    updateScore(2);
 })
 document.getElementById("one").addEventListener("click", ()=>{
    updateScore(1);
 })
 document.getElementById("wic").addEventListener("click", ()=>{
    wickets ++;
    document.getElementById("wickets").innerHTML=wickets;
 })
 document.getElementById("dot").addEventListener("click", ()=>{
    updateScore(0);
 })
function updateScore(runs){
    score += runs;
    ballz++;
    document.getElementById("balls").innerHTML=ballz;
    document.getElementById("score").innerHTML=score;
    if(ballz>5){
        ballz = 0;
        document.getElementById("balls").innerHTML=ballz;
        overz ++;
        document.getElementById("overs").innerHTML=overz;
    }
}