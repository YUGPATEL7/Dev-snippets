let main =document.querySelector("#main");
let cursor =document.querySelector("#cursor");


main.addEventListener("mousemove",function(dets) {
    // console(dets.y) 
    console.log(dets.x);
    console.log(dets.y+ "top");
    if (dets.y >15 && dets.x<1500){
    cursor.style.left=`${dets.x}px`
    cursor.style.top=`${dets.y}px`
    cursor.style. opacity="1";
}
else{
        cursor.style. opacity="0";

    }
})