const about_me = document.getElementById("about-me");
const articleContent = document.getElementById("article");


document.addEventListener("scroll", () =>{
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log('Posição atual do scroll:', scrollTop);

    if(scrollTop >= 300){
        about_me.style.opacity = 1;
        about_me.style.transform = "translateY(0)"
        
        if(scrollTop >= 700){
            articleContent.style.opacity = 1;
            articleContent.style.transform = "translateY(0)"
        }
    }
    else{
        about_me.style.opacity = 0;
        articleContent.style.opacity = 0;
    }
})
