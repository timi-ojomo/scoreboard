let homeScore = 0
let guestScore = 0

function addHomeOne() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore 
}

function addHomeTwo() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore 
}

function addHomeThree() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore 
}

function addGuestOne() {
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore 
}

function addGuestTwo() {
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore 
}

function addGuestThree() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore 
}