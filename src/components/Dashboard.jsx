import './Dashboard.scss';
import { useState, useEffect } from 'react';
import WeatherBoard from './WeatherBoard.jsx';
import Sidebar from './SideBar.jsx';
import axios from 'axios';
import config from '../config/config.json';
import loadingAnimation from './images/loadingAnimation.svg';
import FeatherIcon from 'feather-icons-react';

function Dashboard(props) {
  const {
    user,
    signOut,
  } = props;

  
const city = [
  {name: "Toronto", phoneCode: "416", countryCode: "+1"},
  {name: "Manhattan", phoneCode: "917", countryCode: "1"},
  {name: "Rio de Janeiro", phoneCode: "55", countryCode: "+55"},
  {name: "Montevideo", phoneCode: "598", countryCode: "UY"},
  {name: "Paris", phoneCode: "33", countryCode: "+33"},
  {name: "Berlin", phoneCode: "030", countryCode: "+49"},
  {name: "Rome", phoneCode: "39", countryCode: "+39"},
  {name: "Cairo", phoneCode: "2", countryCode: "+20"},
  {name: "Seoul", phoneCode: "82", countryCode: "+82"}, 
  {name: "Shanghai", phoneCode: "86", countryCode: "+86"},
  {name: "Tokyo", phoneCode: "3", countryCode: "+81"}
];

  const [pageLoading, setPageLoading] = useState(false);

  const [weatherData, setWeatherData] = useState({
    name: "",
    weather: [
      {
        icon: "04n"
      },
    ],
    main: {
      temp: 0,
      feels_like: 0
    },
    sys: {
      country: ""
    },
    coord: {
      lat: 49.50509,
      lon: 8.49734
    }
  });


  const [currentForcast, setCurrentForcast] = useState(
      {
        temp: 0,
        feels_like: 0,
        
        weather: [
          {
            icon: "04n",
  
          },
        ],
      }
  );

  const [dailyForcast, setDailyForcast] = useState(
    [
      {
        day: "Sunday",
        rain: 0,
        weather: [
          {
            icon: "04n"
          },
        ],
        temp: {
          min: 0,
          max: 0
        },
      },
      {
        day: "Monday",
        weather: [
          {
            icon: "04n"
          },
        ],
        temp: {
          min: 0,
          max: 0
        },
      }
    ]
  );


  const [hourlyForcast, setHourlyForcast] = useState(
    [
      {
        time: 0,
        rain: 0,
        weather: [
          {
            icon: "04n"
          },
        ],
        temp: 0
      },
    ]
  );


  const [citySelected, setCitySelected] = useState(
    {name: "Toronto", phoneCode: "416", countryCode: "+1"}
  )


  const getData = async() => {
    setPageLoading(true);

    let response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${citySelected.name},${citySelected.phoneCode},${citySelected.countryCode}&units=metric&appid=${config.OPEN_WEATHER_APP_KEY}`);
    let forcastsResponse = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=metric&exclude=minutely&appid=${config.OPEN_WEATHER_APP_KEY}`);

    setWeatherData(response.data)
    setCurrentForcast(forcastsResponse.data.current)
    setDailyForcast(forcastsResponse.data.daily)
    setHourlyForcast(forcastsResponse.data.hourly)
    setPageLoading(false);
  }

  useEffect( () => {
    
    (async function () {
      try {
        await getData();
      } catch (err) {
        console.log(err)
      }
    })
    ()

  }, [citySelected]);


  return (
  <div className="Dashboard">
    <div className="WeatherBoard">
        
            <div className="navbar">
              <div class="WebName"><p>City Weather</p></div>
              <div className="logout-btn-container">
                  <span>{user.displayName}</span>
                  <FeatherIcon className="logout-icon" icon="log-out" size="24" onClick={signOut} />
              </div>
            </div>

            <div className="CitiesBar">
                <div className="city-btn toronto-btn" onClick={async ()=>{setCitySelected(city[0]);}}><span>Toronto</span></div>
                <div className="city-btn manhattan-btn" onClick={async ()=>{setCitySelected(city[1]);}}><span>Manhattan</span></div>
                <div className="city-btn rio-btn" onClick={async ()=>{setCitySelected(city[2]);}}><span>Rio de Janeiro</span></div>
                <div className="city-btn montevideo-btn" onClick={async ()=>{setCitySelected(city[3]);}}><span>Montevideo</span></div>
                <div className="city-btn paris-btn" onClick={async ()=>{setCitySelected(city[4]);}}><span>Paris</span></div>
                <div className="city-btn berlin-btn" onClick={async ()=>{setCitySelected(city[5]);}}><span>Berlin</span></div>
                <div className="city-btn rome-btn" onClick={async ()=>{setCitySelected(city[6]);}}><span>Rome</span></div>
                <div className="city-btn cairo-btn" onClick={async ()=>{setCitySelected(city[7]);}}><span>Cairo</span></div>
                <div className="city-btn seoul-btn" onClick={async ()=>{setCitySelected(city[8]);}}><span>Seoul</span></div>
                <div className="city-btn shanghai-btn" onClick={async ()=>{setCitySelected(city[9]);}}><span>Shanghai</span></div>
                <div className="city-btn tokyo-btn" onClick={async ()=>{setCitySelected(city[10]);}}><span>Tokyo</span></div>
            </div>

          { pageLoading ?
           <div className="SideBar"><img style={{ width: '100px' }} src={loadingAnimation} /></div>
           :
          < Sidebar weatherData={weatherData} />
          }
          
          { pageLoading ?
           <div className="loader">  <img style={{ width: '100px' }} src={loadingAnimation} /> </div>
           :
           <WeatherBoard citySelected={citySelected.name} currentForcast={currentForcast} dailyForcast={dailyForcast} hourlyForcast={hourlyForcast} mapCoordinates={weatherData.coord} />
          }

        </div>
  </div>
  );
}
  
export default Dashboard;
