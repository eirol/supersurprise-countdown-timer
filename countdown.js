(function () {
  function pluralize(element, value, singular, plural) {
      // Taken from https://stackoverflow.com/a/118251

      // Roughly

      var test = document.getElementById("test");

      test.innerText = singular;
      var a = test.clientWidth;

      test.innerText = plural;
      var b = test.clientWidth;

      if (value == 1) {
        element.style.marginLeft = ((b-a)/2) + "px";
        element.style.marginRight = ((b-a)/2) + "px";
      } else {
        element.style.marginLeft = "0px";
        element.style.marginRight = "0px";
      }

      element.innerText = (value == 1) ? singular : plural;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let birthday = "Dec 7, 2020 12:00:00";
  let countDown = new Date(birthday).getTime();

  let offset = 0;

  let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDown - now;

        offset += 100000;
        distance -= offset;

        if (distance < 0) distance = 0;

        let daysLeft = Math.floor(distance / (day));
        let hoursLeft = Math.floor((distance % (day)) / (hour));
        let minutesLeft = Math.floor((distance % (hour)) / (minute));
        let secondsLeft = Math.floor((distance % (minute)) / second);

        document.getElementById("days").innerText = daysLeft;
        document.getElementById("hours").innerText = hoursLeft;
        document.getElementById("minutes").innerText = minutesLeft;
        document.getElementById("seconds").innerText = secondsLeft;

        pluralize(document.getElementById("daylabel"), daysLeft, "Día", "Días");
        pluralize(document.getElementById("hourlabel"), hoursLeft, "Hora", "Horas");
        pluralize(document.getElementById("minutelabel"), minutesLeft, "Minuto", "Minutos");
        pluralize(document.getElementById("secondlabel"), secondsLeft, "Segundo", "Segundos");

        //do something later when date is reached
        /* Nah
        if (distance < 0) {
          let countdown = document.getElementById("countdown");
          let content = document.getElementById("content");

          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        */
      }, 0)
  }());
