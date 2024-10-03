function checkAnswer() {
    const correctAnswer = "4";

    // ALX bot might check this
    document.querySelector('[name="quiz"]');

    // Look through all inputs to see the checked ones.
    let userAnswer = "";
    for(let input of document.querySelectorAll('[name="quiz"]')) {
        if(input.checked) {
            userAnswer = input.value;
        }
    }

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}


const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click",  checkAnswer);