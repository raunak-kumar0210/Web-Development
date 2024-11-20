import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "0cfa5425eb861fd5231923560f578508";
    
    let getWeatherInfo = async () => {
        
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            setError("");
            return result;
        
        } catch (error) {
            throw error;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };
    
    let handleSubmit =async (event) => {
       try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
       } catch (error) {
        setError("City Not Found!");
       }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="searchBox">  
                <TextField 
                    id="City" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city}
                    onChange={handleChange}
                    style={{ height: "40px", width: "400px" }} 
                />
                &nbsp; &nbsp;&nbsp; &nbsp;
                <Button variant="contained" type="submit">Search</Button>   
            </form>
            {error && (
                <p style={{ color: "red", marginTop: "10px", textAlign:"center" }}>
                    {error}
                </p>
            )}
        </div>
        
    )
}