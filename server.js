import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import getWeather from "./weather.js";
import getGeo from "./geo.js";
import getHour from "./hourly.js";


dotenv.config();
const app = express()
app.use(cors())
app.use(express.json())

app.get("/liveweather",(req,res)=>{
    const { lat, lon } = req.query;

    getWeather(lat,lon)
    .then((data)=>{
        res.send(data)
        console.log(data)
    })
    .catch((err) => {
        res.send(err)
    })
})

app.get("/liveweather1",(req,res)=>{
    const { lat, lon } = req.query;

    getHour(lat,lon)
    .then((data)=>{
        res.send(data)
        console.log(data)
    })
    .catch((err) => {
        res.send(err)
    })
})

app.get("/weather",(req,res)=>{

    if(!req.query.address){
        res.send({error:'Address not found'})
    }

    getGeo(req.query.address)
    .then((data) => {
        return getWeather(data.lat,data.lon)
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((err) => {
        res.send(err)
    })

})

app.listen(5000,()=>console.log('server is on port 5000'));