function updateTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisCurrent = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisCurrent.format("Do MMMM YYYY");
  parisTimeElement.innerHTML = parisCurrent.format("HH:mm:ss");

  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesCurrent = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesCurrent.format("Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesCurrent.format("HH:mm:ss");
}
updateTime();
setInterval(updateTime, 1000);
