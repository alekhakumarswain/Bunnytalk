showSkeletonLoader();
            $(document).ready(function() {
            var textField = $("#chat-message");
            var button = $("#attach-button");
            
            textField.on("input", function() {
            if (textField.val().trim() !== "") {
            button.hide();
            } else {
            button.show();
            }
            });
            });