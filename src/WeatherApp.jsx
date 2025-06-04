import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Delhi", 
        feelsLike: 25.84,
        temp: 25.85,
        tempMin: 25.05,
        tempMax: 25.95,
        humidity : 47,
        weather : "haze", 
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo); 
    }
    return(
        <div style = {{textAlign: "center"}}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    ); 
}