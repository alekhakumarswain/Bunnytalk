  // Function to calculate the time difference
  function getTimeDifference(targetDate) {
    const currentDate = new Date();
    const timeDifference = currentDate - targetDate;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    };
    }
    
  // Function to update the timer display
  function updateTimerDisplay() {
    // Set the target date and time in the past
    const targetDate = new Date("2023-01-26T11:50:00");
    
    const timeDifference = getTimeDifference(targetDate);
    
    const timerText = document.getElementById("timer-text");
    timerText.textContent = `${timeDifference.days} days, ${timeDifference.hours} hours, ${timeDifference.minutes} minutes, ${timeDifference.seconds} seconds`;
    
    setTimeout(updateTimerDisplay, 1000); // Update every 1 second
    }
    
    // Call the updateTimerDisplay function initially to start the timer
    updateTimerDisplay();