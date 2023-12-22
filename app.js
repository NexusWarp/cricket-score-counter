let score = 0;
document.getElementById("six").addEventListener("click", ()=>{
    
    score += 6;
    document.getElementById("score").innerHTML=score;
})