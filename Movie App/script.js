const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d2546d2862a203574d4a038ef4c02d07&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=d2546d2862a203574d4a038ef4c02d07&page=1&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
//Get initial movies
getMoives(API_URL);
async function getMoives(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== "") {
        getMoives(SEARCH_API + searchTerm);

        search.value = "";
    } else {
        window.location.reload();
    }
});