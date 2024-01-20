function updateTime() {
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
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
