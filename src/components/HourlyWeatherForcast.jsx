import './TimeWeatherForcasts.scss';
import WeatherIcon from 'react-open-weather-icons'
import RainDropIcon from './images/raindrop.svg';

function HourlyWeatherForcast(props) {

    const { hourlyForcast } = props;

    function sec2time(given_seconds) {
        var dt = new Date(given_seconds * 1000);
        var hours = dt.getHours() ; // gives the value in 24 hours format
        var AmOrPm = hours >= 12 ? 'pm' : 'am';
        hours = (hours % 12) || 12;
        var finalTime = hours + " " + AmOrPm; 
        return finalTime
    }

  return (
    <div className="TimeWeatherForcasts">
     <table className="table">
                <tbody>
                    {hourlyForcast.map((weather, index) => {
                        return (
                        <tr key={index}>
                            <td><strong className="td-1">{sec2time(weather.dt)}</strong></td>
                            <td class="rain-drop-container"><img src={RainDropIcon} width="15px" height="15px" style={{marginRight: "10px"}}  />{weather.rain ? Math.trunc(weather.rain['1h']) : 0}%</td>
                            <td><WeatherIcon name={weather.weather[0].icon} className="daily-weather-icon" /></td>
                            <td style={{color:'#100D3B', fontWeight: 700}}>{Math.trunc(weather.temp)}°C</td>
                        </tr>
                        )
                    })}
                </tbody>
          </table>
 
    </div>
  );
}

export default HourlyWeatherForcast;
