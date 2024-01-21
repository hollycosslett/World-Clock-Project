function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonCurrent = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonCurrent.format("Do MMMM YYYY");
    londonTimeElement.innerHTML = londonCurrent.format("HH:mm:ss");
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisCurrent = moment().tz("Europe/Paris");
    parisDateElement.innerHTML = parisCurrent.format("Do MMMM YYYY");
    parisTimeElement.innerHTML = parisCurrent.format("HH:mm:ss");
  }
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesCurrent = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesCurrent.format("Do MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesCurrent.format("HH:mm:ss");
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoCurrent = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoCurrent.format("Do MMMM YYYY");
    tokyoTimeElement.innerHTML = tokyoCurrent.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="paris-container">
  <div class="left">
  <div class="city">${cityName}</div>
  <div class="date">${cityTime.format("Do MMMM YYYY")}</div></div>
  <div class="right">
    <div class="time"">${cityTime.format("HH:mm:ss")}</div>
  </div>
</div>
<br/>
<a href="index.html">Cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
