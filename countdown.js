(function () {
  function pluralize(element, value, singular, plural) {
    /*
    // Taken from https://stackoverflow.com/a/118251

    // Roughly

    var test = document.getElementById("test");

    test.innerText = singular;
    var a = test.clientWidth;

    test.innerText = plural;
    var b = test.clientWidth;

    // I guess we could have used a min width or something, but whatever (that's exactly what I've done)

    if (value == 1) {
      element.style.marginLeft = ((b-a)/2) + "px";
      element.style.marginRight = ((b-a)/2) + "px";
    } else {
      element.style.marginLeft = "0px";
      element.style.marginRight = "0px";
    }
    */

    element.innerText = (value == 1) ? singular : plural;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let target = "Dec 7, 2020 11:00:00";
  let countDown = new Date(target).getTime();

  let offset = 0;

  let t0 = new Date().getTime();

  function update() {
    let now = new Date().getTime();
    let distance = countDown - now;

    let elapsed = now - t0;
    let a = 10 * elapsed/second;
    let x = -a;
    let y = -0.5 * a;
    //document.body.style.backgroundPosition = x + "% " + y + "%";

    // For testing purposes
    //offset += 1000000;
    //distance -= offset;

    if (distance < 0) distance = 0;

    let daysLeft = Math.floor(distance / (day));
    let hoursLeft = Math.floor((distance % (day)) / (hour));
    let minutesLeft = Math.floor((distance % (hour)) / (minute));
    let secondsLeft = Math.floor((distance % (minute)) / second);

    document.getElementById("days").innerText = daysLeft;
    document.getElementById("hours").innerText = hoursLeft;
    document.getElementById("minutes").innerText = minutesLeft;
    document.getElementById("seconds").innerText = secondsLeft;

    // For testing purposes
    //daysLeft = (daysLeft % 2) ? 0 : 1;
    //hoursLeft = (hoursLeft % 2) ? 0 : 1;
    //minutesLeft = (minutesLeft % 2) ? 0 : 1;
    //secondsLeft = (secondsLeft % 2) ? 0 : 1;

    pluralize(document.getElementById("daylabel"), daysLeft, "Día", "Días");
    pluralize(document.getElementById("hourlabel"), hoursLeft, "Hora", "Horas");
    pluralize(document.getElementById("minutelabel"), minutesLeft, "Minuto", "Minutos");
    pluralize(document.getElementById("secondlabel"), secondsLeft, "Segundo", "Segundos");
  }

  document.addEventListener("DOMContentLoaded", update);
  setInterval(update, 30);

}());
