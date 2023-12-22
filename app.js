let score = 0;
document.getElementById("score").innerHTML=score;
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

function updateScore(runs){
    score += runs;
    document.getElementById("score").innerHTML=score;
    console.log(score);
}