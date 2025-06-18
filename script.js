
if (window.screen.width <= 1130) {
  function removeall() {
    $(".cir_border").css("border", "none");
  }
  $("#sec, #pri, #tri, #quad, #quint, #hex, #hept").on("click", function () {
    removeall();
    $(this).css({
      "border": "2px solid whitesmoke",
      "border-radius": "20px"
    });
  });
}


$("#about").on("mouseover", function () {
  introAboutLogoTransition();
});


$("input").on("change", function () {
  $("body").toggleClass("blue");
});


const checkbox = document.getElementById("checkbox");

function introAboutLogoTransition() {
  $("#about-quad").css("top", "70%");
  $("#about-quad").css("opacity", "1");
}

function checkDarkMode() {
  if (
    localStorage.getItem("tourism_website_darkmode") === "true"
  ) {
    document.body.classList.add("dark");
    checkbox.checked = true;
  }
}
checkDarkMode();

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("tourism_website_darkmode", document.body.classList.contains("dark"));
});

let mybutton = document.getElementById("upbtn");

window.onscroll = function () {
  scrollFunction();
  updateNav();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function updateNav() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");

  let scrollPosition = window.scrollY + 100; 

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      if (navLinks[index]) {
        navLinks[index].classList.add("active");
      }
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const yOffset = -80; 
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');

document.getElementById("nextTestimonial").addEventListener("click", () => {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
});

document.getElementById("prevTestimonial").addEventListener("click", () => {
  testimonials[currentTestimonial].classList.remove("active");
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  testimonials[currentTestimonial].classList.add("active");
});

const weatherData = {
  Goa: "31°C, Sunny ☀️",
  Manali: "15°C, Cloudy 🌥️",
  Ladakh: "5°C, Snowy ❄️"
};
document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("weatherInput").value.trim();
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.textContent = "Please enter a city name.";
    return;
  }

  const apiKey = "309c6b267d241f422746bfa010b0e512";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const weather = data.weather[0].description;
      const icon = data.weather[0].icon;

      result.innerHTML = `
        <strong>${data.name}</strong>: 
        <strong>${temp}°C</strong>, 
        ${weather}
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" 
             alt="${weather}" 
             style="vertical-align: middle; width: 50px;" />
      `;
    })
    .catch((error) => {
      result.textContent = "City not found. Please try another.";
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section?.scrollIntoView({ behavior: 'smooth' });
  });
});


document.getElementById("locationSelector").addEventListener("change", function () {
  const selectedLocation = this.value;
  const display = document.getElementById("weatherDisplay");
  if (weatherData[selectedLocation]) {
    display.textContent = `Current temperature in ${selectedLocation}: ${weatherData[selectedLocation]}`;
  } else {
    display.textContent = "";
  }
});
document.getElementById("typeFilter").addEventListener("change", function () {
  const selected = this.value;
  const cards = document.querySelectorAll(".tour-card");

  cards.forEach(card => {
    if (selected === "all" || card.dataset.type === selected) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
function convertCurrency() {
  const amount = document.getElementById("amountINR").value;
  const currency = document.getElementById("currencySelect").value;
  const result = document.getElementById("conversionResult");

  if (!amount || amount <= 0) {
    result.innerText = "Please enter a valid amount.";
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/INR`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[currency];
      const converted = (amount * rate).toFixed(2);
      result.innerText = `${amount} INR = ${converted} ${currency}`;
    })
    .catch(() => {
      result.innerText = "Currency conversion failed. Try again later.";
    });
}

function getTime() {
  const city = document.getElementById("timeCity").value.trim();
  fetch(`https://worldtimeapi.org/api/timezone`)
    .then(res => res.json())
    .then(timezones => {
      const match = timezones.find(tz => tz.toLowerCase().includes(city.toLowerCase()));
      if (match) {
        fetch(`https://worldtimeapi.org/api/timezone/${match}`)
          .then(res => res.json())
          .then(data => {
            const time = new Date(data.datetime).toLocaleTimeString();
            document.getElementById("timeResult").textContent = `Local time in ${city}: ${time}`;
          });
      } else {
        document.getElementById("timeResult").textContent = "City not found!";
      }
    });
}
document.getElementById('trackFlight').addEventListener('click', () => {
  const flightNum = document.getElementById('flightNumber').value.trim();
  const resultDiv = document.getElementById('flightResult');
  if (!flightNum) return resultDiv.textContent = 'Enter a flight number.';

  const apiKey = '1c49ca544bc41c3ea36540bd80095465';
  const url = `https://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${encodeURIComponent(flightNum)}&limit=1`;

  resultDiv.textContent = 'Fetching…';
  fetch(url)
  `https://api.aviationstack.com/v1/flights?access_key=${apiKeyFlight}&flight_iata=${encodeURIComponent(flightNum)}&limit=1`;

    then(res => res.json())
    .then(json => {
      if (!json.data || !json.data.length) {
        resultDiv.textContent = 'No data found.';
        return;
      }
      const f = json.data[0];
      resultDiv.innerHTML = `
        <strong>${f.airline.name} ${f.flight.iata}</strong><br>
        From: ${f.departure.airport} (${f.departure.iata})<br>
        To: ${f.arrival.airport} (${f.arrival.iata})<br>
        Status: ${f.flight_status}<br>
        Departure: ${new Date(f.departure.estimated).toLocaleString()}<br>
        Arrival: ${new Date(f.arrival.estimated).toLocaleString()}
      `;
    })
    .catch(err => resultDiv.textContent = 'Error retrieving data.');
});
fetch(url)
  .then(res => res.json())
  .then(json => {
    console.log(json); // <-- See actual data
    if (!json.data || !json.data.length) {
      resultDiv.textContent = "No data found or invalid flight number.";
      return;
    }
    const f = json.data[0];
    resultDiv.innerHTML = `
      <strong>${f.airline.name} ${f.flight.iata}</strong><br>
      From: ${f.departure.airport} → To: ${f.arrival.airport}<br>
      Status: ${f.flight_status}`;
  })
  .catch(() => {
    resultDiv.textContent = "Error fetching flight data.";
  });
