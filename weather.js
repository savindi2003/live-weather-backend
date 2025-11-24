import axios from "axios";



const getWeather = (lat, lon) => {
    return new Promise((resolve, reject) => {

        const apikey = "4e2cf1b20e230c152d8aa31b190bb0e0"
        const uri = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + apikey;

        axios.get(uri)
            .then(function (response) {
                resolve({
                    main: response.data.weather[0].main,
                    description: response.data.weather[0].description,

                    temp: response.data.main.temp,
                    humidity: response.data.main.humidity,
                    windSpeed: response.data.wind.speed,
                    clouds: response.data.clouds.all,
                    city:response.data.name,
                    country:response.data.sys.country,

                    text: `Currently in ${response.data.name} (${response.data.sys.country}), the weather is ${response.data.weather[0].description}. The temperature is around ${response.data.main.temp}°C, humidity is ${response.data.main.humidity}%, and the wind speed is ${response.data.wind.speed} m/s. Cloud coverage is about ${response.data.clouds.all}%.`

 


                })
            })
            .catch(function (error){
                reject({error:'Unable to find the location , Please try anther location'})

            });


    });
}

export default getWeather;