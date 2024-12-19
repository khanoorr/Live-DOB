// const elem = document.getElementById("timer");
// const elem1 = new Date();
// const elem2 = new Date(2025, 5, 7);
// let elem3 = elem2 - elem1;
// let day = Math.floor(elem3 / (1000 * 60 * 60 * 24)); //mili time / mili time gives days
// let hour = Math.floor((elem3 / (1000 * 60 * 60)) % 24); //militime /
// let second = Math.floor((elem3 / (1000 * 60)) % 60);
// elem.innerHTML = `Time left: ${day} days, ${hour} hours, ${minutes} minutes`;

// const elem = document.getElementById("timer");
// const currentDate = new Date(); // Current date and time
// const targetDate = new Date(2025, 5, 7); // Target date (June 7, 2025)

// // Calculate the difference in milliseconds
// let timeDifference = targetDate - currentDate;

// // Calculate remaining days, hours, and minutes
// const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
// let minutes = Math.floor((timeDifference / (1000 * 60 * 60)) % 60);
// let second = Math.floor((timeDifference / (1000 * 60)) % 60);

// // Display the results
// elem.innerHTML = `Days:${days}  Hours:${hours}  Minutes:${minutes}  Seconds:${second}`;
let run = () => {
  const elem = document.getElementById("timer");

  const currentDate = new Date(); // Current date and time
  const targetDate = new Date(2025, 5, 7); // Target date (June 7, 2025)

  // Calculate the difference in milliseconds
  let timeDifference = targetDate - currentDate;

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  let seconds = Math.floor((timeDifference / 1000) % 60);

  // Display the results with inline styles
  elem.innerHTML = `
    <div style="color: #4CAF50; font-weight: bold; font-size: 8rem; text-align: center;">Days: ${days}</div>
    <span style="color: #2196F3; font-weight: bold; font-size: 3rem;">Hours: ${hours}</span>
    <span style="color: #FFC107; font-weight: bold; font-size: 3rem;">Minutes: ${minutes}</span>
    <span style="color: #F44336; font-weight: bold; font-size: 3rem;">Seconds: ${seconds}</span>
`;
};
setInterval(run, 1000);
