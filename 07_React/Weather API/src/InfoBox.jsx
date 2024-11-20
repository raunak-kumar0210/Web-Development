import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import "./InfoBox.css";

export default function InfoBox({info}) {

    const MODERATE_URL = "https://plus.unsplash.com/premium_photo-1661934660615-4918f28476f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpbWF0ZXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1415381266596-3975189f3277?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHN1bnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1700131051396-307a36e3ef85?q=80&w=1269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <div className="card-conatiner">
            <h2>WeatherInfo -</h2>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="weather"
                    height="140"
                    image= {
                        info.humidity > 80
                            ? RAIN_URL 
                            : info.temp < 20
                            ? COLD_URL 
                            : info.temp > 30
                            ? HOT_URL
                            : MODERATE_URL 
                    }                    
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity > 80
                            ? <ThunderstormIcon /> 
                            : info.temp < 20
                            ? <AcUnitIcon />  
                            : info.temp > 30
                            ? <WbSunnyIcon />
                            : <WbTwilightIcon />
                    }     
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}&deg;C</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>
                            The weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C
                        </p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    )
}