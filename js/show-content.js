const about_me = document.getElementById("about-me")


document.addEventListener("scroll", () =>{
    
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log('Posição atual do scroll:', scrollTop);

    if(scrollTop >= 300){
        about_me.style.opacity = 1;
        about_me.style.transform = "translateY(0)"
    }
    else{
        about_me.style.opacity = 0;
    }

})
