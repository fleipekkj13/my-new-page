const $carrosselCARD = document.querySelectorAll(".article-content-card");
const $carrosselBTN = document.querySelectorAll(".carrossellBTN");

let count = 0;

window.addEventListener("load", () => {
    $carrosselCARD[count].style.transform = "translateX(0)";
});

function carrosselForward() {
    $carrosselCARD[count].style.transform = "translateX(-200%)";

    if (count <= $carrosselCARD.length) {
        count++;
        if (count == $carrosselCARD.length) {
            count = 0;
        }
        if (count == 0) {
            $carrosselCARD.forEach((el) => {
                el.style.transform = "translateX(200%)";
            });
        }
        $carrosselCARD[count].style.transform = "translateX(0)";
    }
}

function carrosselBackward() {
    $carrosselCARD[count].style.transform = "translateX(200%)";

    if (count <= $carrosselCARD.length) {
        count--;
        if (count < 0) {
            count = $carrosselCARD.length - 1;
            $carrosselCARD.forEach((el) => {
                el.style.transform = "translateX(-200%)";
            });
            $carrosselCARD[count].style.transform = "translateX(0)";
        }
        $carrosselCARD[count].style.transform = "translateX(0)";
    }
}
$carrosselBTN[1].addEventListener("click", carrosselForward);
$carrosselBTN[0].addEventListener("click", carrosselBackward);
