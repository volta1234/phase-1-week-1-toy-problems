function studentGrade(score) {

    if (score <40) {
        return "E"
    }
    else if (score <=49) {
        return "D"
    }
    else if (score <=59) {
        return "C"
    }
    else if (score <=79) {
        return "B"
    }
    else if (score <=100) {
        return "A"
    }
    else {
        return "Invalid input"
    }
}
function handleClick(event) {
    let score = parseInt(document.getElementById("score").value)
    let grade = studentGrade(score)
    document.getElementById("Grade").textContent = grade
}
