import { useState } from 'react';
import InfoBox from './InfoBox';

import SearchBox from './SearchBox';


export default function WeatherApp () {

    const [ weatherInfo,setWeatherInfo ] = useState({
        city: "Delhi",
        feelsLike: 35.04,
        humidity: 70,
        temp: 30,
        tempMax: 30,
        tempMin: 30,
        weather: "haze",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <div >
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}