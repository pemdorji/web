const numbers = [3, 7, 12, 18, 25];
    const luckyNumber = numbers[Math.floor(Math.random() * numbers.length)];
    let attempts = 0;
    const maxAttempts = 3;

    function checkGuess() {
        const userGuess = parseInt(document.getElementById('userGuess').value);
        const resultDiv = document.getElementById('result');
        attempts++;

        if (attempts <= maxAttempts) {
            if (userGuess === luckyNumber) {
                resultDiv.textContent = "Bravo! You guessed it right!";
            } else if (userGuess < luckyNumber) {
                resultDiv.textContent = "Too low! Try again.";
            } else {
                resultDiv.textContent = "Too high! Try again.";
            }
        }

        if (attempts === maxAttempts) {
            resultDiv.textContent = `Game Over! The lucky number was ${luckyNumber}.`;
            document.getElementById('userGuess').disabled = true;
        }
}