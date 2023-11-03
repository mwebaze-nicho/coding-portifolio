// JavaScript code to update the clock hands
function updateClock() {
    const now = new Date();
    
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    
    const hour = now.getHours() % 12; // Convert to 12-hour format
    const minute = now.getMinutes();
    const second = now.getSeconds();
    
    const hourRotation = (hour * 30) + (minute * 0.5); // Each hour represents 30 degrees, each minute represents 0.5 degrees
    const minuteRotation = (minute * 6) + (second * 0.1); // Each minute represents 6 degrees, each second represents 0.1 degrees
    const secondRotation = second * 6; // Each second represents 6 degrees
    
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);