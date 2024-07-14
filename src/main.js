import { getWeatherData } from "./data";
import "./style.css";
import loadLocation from "./uiLocation";

const header = document.querySelector("header");

const searchContainer = document.createElement("div");
searchContainer.classList.add("search-container");

const searchInput = document.createElement("input");
searchInput.classList.add("search-input");
searchInput.placeholder = "Search for a city or country";

const searchButton = document.createElement("button");
searchButton.classList.add("search-button");

searchButton.innerHTML = "<i class='fa-solid fa-magnifying-glass'></i>";

searchButton.addEventListener("click", () => {
  const city = searchInput.value;
  getWeatherData(city)
    .then((data) => {
      console.log(data);
      searchInput.value = `${data.location.name}, ${data.location.country}`;
      loadLocation(data);
    })
    .catch((error) => console.error("Error fetching weather data:", error));
});

searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchButton);

header.appendChild(searchContainer);
