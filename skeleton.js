function showSkeletonLoader() {
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
    var skeletonLoader = document.querySelector(".chat-skeleton");
    if (skeletonLoader) {
    skeletonLoader.remove();
    }
    }