var urlapi = "";
const temp = document.getElementById("temparature");
const feelsLike = document.getElementById("feels-like");
const image = document.getElementById("weather-icon");
const setcity= document.getElementById("setCity");
const listItems = document.querySelector("ul");
async function weatherIcon(){
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
    urlapi = "http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=" + value + "&aqi=no";
    console.log(urlapi);
    let res=weatherIcon()
    .then((response)=>{
        console.log(response);
        document.getElementById("temparature").innerHTML = response.current.temp_f + "\u00B0";
        document.getElementById("feels-like").innerHTML = "feels  " + response.current.feelslike_f + "\u00B0";
        //  createIcon('images/fog.png')
        console.log(response.current.condition.text);
        let x = response.current.condition.text;
        if(x == "Partly cloudy"){
            createIcon('./images/partly-cloudy.png');
        }
        else if(x == "Mist"){
            createIcon('./images/fog.png');
        }
        else if(x == "Stormy"){
            createIcon('images/stormy.png');
        }
        else if(x == "Rainy"){
            createIcon('./images/rainy.png');
        }
        else if(x == "Sprite"){
            createIcon('./images/sprite.png');
        }
        else if(x == "Overcast"){
            createIcon('./images/outcast.png');
        }
        else if(x == 'Sunny'){
            createIcon('./images/sunny.png');
        }
        else{
            createIcon("./images/sunny.png")
        }
    })
}
document.addEventListener('keyup',(eve)=>{
    if(eve.key==="Enter"){
        console.log(eve);
        getData();
    }
})
function dropDown(){
    listItems.classList.toggle("dropdown-toggle");
}

var items = document.querySelectorAll("#list li");
for(let i = 0;i < items.length;i++){
    items[i].onclick = function(){
        document.getElementById("setCity").value = this.innerHTML;
        getData();
        dropDown();
    }
}
window.addEventListener("click", (e) => {
    if(e.target === setcity ){
        listItems.classList.remove("dropdown-toggle");
    }
    else
    listItems.classList.add("dropdown-toggle");
})