
import './WeatherBoard.scss';

import TimeWeatherForcasts from  './TimeWeatherForcasts.jsx'
import HourlyWeatherForcast from './HourlyWeatherForcast.jsx'
import { useState } from 'react';
import WeatherIcon from 'react-open-weather-icons'
import WeatherMap from './WeatherMap.jsx';

function WeatherBoard(props) {


  const { citySelected, currentForcast, dailyForcast, hourlyForcast, mapCoordinates } = props;

  const [showDaily, setShowDaily] = useState(true);
  const [showHourly, setShowHourly] = useState(false);

  const [defaultBtnClass, setDefaultBtn] = useState('toggle-forcast-btn');
  const [activeBtnClass, setActiveClassBtn] = useState('toggle-forcast-btn active-toggle-btn');

  
  return (
    <div className="">
   
       <div className="current-weather-mobile-container">
         <div style={{display: 'flex', flexFlow: 'column'}}>
         <WeatherIcon name={currentForcast.weather[0].icon} className="current-weather-icon" />
          <small><strong>{citySelected}</strong></small>
         </div>
         
          <div>
            <h1 className="current-temp-mobile">{Math.trunc(currentForcast.temp)}°C</h1>
            <span>Feels like {Math.trunc(currentForcast.feels_like)}°C</span>
          
          </div>
       </div>

    <div className="toggle-forcast-btn-container">
      <button className={showDaily ? activeBtnClass : defaultBtnClass} onClick={ () => { setShowDaily(true); setShowHourly(false);  }  }>Daily</button>
      <button className={showHourly ? activeBtnClass : defaultBtnClass} onClick={ () => { setShowHourly(true); setShowDaily(false); }  }>Hourly</button>
    </div>

    { showDaily ?
       <TimeWeatherForcasts dailyForcast={dailyForcast} />
    :
      <HourlyWeatherForcast hourlyForcast={hourlyForcast} />
    }
   
    <div className="WeatherMap">
      <WeatherMap  mapCoordinates={mapCoordinates} />
    </div>
  
    </div>
  );
}

export default WeatherBoard;
