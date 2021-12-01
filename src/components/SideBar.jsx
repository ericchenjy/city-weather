import './SideBar.scss';
import CurrentWeather from './CurrentWeather.jsx';

function SideBar(props) {

  const { weatherData } = props;

  return (
    <div className="SideBar">
  
      <CurrentWeather weatherData={weatherData} />

    </div>
  );
}

export default SideBar;
