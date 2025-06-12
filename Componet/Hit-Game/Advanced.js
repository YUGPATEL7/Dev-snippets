let x =0;


function bubbleMaker() {
    let cluster = "";

for (let i = 0; i < 133; i++) {
    let numbers = Math.floor(Math.random()*10)
    cluster+=` <div class="ball">${numbers}</div>`
}

document.querySelector(".pbtm").innerHTML=cluster
}

let sec =60;
function time() {
    let thisinterval=setInterval(function(){
        if (sec>0){
            sec--;
            document.querySelector("#Timer").textContent=sec;
        }
        else{
            clearInterval(thisinterval)
            document.querySelector(".pbtm").innerHTML=`<h1> Game Is Over</h1>`;
        }
    },1000)
}

function hit() {
    x=Math.floor(Math.random()*10)
    document.querySelector("#hitchange").textContent=x;
}

let scroce =0;
function scroceAdd() {
    scroce+=10;
    document.querySelector("#Scroe").textContent=scroce;
}

document.querySelector(".pbtm").addEventListener("click",function(dets){
    let cikekdnum=Number(dets.target.textContent);

    if(cikekdnum === x){
        scroceAdd()
        hit()
        bubbleMaker()
    }

})

time()
bubbleMaker()
hit()
