function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#input-city");
  let city = document.querySelector(".city");
  let cityName = cityInput.value;
  city.innerHTML = cityName;
  let apiKey = "603213a20od31054bbtafc903709b865";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getTemp);
}
function getTemp(response) {
  let tempEle = Math.round(response.data.temperature.current);
  let degrees = document.querySelector(".degrees");
  degrees.innerHTML = `${tempEle}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

day = days[new Date().getDay()];
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hour < 10) {
  hour = `0${hour}`;
}
let time = `${hour}:${minutes}`;

let date = `${day} ${time},`;

let dateFormat = document.querySelector(".date-format");
dateFormat.innerHTML = date;

let searchEngine = document.querySelector("#search-engine-city");
searchEngine.addEventListener("submit", search);
