let h = 0
document.getElementById("home-el").textContent = h

function homeplus1() {
    console.log("+1 clicked")
    h += 1
    document.getElementById("home-el").textContent = h
}


function homeplus2() {
    console.log("+2 clicked")
    h += 2
    document.getElementById("home-el").textContent = h
}

function homeplus3() {
    console.log("+3 clicked")
    h += 3
    document.getElementById("home-el").textContent = h
}


let g = 0
document.getElementById("guest-el").textContent = h

function guestplus1() {
    console.log("+1 clicked")
    g += 1
    document.getElementById("guest-el").textContent = g
}


function guestplus2() {
    console.log("+2 clicked")
    g += 2
    document.getElementById("guest-el").textContent = g
}

function guestplus3() {
    console.log("+3 clicked")
    g += 3
    document.getElementById("guest-el").textContent = g
}

function newgame() {
    console.log("new game clicked")
    h = 0
    g = 0
    document.getElementById("home-el").textContent = h
    document.getElementById("guest-el").textContent = g
}