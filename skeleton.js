function showSkeletonLoader() {
    // Show the skeleton loader HTML
    document.getElementById("chat-display").innerHTML = `
    <div class="chat-skeleton">
    <div class="avatar-skeleton lavt"></div>
    <div class="message-skeleton lskel" ></div>
    <div class="avatar-skeleton ravt"></div>
    <div class="message-skeleton rskel"></div>
    </div>
    <div class="chat-skeleton">
    <div class="avatar-skeleton lavt"></div>
    <div class="message-skeleton lskel"></div>
    <div class="avatar-skeleton ravt"></div>
    <div class="message-skeleton rskel"></div>
    </div>
    <div class="chat-skeleton">
    <div class="avatar-skeleton lavt"></div>
    <div class="message-skeleton lskel" ></div>
    <div class="avatar-skeleton ravt"></div>
    <div class="message-skeleton rskel"></div>
    </div>
    `;
    }
    
    function hideSkeletonLoader() {
    // Remove the skeleton loader HTML
    var skeletonLoader = document.querySelector(".chat-skeleton");
    if (skeletonLoader) {
    skeletonLoader.remove();
    }
    }