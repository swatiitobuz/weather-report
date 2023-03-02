async function weatherReport(){
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=London&aqi=no");
    return await response.json();
    // console.log(result);
    // const {name} = result;
    // console.log(name);
}
let result = weatherReport()
.then((res) => {
    console.log(res);
    console.log(res.location);
    document.getElementById("city").innerHTML = res.location.name;
    document.getElementById("temparature").innerHTML = res.current.temp_f + "\u00B0";
    document.getElementById("feels-like").innerHTML = "feels  " + res.current.feelslike_f + "\u00B0";
})

