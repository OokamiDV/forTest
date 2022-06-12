let smile2 = document.getElementById("smile2")
let smile3 = document.getElementById("smile3")
let smile4 = document.getElementById("smile4")
let smile5 = document.getElementById("smile5")
let smile6 = document.getElementById("smile6")
let smile_1 = document.getElementById("smile_1")
let smile_2 = document.getElementById("smile_2")
let smile_3 = document.getElementById("smile_3")

function changeFace1() {
    smile_1.hidden = true
    smile_2.hidden = false
    smile_3.hidden = true
    smile3.hidden = true
}

function changeFace2() {
    smile_1.hidden = false
    smile_2.hidden = true
    smile_3.hidden = true
    smile3.hidden = true
}

function changeFace3() {
    smile_1.hidden = true
    smile_2.hidden = true
    smile_3.hidden = false
    smile3.hidden = true
}

function changeFace4() {
    smile_1.hidden = true
    smile_2.hidden = true
    smile_3.hidden = true
    smile3.hidden = false
}





setInterval(() => changeFace1(), 3000);
setInterval(() => changeFace2(), 6000);
setInterval(() => changeFace3(), 9000);
setInterval(() => changeFace4(), 20000);

