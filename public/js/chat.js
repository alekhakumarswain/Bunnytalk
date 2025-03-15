
// Add an event listener to the "attach-button" element to trigger the file input click when clicked
document.getElementById("attach-button").addEventListener("click", function () {
    document.getElementById("file-input").click();
});

// Add an event listener to the "file-input" element to call the showImage function when a file is selected
document.getElementById('file-input').addEventListener('change', showImage);

// Function to display the selected image
function showImage(evt) {
    // Get the selected files from the input event
    var files = evt.target.files;
    // Check if no files were selected
    if (files.length === 0) {
        alert('No files selected');
        return;
    }
    // Create a new FileReader to read the file
    var reader = new FileReader();
    // Set the onload event for the FileReader
    reader.onload = function (event) {
        // Create a new Image element
        var img = new Image();
        // Set the onload event for the Image element
        img.onload = function () {
            // Get the chat display element
            var chatDisplay = document.getElementById('chat-img-display');
            // Clear any existing content in the chat display element
            chatDisplay.innerHTML = '';
            // Create a container div for the image and close icon
            var containerDiv = document.createElement('div');
            containerDiv.classList.add('image-container');
            // Create a close icon element
            var closeIcon = document.createElement('i');
            closeIcon.classList.add('ri-close-circle-line', 'close-icon');
            // Add an event listener to hide the image and show the message input when the close icon is clicked
            closeIcon.addEventListener('click', function () {
                containerDiv.style.display = 'none';
                chatDisplay.style.display = 'none';
                document.getElementById('send-msg').style.display = 'block';
            });
            // Add a class to the image element
            img.classList.add('uploaded-image');
            // Append the image and close icon to the container div
            containerDiv.appendChild(img);
            containerDiv.appendChild(closeIcon);
            // Create a send button
            var sendButton = document.createElement('button');
            sendButton.classList.add('send-button');
            // Add an event listener to send the image when the send button is clicked
            sendButton.addEventListener('click', function () {
                var messageData = {
                    name: localStorage.getItem('mname'),
                    text: event.target.result, // image URL
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                    type: "image"
                };
                // Push the message to the Firebase database
                messagesRef.push(messageData);
                //console.log('Sending image:', img.src);
                // Show the message input and hide the image display
                document.getElementById('send-msg').style.display = 'block';
                document.getElementById('chat-img-display').style.display = 'none';
            });
            // Create a send icon and append it to the send button
            var sendIcon = document.createElement('i');
            sendIcon.classList.add('ri-send-plane-fill', 'send-icon');
            sendButton.appendChild(sendIcon);
            sendButton.appendChild(document.createTextNode('SEND'));
            // Append the send button to the container div
            containerDiv.appendChild(sendButton);
            // Append the container div to the chat display element
            chatDisplay.appendChild(containerDiv);
            // Show the chat display and hide the message input
            chatDisplay.style.display = 'block';
            document.getElementById('send-msg').style.display = 'none';
        };
        // Set the image source to the result from the FileReader
        img.src = event.target.result;
    };
    // Read the file as a data URL
    reader.readAsDataURL(files[0]);
}

// Initialize Firebase database reference
var database = firebase.database();
var messagesRef = database.ref("messages");
var lastDate = null; // Variable to track the last message date
var dateFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
};



// Listen for new messages added to the Firebase database
messagesRef.orderByChild("timestamp").on("child_added", function (snapshot) {
    var message = snapshot.val();
    var messageDate = new Date(message.timestamp);
    hideSkeletonLoader(); // Hide the skeleton loader
    // Check if the message date is different from the last message date
    if (!lastDate || messageDate.toDateString() !== lastDate.toDateString()) {
        var formattedDate = messageDate.toLocaleDateString(undefined, dateFormatOptions);
        var dateDisplay = "<div class='message-date'>" + formattedDate + "</div>";
        document.getElementById("chat-display").innerHTML += dateDisplay;
        lastDate = messageDate;
    }
    // Determine the logo based on the sender
    var logo;
    if (message.name === mname) {
        logo = "<img class='ilogo rlogo' src='https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/jpg_20230722_224807_0000.jpg'>";
    } else {
        logo = "<img class='ilogo llogo' src='https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/jpg_20230722_224807_0000.jpg'>";
    }
    // Create the message container with the appropriate class based on the sender
    var messageContainer = "<div class='message-container";
    if (message.name === mname) {
        messageContainer += "message sent-message";
    } else {
        messageContainer += "message received-message";
    }
    messageContainer += "'>";

    // Check if the message type is an image
    if (message.type === "image") {
        messageContainer += "<div class='message'>";
        messageContainer += "<p><strong>" + message.name + "</strong><br>";
        messageContainer += "<img style='height:60%;width:70%;padding:10px 0px 10px 0;'  src='" + message.text + "' alt='Image' />";
        messageContainer += "<br><i class='time'>" + formatDate(messageDate) + "</i>";
        messageContainer += "</div>";
    } else {
        var formattedText = makeLinksClickable(message.text);
        messageContainer += "<div class='message'>";
        messageContainer += "<p><strong>" + message.name + "</strong><br> " + formattedText + "<br><i class='time'>" + formatDate(messageDate) + "</i></p>";
        messageContainer += "</div>";
    }
    
    messageContainer += "</div>";
    document.getElementById("chat-display").innerHTML += logo + messageContainer;
    
    // Scroll to the newest message
    var chatDisplay = document.getElementById("chat-display");
    chatDisplay.lastChild.scrollIntoView({ behavior: "smooth" });
});








