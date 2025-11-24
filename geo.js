import axios from "axios";



const getGeo = (location) => {
    return new Promise((resolve, reject) => {

        const apikey = "APIKEY"
        const uri = "http://api.openweathermap.org/geo/1.0/direct?q=" + location + "&limit=1&appid=" + apikey;

        axios.get(uri)
            .then(function (response) {
                resolve({
                    name:response.data[0].name,
                    lat:response.data[0].lat,
                    lon:response.data[0].lon,
                    country:response.data[0].country
 


                })
            })
            .catch(function (error){
                reject({error:'Unable to find the location , Please try anther location'})

            });


    });
}

export default getGeo;
