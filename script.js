document.addEventListener("DOMContentLoaded", function() {
    // Here the code for date and time.
    function updateTime() {
        const timeElement = document.querySelector(".time");
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');

        timeElement.textContent = `Time: ${hours}:${minutes}`;
    }

    setInterval(updateTime, 1000);
    updateTime();

    function updateDate() {
        const dateElement = document.querySelector(".Date");
        const now = new Date();

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString(undefined, options);

        dateElement.textContent = `Date: ${formattedDate}`;
    }

    updateDate();

    // Here the code for weather updation.

    const apiKey = "a21dda806d6772bf40cb9185cbf6bb29";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

    const searchBox = document.querySelector(".loc-name");
    const searchBtn = document.querySelector(".enter-loc button");
    const weatherInfo = document.querySelector(".weather-info");
    const cardSize = document.querySelector(".weather-card");

    async function checkWeather(location) {
        try {
            const response = await fetch(apiUrl + location + `&appid=${apiKey}`);
            const data = await response.json();

            console.log(data);

            document.querySelector(".update-loc").innerHTML = data.name;
            document.querySelector(".update-loc1").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".hum").innerHTML = "Humidity: " + data.main.humidity + "%";
            document.querySelector(".visi").innerHTML = "Visibility: " + (data.visibility / 1000).toFixed(2) + " km";
            document.querySelector(".wind").innerHTML = "Wind speed: " + data.wind.speed + " km/h";
            
            // Display the Result. 
            weatherInfo.style.display = 'block';


            //For Card sizeing.
            cardSize.style.height = "80%";

            //For clear the input field.
            searchBox.value= '';


        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    searchBtn.addEventListener("click", () => { 
        checkWeather(searchBox.value);
    });

    

    // Add event listener to the input for the "Enter" key
    searchBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkWeather(searchBox.value);
           
        }
    });
    
    
    checkWeather("");
});



//weather-nature : this is a nautre of cloud 
//cloudyimg : this is a image of cloud nature
