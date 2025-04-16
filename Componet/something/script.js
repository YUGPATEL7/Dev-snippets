let text =document.querySelector("h4");
let add = document.querySelector(".Addbtn")
// let remove = document.querySelector(".Removebtn")
let check =0

add.addEventListener("click",() => {
    if (check==0){

        text.textContent="Added";
        text.style.color="green";
        add.style.backgroundColor = 'rgb(241, 239, 239)';
        add.style.color="black"
        add.textContent="Remove";
        check=1;
    }else{
        text.textContent="Stranger";
        text.style.color="red";
        add.style.backgroundColor = 'rgb(155, 104, 233)';
        add.style.color="white"
        add.textContent="Add Friend";

        check=0
    }

}
)
