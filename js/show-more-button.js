const show_more = document.getElementById("show-more");

const home = document.getElementById("home");
const about_me_header = document.getElementById("about-me-header");
const projetcs = document.getElementById("projects");

const social_media = document.getElementById("social-media")


show_more.addEventListener("click", () =>{
    scrollTo(0, 600);
})

home.addEventListener("click",()=>{
    scrollTo(0,0);
})

about_me_header.addEventListener("click", ()=>{
    scrollTo(0,600);
})

projetcs.addEventListener("click", ()=>{
    scrollTo(0,1500);
})

social_media.addEventListener("click", () =>{
    scrollTo(0,2000)
})