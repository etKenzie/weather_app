async function getWeatherData(city) {
  const apiKey = process.env.API_WEATHER;
  const url = new URL(`https://api.weatherapi.com/v1/current.json?`);
  url.searchParams.append("key", apiKey);
  url.searchParams.append("q", city);

  const response = await fetch(url, {
    mode: "cors",
  });
  const data = await response.json();

  return data;
}

export { getWeatherData };
