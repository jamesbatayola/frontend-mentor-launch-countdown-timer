const secondBox = document.querySelector(".top-second");
const numSecond = document.querySelector(".num-sec");

const minuteBox = document.querySelector(".top-minute");
const numMinute = document.querySelector(".num-min");

const hourBox = document.querySelector(".top-hour");
const numHour = document.querySelector(".num-hour");

const dayBox = document.querySelector(".top-day");
const numDay = document.querySelector("num-day");

const number = document.querySelector(".seconds");

let seconds = 1;

let minutes = 0;

let hours = 0;

let days = 0;

setInterval(() => {
	setTimeout(() => {
		numSecond.textContent = seconds;
		seconds++;
		secondBox.classList.add("flip");
		if (seconds >= 60) seconds = 0;
	}, 50);
	secondBox.classList.remove("flip");
}, 1000);

setInterval(() => {
	setTimeout(() => {
		minutes++;
		numMinute.textContent = minutes;
		minuteBox.classList.add("flip");
		if (minutes >= 60) minutes = 0;
	}, 50);
	minuteBox.classList.remove("flip");
}, 60000);

setInterval(() => {
	setTimeout(() => {
		hours++;
		hourBox.classList.add("flip");
		numHour.textContent = hours;
	}, 50);
	hourBox.classList.remove("flip");
}, 600000);
