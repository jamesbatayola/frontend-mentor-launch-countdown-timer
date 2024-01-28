const secondBox = document.querySelector(".top-second");
const numSecond = document.querySelector(".num-sec");

const minuteBox = document.querySelector(".top-minute");
const numMinute = document.querySelector(".num-min");

const hourBox = document.querySelector(".top-hour");
const numHour = document.querySelector(".num-hrs");

const dayBox = document.querySelector(".top-day");
const numDay = document.querySelector(".num-day");

let seconds = 60;

let minutes = 7;

let hours = 24;

let days = 10;

const displayNum = () => {
	numSecond.textContent = seconds;
	numMinute.textContent = minutes;
	numHour.textContent = hours;
	numDay.textContent = days;
};

const run = setInterval(() => {
	setTimeout(() => {
		numSecond.textContent = seconds;
		secondBox.classList.add("flip");
		seconds--;
	}, 50);

	if (seconds < 0) {
		seconds = 60;
		minutes--;
		numSecond.textContent = seconds;
		numMinute.textContent = minutes;
		minuteBox.classList.add("flip");
	}

	if (minutes < 0) {
		minutes = 60;
		hours--;
		numMinute.textContent = minutes;
		numHour.textContent = hours;
		hourBox.classList.add("flip");
	}

	if (hours < 0) {
		hours = 24;
		days--;
		numHour.textContent = hours;
		numDay.textContent = days;
		dayBox.classList.add("flip");
	}

	if (days < 0) {
		days = 0;
	}

	if (seconds === 0 && hours === 0 && minutes === 0 && days === 0) {
		clearInterval(run);
	}

	secondBox.classList.remove("flip");
	minuteBox.classList.remove("flip");
	hourBox.classList.remove("flip");
	dayBox.classList.remove("flip");
}, 1000);

displayNum();
