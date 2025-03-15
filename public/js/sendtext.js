// Add an event listener to the chat form to send a message when submitted
document.getElementById("chat-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    var message = document.getElementById("chat-message").value;
    if (message) {
        // Push the message to the Firebase database
        messagesRef.push({
            name: localStorage.getItem('mname'),
            text: message,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            type:"text"
        });
        document.getElementById("chat-message").value = ""; 
        document.getElementById("attach-button").style.display='block';
    }
});
