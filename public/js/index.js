// Array of background image URLs
const backgroundImages = [
    "url('https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/20230724_174423_0000.png')",
    "url('https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/20230723_123107_0000.png')",
    "url('https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/20230723_123457_0000.png')",
    "url('https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/20230723_123627_0000.png')",
    "url('https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/20230723_124304_0000.png')",
    "url('https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/png_20230723_121408_0000.png')",
    "url('https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/png_20230723_123823_0000.png')",
    "url('https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/png_20230723_123956_0000.png')",
    ];
    
    setTimeout(function () {
    document.getElementById("content").style.display="block";
    document.getElementById("welcome-image").style.display = "none";
    var newBackgroundImage = "url('https://raw.githubusercontent.com/alekhakumarswain/Bunnytalk/main/Img/20230724_174423_0000.png')";
    document.body.style.backgroundImage = newBackgroundImage;
    }, 10000); 
  
    setTimeout(function () {
    document.getElementsByClassName("loader")[0].style.display = "none";
    }, 10000); 
    
    // Hide the 1st screen and change background image on button click
    function hidep1() {
    document.getElementById("content").style.display = "none";
    document.getElementById("cloudbox").style.display="block";
    document.body.style.backgroundColor = "#e291a3";
    document.body.style.backgroundPosition="center top -10%;";
    document.body.style.paddingTop="13px";
    let currentBackgroundIndex = 6;
    const newBackgroundImage = backgroundImages[currentBackgroundIndex];
    document.body.style.backgroundImage = newBackgroundImage;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    setTimeout(() => {
     document.getElementById("next2").style.display = "block"; // Show the second button after 5000ms
    }, 5000);
    }