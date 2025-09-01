let arr = [
  {
    name: "Alice",
    dp: "https://images.unsplash.com/photo-1741254692251-d7a1765ed8e9?q=80&w=2127&auto=format&fit=crop",
    stroy: "https://plus.unsplash.com/premium_photo-1667030783942-05351fd6c3fc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Bob",
    dp: "https://images.unsplash.com/photo-1506891536236-3e07892564b7?q=80&w=1976&auto=format&fit=crop",
    stroy: "https://images.unsplash.com/photo-1622015680776-b3fa0d34909c?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Clara",
    dp: "https://images.unsplash.com/photo-1741412252402-0d965ea9970b?q=80&w=1974&auto=format&fit=crop",
    stroy: "https://images.unsplash.com/photo-1741412252441-f14ac107a2c6?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Clara",
    dp: "https://images.unsplash.com/photo-1741412252402-0d965ea9970b?q=80&w=1974&auto=format&fit=crop",
    stroy: "https://images.unsplash.com/photo-1741412252441-f14ac107a2c6?q=80&w=1974&auto=format&fit=crop"
  }
];

let storyBar = "";
arr.forEach(function(user,index){
  storyBar += `
    <div class="story">
      <img id="${index}" src="${user.dp}" alt="">
      <p>${user.name}</p>
    </div>`;
});
document.querySelector("#Storys").innerHTML = storyBar;

let s = document.querySelector("#Storys");
s.addEventListener("click",function(e){
  if(e.target.tagName === "IMG"){
    let x = parseInt(e.target.id);
    document.querySelector("#showStorys").style.display="block";
    document.querySelector("#showStorys").style.backgroundImage=`url(${arr[x].stroy})`;

    let interval = setInterval(function(){
      x = (x + 1) % arr.length;
      document.querySelector("#showStorys").style.backgroundImage=`url(${arr[x].stroy})`;
    },5000);

    document.querySelector("#showStorys").onclick = ()=>{
      document.querySelector("#showStorys").style.display="none";
      clearInterval(interval);
    };
  }
});

let postsHtml = "";
arr.forEach(function(user){
  postsHtml += `
  <div class="post">
    <div class="post-header">
      <img src="${user.dp}" alt="">
      <span>${user.name}</span>
    </div>
    <img class="post-img" src="${user.stroy}" alt="">
    <div class="post-actions">
      <!-- Like -->
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 
             4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 
             4.5 0 00-6.364 0z" />
      </svg>
      <!-- Comment -->
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 
             8-9 8a9.77 9.77 0 01-4.688-1.188L3 20l1.188-4.688A9.77 
             9.77 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <!-- Share -->
      <img src="https://cdn-icons-png.flaticon.com/128/9333/9333991.png" alt="Share" class="icon">
    </div>
  </div>`;
});
document.querySelector("#posts").innerHTML = postsHtml;
