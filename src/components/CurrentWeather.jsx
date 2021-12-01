import './CurrentWeather.scss';
import WeatherIcon from 'react-open-weather-icons'

function CurrentWeather(props) {

    const { weatherData } = props;

    console.log(weatherData)

    const getDayName = (day) => {
        console.log(day)
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(day * 1000);
        var dayName = days[d.getDay()];
        return dayName;
    }
    
    return (
    
    <div className="CurrentWeather">
        <div className="current-weather-info-container">
            <div className="current-weather-icon-wrap">
                <div className="current-weather-icon-container">
                    <WeatherIcon name={weatherData.weather[0].icon} className="current-weather-icon" />
                    </div>
                        <div className="current-weather-icon-txt-wrap">
                            <h2>Today</h2>
                        <span>{getDayName(weatherData.dt)}</span>
                    </div>

                </div>
                    <h1 className="current-temp-txt">{Math.trunc(weatherData.main.temp)}°C</h1>
                    <h3>{weatherData.name}, {weatherData.sys.country}</h3>
                    <span>Feels like {Math.trunc(weatherData.main.feels_like)}</span> 
                </div>
            </div>   
        );
    }
    
    export default CurrentWeather;
