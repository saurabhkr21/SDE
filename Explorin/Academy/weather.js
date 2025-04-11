const apiKey = 'CJBGBZQKNXE5GZ3CP24AALB67'; // Replace with your OpenWeather API key
// const api_url="https://weather.visualcrossing.com/VisualCrossingWebServices/units=metric&q=bangalore";
const api_url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key="+apiKey;

fetch(api_url)
.then(response => response.json())
.then(data => {
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.name;
});