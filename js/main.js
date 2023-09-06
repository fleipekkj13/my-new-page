const carrosel_card = document.querySelectorAll(".article-content-card")
let test = false
const btm_card = document.querySelectorAll(".btm")
carrosel_card.forEach((card) =>{
    card.style.transition = "transform 0.5s ease-in-out"
})
btm_card[1].addEventListener("click", () =>{
    if(test == false){
        test = !test
        carrosel_card[1].style.transform = "translateX(0)"
        carrosel_card[0].style.transform = "translateX(100%)"
        setTimeout(() => {
            carrosel_card[0].style.opacity = 0
            carrosel_card[0].style.transform = "translateX(-100%)"
        },500)
    }
    else{
        test = !test
        carrosel_card[0].style.transform = "translateX(0)"
        carrosel_card[1].style.transform = "translateX(100%)"
    }
})
