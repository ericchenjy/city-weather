import './TimeWeatherForcasts.scss';
import WeatherIcon from 'react-open-weather-icons'
import RainDropIcon from './images/raindrop.svg';

function TimeWeatherForcasts(props) {

    const { dailyForcast } = props;

    console.log(dailyForcast)


    const getDayName = (day) => {
        console.log(day)
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date(day * 1000);
        var dayName = days[d.getDay()];
        return dayName;
    }


  return (
    <div className="TimeWeatherForcasts">
        
     <table className="table daily-weather-tbody-default">
       
                <tbody>

                    {dailyForcast.map((weather, index) => {
                        return (
                        <tr key={index}>
                            <td><strong className="td-1">{getDayName(weather.dt)}</strong></td>
                            <td className="rain-drop-container"><img src={RainDropIcon} width="15px" height="15px" style={{marginRight: "10px"}}  />{weather.rain ? Math.trunc(weather.rain) : 0}%</td>
                            <td><WeatherIcon name={weather.weather[0].icon} className="daily-weather-icon" /></td>
                            <td style={{color: '#000000', fontWeight: 600}} className="min-temp">{Math.trunc(weather.temp.min)}°C</td>
                            <td  style={{color:'#100D3B', fontWeight: 600}} className="max-temp">{Math.trunc(weather.temp.max)}°C</td>
                        </tr>
                        )
                    })}

                </tbody>

        </table>

    </div>
  );
}

export default TimeWeatherForcasts;
