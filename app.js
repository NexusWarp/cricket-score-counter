let score = 0;
let wickets = 0;
document.getElementById("score").innerHTML=score;
document.getElementById("wickets").innerHTML=wickets;
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
function updateScore(runs){
    score += runs;
    document.getElementById("score").innerHTML=score;
    console.log(score);
}