const topBtn = document.querySelector(".top-btn");
console.log(topBtn);

topBtn.onclick = () =>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
};

window.addEventListener("scroll", ()=>{
    if(window.scrollY < 300){
        topBtn.style.opacity = 0;
        topBtn.style.visibility = "hidden"
        console.log("aaa");
    }else{
        topBtn.style.opacity = 1;
        topBtn.style.visibility = "visible"
        console.log("bbb");
    }
})