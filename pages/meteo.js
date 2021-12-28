import { useEffect, useState } from "react";
import Day from "../components/Day";
import Main from '../components/Main';
import styles from '../styles/Meteo.module.css';
import { dateFormat, iconWeather } from '../src/utils';
import Hightlights from "../components/Hightlights";

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
const urlApi = "https://www.metaweather.com/api/location/";

const Meteo = () => {
    // const [location, setLocation] = useState({lat: 48.856930, lon: 2.341200});
    const [city,setCity] = useState("Paris");
    const [data,setData] = useState([{}]);
    const showPosition = (position) => {
        setLocation(
            {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            }
        ) 
    }

    function showError(error) {
        console.error(error);
    }

    //Get the user current location
    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition, showError);
    //     } else {
    //         console.error("The Browser Does not Support Geolocation")
    //     }
    // },[setLocation])

    //woeid of Paris
    const woeid = 615702;

    useEffect(() => {
         fetch(`${corsAnywhere}${urlApi}/${woeid}`)
        .then((response) => response.json())
        .then(dataWeather => {
            setData(dataWeather.consolidated_weather);
            setCity(dataWeather.title);
            console.log(dataWeather);
        })
        .catch(error => console.log(error))
    },[setData]);


    const semaine = data.map(({id,weather_state_abbr,applicable_date,max_temp,min_temp}) => {
        if(data[0].id === id){
            return null;
        }
        return (
            <Day
                key={id}
                date={applicable_date}
                icon={iconWeather[weather_state_abbr]}
                maxTemp={max_temp}
                minTemp={min_temp}
                tempUnit={"C"}
            />
        )
    });


    const {
        the_temp = 0,
        weather_state_abbr = "",
        applicable_date = "",
        weather_state_name = "",
        wind_speed = 0,
        wind_direction = 0,
        wind_direction_compass = "" ,
        humidity = 0,
        visibility = 0,
        air_pressure = 0
    } = data[0];



  
    return( 
        <div className={styles.meteo}>
            <Main 
                temperature={the_temp} 
                image={iconWeather[weather_state_abbr]} 
                date={applicable_date} 
                location={city}
                temperatureUnit = {"°C"}
                weatherState={weather_state_name}
            />
            <div className={styles.details}>
                <div className={styles.detailsContainer}>
                    <div className={styles.semaines}>
                        {semaine}
                    </div> 
                    <Hightlights
                        speed={wind_speed}
                        directionCompass={wind_direction_compass}
                        humidity={humidity}
                        visibility={visibility}
                        airPressure={air_pressure}
                    />
                </div>
                <p className={styles.footer}>created by <a href="https://github.com/wendykrwn" target="_blank" rel="noopener noreferrer">wendykrwn</a> - devChallenge.io</p>
            </div>
        </div>
    );
}
export default Meteo;