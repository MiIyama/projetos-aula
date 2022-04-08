const btn = document.querySelector("#btn");
let activeColor = false;

btn.addEventListener("click", () => {
    if(!activeColor){
        activeColor = true;
        btn.style.backgroundColor="red";
        btn.style.color="white";
    }else{
        activeColor = false;
        btn.style.backgroundColor="yellow";
        btn.style.color="black";
    }
   
})

// document.body.node