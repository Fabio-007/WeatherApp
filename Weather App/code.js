const apikey = "";


const weatherDataElement = document.getElementById("weather-data");
const cityInputElement = document.getElementById("city-input");
const formElement = document.querySelector("form");



formElement.addEventListener("submit", (event) =>{

  event.preventDefault();

  const cityValue = cityInputElement . value ;


  getWeatherData(cityValue);

});




async function getWeatherData(cityValue){

        try{

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
            
            if(!response.ok){
                throw new Error("Network response was not ok.  ") ;
            }  
            
            const detailsElement = document.querySelector(".details");

            detailsElement.style.display = "flex";
            detailsElement.style.justifyContent = "center";
            detailsElement.style.alignItems = "center";
            detailsElement.style.flexWrap = "wrap";
            


              const data = await response.json();

            console.log(data);




              const temp = Math.round(data.main.temp);

              const description = data.weather[0] . description ;




              const icon = data.weather[0].icon;



              const details = [
                `Feels like: ${Math.round(data.main.feels_like)} ℃`,
                `Humidity: ${data.main.humidity} %`,
                `Wind Speed: ${data.wind.speed } m/s`
              ];


                document.getElementById("iconi").innerHTML = ` <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather">`;
                weatherDataElement.querySelector(".temperature").innerHTML = `${temp}℃`;
                weatherDataElement.querySelector(".description").innerHTML = `${description}`;
                document.getElementById("1").innerHTML = details[0];
                document.getElementById("2").innerHTML = details[1];
                document.getElementById("3").innerHTML = details[2];

                

        }

        catch(error){
            console.error('Fetch error:', error);
            alert("City not found! Please try another city. ");
        }




}
