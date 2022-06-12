// задачи на переменные 

// задача 1

// let name = "Джон"
// let admin = name
// alert(admin)

// задача 2

// let planet = "Земля"
// let rtUser = null

// задачи на alert , prompt , confirm

// задача 1

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert((+a) + (+b)); 

// let name = prompt("Введите ваше имя", ["Василий"])
// alert(name)




// let button = document.getElementById("button")
let smile2 = document.getElementById("smile2")
let smile3 = document.getElementById("smile3")
let smile4 = document.getElementById("smile4")
let smile5 = document.getElementById("smile5")
let smile6 = document.getElementById("smile6")
let smile_1 = document.getElementById("smile_1")
let smile_2 = document.getElementById("smile_2")
let smile_3 = document.getElementById("smile_3")

// let counter = 0

// button.onclick = function () {
//     if (counter == 1) {
//         smile2.hidden = true
//         smile3.hidden = false
//     } if (counter == 2) {
//         smile3.hidden = true
//         smile4.hidden = false
//     } if (counter == 3) {
//         smile4.hidden = true
//         smile5.hidden = false
//     } if (counter == 4) {
//         smile5.hidden = true
//         smile6.hidden = false
//     } if (counter == 5) {
//         counter = 0
//         smile2.hidden = false
//         smile6.hidden = true
//     }
//     ++counter
// }


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

