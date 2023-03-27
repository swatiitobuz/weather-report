let urlapi = "";
const temp = document.getElementById("temparature");
const feelsLike = document.getElementById("feels-like");
const image = document.getElementById("weather-icon");
const setcity = document.getElementById("setCity");
const listItems = document.querySelector("ul");

async function weatherIcon() {
  const response = await fetch(urlapi);
  return await response.json();
}

let createIcon = (image) => {
  let weatherIcon = document.getElementById("weatherIcon");
  while (weatherIcon.firstChild) {
    weatherIcon.removeChild(weatherIcon.firstChild);
  }

  let elem = document.createElement("img");
  elem.setAttribute("src", image);
  elem.setAttribute("alt", "Weather Icon");
  document.getElementById("weatherIcon").appendChild(elem);
};

let getData = () => {
  let value = setcity.value;
  urlapi = "http://localhost:3002/";

  let res = weatherIcon()
    .then((response) => {
      const currentLocation = response.find((data) => data.name === value);
      document.getElementById("temparature").innerHTML =
        currentLocation.tempF + "\u00B0";

      document.getElementById("feels-like").innerHTML =
        "feels  " + currentLocation.condition.feelsLikeF + "\u00B0";

      let x = currentLocation.condition.Text;
      if (x === "Partly cloudy") {
        createIcon("./images/partly-cloudy.png");
      } else if (x === "Mist") {
        createIcon("./images/fog.png");
      } else if (x === "Stormy") {
        createIcon("images/stormy.png");
      } else if (x === "Rainy") {
        createIcon("./images/clouds.png");
      } else if (x === "Sprite") {
        createIcon("./images/sun-clouds.png");
      } else if (x === "Overcast") {
        createIcon("./images/sun-clouds-rain.png");
      } else if (x === "Sunny") {
        createIcon("./images/sun.png");
      } else if (x === "Light rain") {
        createIcon("./images/rainy.png");
      } else if (x === "Clear") {
        createIcon("./images/clear-cloudy.png");
      } else if (x === "Moderate or heavy rain with thunder") {
        createIcon("./images/stormy.png");
      } else if (x === "Patchy light rain with thunder") {
        createIcon("./images/patchy.png");
      } else {
        createIcon("./images/sun.png");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    console.log(event);
    getData();
  }
});

function dropDown() {
  listItems.classList.toggle("dropdown-toggle");
}

let items = document.querySelectorAll("#list li");
for (let i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    document.getElementById("setCity").value = this.innerHTML;
    getData();
    dropDown();
  };
}

window.addEventListener("click", (e) => {
  if (e.target === setcity) {
    listItems.classList.remove("dropdown-toggle");
  } else listItems.classList.add("dropdown-toggle");
});
