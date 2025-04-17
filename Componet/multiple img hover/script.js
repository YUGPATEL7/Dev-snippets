let arr = [
    {
    dp:"https://images.unsplash.com/photo-1741254692251-d7a1765ed8e9?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stroy:"https://plus.unsplash.com/premium_photo-1667030783942-05351fd6c3fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1506891536236-3e07892564b7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stroy:"https://images.unsplash.com/photo-1622015680776-b3fa0d34909c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1741412252402-0d965ea9970b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stroy:"https://images.unsplash.com/photo-1741412252441-f14ac107a2c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1740672553856-3b2645b7009a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stroy:"https://plus.unsplash.com/premium_photo-1687371769652-b498137c2c16?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
    {
    dp:"https://images.unsplash.com/photo-1740252330580-ca1d8173a786?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stroy:"https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},

{
    dp:"https://images.unsplash.com/photo-1737567472250-88c54e150c50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stroy:"https://images.unsplash.com/photo-1735661998642-71a998eaf912?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    dp:"https://images.unsplash.com/photo-1740471230710-94fbcbb6c330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stroy:"https://images.unsplash.com/photo-1740137660688-3d3f2b5422b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
];

let Culster =""
arr.forEach (function(Image,index){
    Culster+=`<div class="story">
                <img  id="${index}" src="${Image.dp}" alt="img" >
            </div>`
});

document.querySelector("#Storys").innerHTML=Culster;


let s =document.querySelector("#Storys")
s.addEventListener("click",function(dets){

    document.querySelector("#showStorys").style.display="block";
    let x = parseInt(dets.target.id); 
    document.querySelector("#showStorys").style.backgroundImage=`url(${arr[dets.target.id].stroy})`;
    console.log('x'+x);
    
    
    setInterval(function(){
        x = (x + 1) % arr.length;
        document.querySelector("#showStorys").style.backgroundImage=`url(${arr[x].stroy})`;
    },7000)
})


document.querySelector("#showStorys").addEventListener("click",(e)=>{
    e.target.style.display="none";

});