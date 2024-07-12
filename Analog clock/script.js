const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

for(let i = 1; i <= 12; i++){
    numberElement.push(
        `<span style='--index:${i};'><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

for(let i = 1; i <= 60; i++){
    barElement.push(
        `<span style='--index:${i};'><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

function getCurrentTime(){
    let data = new Date();
    let currentHours = data.getHours();
    let currentMinutes = data.getMinutes();
    let currentSeconds = data.getSeconds();

    // Calculate rotation angles for each hand
    let secondsRotation = currentSeconds * 6; // Each second rotates the hand by 6 degrees
    let minutesRotation = (currentMinutes + currentSeconds / 60) * 6; // 1 minute = 6 degrees, also considering seconds
    let hoursRotation = (currentHours + currentMinutes / 60) * 30; // 1 hour = 30 degrees, also considering minutes

    // Apply rotation to hands
    handSeconds.style.transform = `rotate(${secondsRotation}deg)`;
    handMinutes.style.transform = `rotate(${minutesRotation}deg)`;
    handHours.style.transform = `rotate(${hoursRotation}deg)`;
}

// Call getCurrentTime function every second to update the clock hands
setInterval(getCurrentTime, 1000);

// Initial call to set the initial position of hands without waiting for 1 second
getCurrentTime();

// let intervalId; // Global variable to store the interval ID

// // Function to start the clock
// function startClock() {
//     intervalId = setInterval(getCurrentTime, 1000);
// }

// // Function to stop the clock
// function stopClock() {
//     clearInterval(intervalId);
// }

// // Initial call to start the clock
// startClock();

// // Event listener to stop the clock when needed
// // For example, you can stop the clock when a button is clicked
// document.getElementById('stopButton').addEventListener('click', stopClock);

// // Event listener to start the clock again when needed
// // For example, you can start the clock when another button is clicked
// document.getElementById('startButton').addEventListener('click', startClock);



