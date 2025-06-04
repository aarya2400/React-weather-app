import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"; 

import AcUnitIcon from '@mui/icons-material/AcUnit';//cold
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';//rain
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){  // info is prop sent by weather app 
    const init_url =
     "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"; 

    // let info = {
    //     city : "Delhi", 
    //     feelsLike: 25.84,
    //     temp: 25.85,
    //     tempMin: 25.05,
    //     tempMax: 25.95,
    //     humidity : 47,
    //     weather : "haze", 
    // }; 

    const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";


    return (
        <div className="InfoBox">
            {/* <h1>Weather Data - {info.weather}</h1> */}
            <div className="card">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image=
        {info.humidity>80 ? RAIN_URL:( info.temp<15? COLD_URL: HOT_URL ) }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 ? <ThunderstormIcon/> : 
            info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>
          }
          
        </Typography>
        <Typography variant="body2" component={"span"}
         sx={{ color: 'text.secondary' }}>
        <p> Temperature = {info.temp}&deg;C </p>
            <p> Humidity : {info.humidity}</p>
            <p> MinTemp : {info.tempMin}&deg;C</p>
            <p> MaxTemp : {info.tempMax}&deg;C</p>
            <p>Weather can be described as <i>{info.weather} </i>
             and feels like : {info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}