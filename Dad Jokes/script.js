const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

async function generateJoke() {
    const config = {
        header: {
            Accept: "application/json",
        },
    };
    const res = await fetch("https://icanhazdadjoke.com", config);

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}

//Using FETCH
function generateJoke() {
    const config = {
        header: {
            Accept: "application/json",
        },
    };
    fetch("https://icanhazdadjoke.com", config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerHTML = data.joke;
        });
}