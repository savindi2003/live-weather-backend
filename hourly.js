import axios from "axios";



const getHour = (lat, lon) => {
    return new Promise((resolve, reject) => {

        const apikey = "APIKEY"
        const uri = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + apikey;

        axios.get(uri)
            .then(function (response) {
                resolve({
                    main: response.data.weather[0].main,
                    description: response.data.weather[0].description,

                    temp: response.data.main.temp,
                    time:response.data.dt_txt,


                })
            })
            .catch(function (error){
                reject({error:'Unable to find the location , Please try anther location'})

            });


    });
}

export default getHour;
