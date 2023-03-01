async function weatherReport(){
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=London&aqi=no");
    const result = await response.json();
    console.log(result);
    const {name} = result;
    console.log(name);
}
weatherReport();

