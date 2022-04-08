const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const main = document.querySelector("#main");

getMovies(APIURL);

async function getMovies(url) {
  const response = await fetch(url);
  const responseData = await response.json();
  console.log(responseData.results);
  createCards(responseData.results);
}

function createCards(resultsMovies) {
  main.innerHTML = "";
  resultsMovies.forEach((movie) => {
    const { title, overview, poster_path, vote_average } = movie;
    //   const title1 = movie.title;
    console.log(movie);
    const card = document.createElement("div");
    card.classList.add("movie");
    card.innerHTML = `
    <img
        src="${IMGPATH + poster_path}"
        alt="${title}"
    />
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Overview:</h3>
        ${overview}
    </div>
`;
    main.appendChild(card);
  });
}

function getClassByRate(vote_average) {
  if (vote_average >= 8) {
    return "green";
  } else if (vote_average >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
