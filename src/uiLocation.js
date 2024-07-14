export default function loadLocation(data) {
  const mainContainer = document.getElementById("main-container");

  const searchDescription = document.createElement("div");
  searchDescription.classList.add("search-description");
  // searchDescription.textContent = "Choose a Location";

  searchDescription.textContent = `${data.location.name}, ${data.location.country}`;

  const searchResult = document.createElement("div");
  searchResult.classList.add("search-result");
  searchResult.innerHTML = `Temperature (c): ${data.current.temp_c} <br>Feels like: ${data.current.feelslike_c}`;

  mainContainer.appendChild(searchDescription);
  mainContainer.appendChild(searchResult);
}
