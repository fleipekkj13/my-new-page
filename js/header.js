const header = document.getElementById("header")


document.addEventListener("scroll", () =>{
    
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log('Posição atual do scroll:', scrollTop);

    if(scrollTop >= 10){
        header.style.position = 'fixed';
    }
    else{
        header.style.position = "relative";
    }

})
