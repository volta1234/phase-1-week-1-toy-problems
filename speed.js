function carSpeedChecker(speed){
    if (speed >=0 && speed <=70){
        return "OK"
    }
    else if (speed ===75) {
        return "1 point"
    }
    else if (speed ===80) {
        return "2 points"
    }
    else if (speed ===85) {
        return "3 ponts"
    }
    else if (speed ===90) {
        return "4 ponts"
    }
    else if (speed ===95) {
        return "5 ponts"
    }
    else if (speed ===100) {
        return "6 ponts"
    }
    else if (speed ===105) {
        return "7 ponts"
    }
    else if (speed ===110) {
        return "8 ponts"
    }
    else if (speed ===115) {
        return "9 ponts"
    }
    else if (speed ===120) {
        return "10 ponts"
    }
    else if (speed ===125) {
        return "11 ponts"
    }
    else if (speed ===130) {
        return "12 ponts"
    }
    else if (speed >130) {
        return "License Suspendend"
    }
    else {
        return "invalid"
    }
}
function handleClick(event) {
    let speed = parseInt(document.getElementById ("Speed").value)
    let message = carSpeedChecker(speed)
    document.getElementById("message").textContent = message
}
