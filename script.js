

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
