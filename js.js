function showGreeting() {
    // Get the input value
    let answer = document.getElementById("answer").value;

    // Check if the input is not empty
    if (answer.trim() !== "") {
        // Create a personalized greeting
        let greetingMessage = `Hello, ${answer}!`;

        // Display the greeting in the paragraph with the "greeting" id
        document.getElementById("greeting").textContent = greetingMessage;
    } else {
        // If the input is empty, show a message
        alert("Are you coming");
    }
}


