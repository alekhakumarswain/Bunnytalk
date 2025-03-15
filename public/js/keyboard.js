// Add an event listener to the message input to handle Enter and Shift+Enter key presses
document.getElementById("chat-message").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (!event.shiftKey) {
            event.preventDefault(); // Prevent default Enter key behavior
            document.getElementById("chat-form").dispatchEvent(new Event("submit")); // Submit the form
        }
        // If Shift key is pressed, allow the default behavior to start a new line
    }
});

// Add event listener to detect the "/" key press and focus on the input field
document.addEventListener("keydown", function(event) {
    if (event.key === "/") {
        event.preventDefault();
        document.getElementById("chat-message").focus();
    }
});
