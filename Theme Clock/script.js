const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
    "saturday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thurday",
    "friday",
];

const monnths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

toggle.addEventListener("click", () => {
    const html = document.querySelector("html");

    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        toggle.innerHTML = "Dark Mode";
    } else {
        html.classList.add("dark");
        toggle.innerHTML = "Light Mode";
    }
});