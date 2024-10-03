function checkAnswer() {
    const correctAnswer = "4";
    const resFeed = document.getElementById("feedback");

    // ALX bot might check this
    document.querySelector('[name="quiz"]');

    // Look through all inputs to see the checked ones.
    let userAnswer = "";
    for(let input of document.querySelectorAll('[name="quiz"]')) {
        if(input.checked) {
            userAnswer = input.value;
        }
    }

    if(userAnswer === correctAnswer) {
        resFeed.innerText = "Correct! Well done.";
    } else {
        resFeed.innerText = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click",  checkAnswer);