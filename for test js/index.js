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

// let name = prompt("Введите ваше имя", ["Василий"])
// alert(name)
let button = document.getElementById("button")
let smile2 = document.getElementById("smile2")
let smile3 = document.getElementById("smile3")
let smile4 = document.getElementById("smile4")
let smile5 = document.getElementById("smile5")
let smile6 = document.getElementById("smile6")


smile3.hidden = true
smile4.hidden = true
smile5.hidden = true
smile6.hidden = true


let counter = null


button.onclick = function () {
    counterClick(counter)
    if (counter == 1) {
        smile2.hidden = true
        smile3.hidden = false
        smile4.hidden = true
        smile5.hidden = true
        smile6.hidden = true
    } if (counter == 2) {
        smile2.hidden = true
        smile3.hidden = true
        smile4.hidden = false
        smile5.hidden = true
        smile6.hidden = true
    } if (counter == 3) {
        smile2.hidden = true
        smile3.hidden = true
        smile4.hidden = true
        smile5.hidden = false
        smile6.hidden = true
    } if (counter == 4) {
        smile2.hidden = true
        smile3.hidden = true
        smile4.hidden = true
        smile5.hidden = true
        smile6.hidden = false
    } if (counter == 5) {
        counter = 0
        smile2.hidden = false
        smile3.hidden = true
        smile4.hidden = true
        smile5.hidden = true
        smile6.hidden = true
    }
}


function counterClick() {
    if (button.onclick) {
        counter = ++counter
    }
}
