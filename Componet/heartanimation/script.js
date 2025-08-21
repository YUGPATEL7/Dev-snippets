let card = document.querySelector("#card");
let heart = document.querySelector("i");

card.addEventListener("dblclick",(e) => {
    // console.log('hi');
    heart.style.transform="translate(-50%,-50%) scale(1)";
    heart.style.opacity="0.8";
    
    setTimeout(() => {
        heart.style.opacity="0";
        
    }, 1500);
        setTimeout(() => {
        heart.style.transform="translate(-50%,-50%) scale(0)";
        
    }, 1580);
}
)
