import TextField from '@mui/material/TextField'; //from material ui 
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
     let [city, setCity] = useState(""); 
    let [error , setError] = useState(false); 

const API_URL = import.meta.env.VITE_API_URL; 

const API_KEY = import.meta.env.VITE_API_KEY; 


let getWeatherInfo = async ()=>{
  try {
    let res =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`); 
  let jsonRes = await res.json(); 
  console.log(jsonRes); 
  let result = {
    city: city, 
    temp : jsonRes.main.temp,
    tempMin: jsonRes.main.temp_min,
    tempMax : jsonRes.main.temp_max,
    humidity : jsonRes.main.humidity,
    feelsLike : jsonRes.main.feels_like,  
    weather : jsonRes.weather[0].description,

  };

  console.log(result);
  return result;
    
  }catch(err){
    throw err;
  }
   
}; 

   
   let handleChange = (event)=>{
    setCity(event.target.value);
   }; 

   let handleSubmit = async  (event)=>{
    try{
         event.preventDefault(); 
    console.log(city); //state var value 
    setCity(""); //reset city after submit 
  let newInfo = await getWeatherInfo();
  updateInfo(newInfo);
    }catch(err){
      setError(true); 
    }
    
   }

    return(
        <div className='SearchBox'>
       {/* <h1>Search for weather </h1>  */}
        <form onSubmit={handleSubmit}>
         <TextField id="city"
          label="City name" value={city}
           variant="outlined" required 
        onChange={handleChange}
        />
          <br /> <br /> <br />
        <Button variant="contained"  type='submit'>
        Search
      </Button>
       
       {error &&  <p style={{color: "red"}}>No such place in API </p>}
       
        </form>
     </div>
    );
}