//import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"

import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox ( {info} ) {

    const INIT_URL = "https://media.istockphoto.com/id/1160567385/photo/summer-heat.webp?b=1&s=170667a&w=0&k=20&c=zJKP_Z2B0EaG6C3XxTMzRXjj_04SoMszPa1eQzjE7C4=";

    let HOT_URL = "https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.webp?b=1&s=170667a&w=0&k=20&c=8Q7_a7VqFHYU2vtvTzm1f14ADvWnBYJYrkMplD-IDMU=";

    let COLD_URL = "https://media.istockphoto.com/id/1067764520/photo/thermometer-in-the-snow.webp?b=1&s=170667a&w=0&k=20&c=vLS2YVKy59etAc4kn4wu_6rFsBdxyIhbH92R_WO4m3I="

    let RAIN_URL = "https://media.istockphoto.com/id/1172325528/photo/prairie-storm-saskatchewan-canada.webp?b=1&s=170667a&w=0&k=20&c=YLHQix5oRv7AIFmZCs967XKS7_8AZ_cCf0JHOkKNl0o="


    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
        
        <div className="cardContainer">

            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 200 }}
        image= { info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city} { info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>The weather can be described as <i><b>{info.weather}</b></i> and feels like {info.feelsLike}&deg;C  </p>

        </Typography>
        </CardContent>
    
    </Card>
    </div>
        </div>
    )
}