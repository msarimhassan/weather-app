import { useEffect, useState } from 'react';

import { showErrorMessage } from './utils';
import { WeatherCard, WeekStats, UnitToggleButton } from './components';
import { useLoader } from './hooks';

const WeatherApp = () => {
  const { setLoader } = useLoader();
  const [city, setCity] = useState('');
  const [currentForecast, setCurrentForecast] = useState([]);
  const [forecastData, setForeCastData] = useState(null);

  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  const getCityWeather = async (latitudeIncome, longitudeIncome) => {
    const api =
      city == ''
        ? `${
            import.meta.env.VITE_WEATHER_API_BASE_URL
          }?lat=${latitudeIncome}&lon=${longitudeIncome}&appid=${
            import.meta.env.VITE_OPEN_WEATHER_API_KEY
          }&units=metric`
        : `${import.meta.env.VITE_WEATHER_API_BASE_URL}?q=${city}&appid=${
            import.meta.env.VITE_OPEN_WEATHER_API_KEY
          }&units=metric`;

    setLoader(true);
    const response = await fetch(api);
    setLoader(false);

    if (!response.ok) return showErrorMessage('City not found');

    const weatherData = await response.json();
    const dailyWeatherDetails = {};
    weatherData.list.forEach(item => {
      const date = item.dt_txt.split(' ')[0];

      if (!dailyWeatherDetails[date]) {
        dailyWeatherDetails[date] = {
          weather: item.weather.length > 0 ? { ...item.weather[0] } : null,
          temperature: item.main.temp,
          humidity: item.main.humidity,
          windSpeed: item.wind.speed,
          cityName: weatherData?.city?.name
        };
      }
    });

    const keys = Object.keys(dailyWeatherDetails);
    setCurrentForecast(dailyWeatherDetails[keys[0]]);
    setForeCastData(dailyWeatherDetails);
  };

  const getLocation = () => {
    navigator.geolocation?.getCurrentPosition(
      position => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      error => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            showErrorMessage('User denied the request for geolocation.');
            setLoader(false);
            break;
        }
      }
    );
  };

  useEffect(() => {
    getLocation();
    if (!latitude || !longitude) return;
    getCityWeather(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div
      data-testid="weather-app"
      className="pt-[80px] md:mt-[0px] flex justify-center items-center md:h-[100vh]"
    >
      <UnitToggleButton data-testid="unit-toggle" />

      <div className="flex flex-col justify-center items-center">
        <WeatherCard
          searchFunction={getCityWeather}
          city={city}
          setCity={setCity}
          currentForecast={currentForecast}
        />
        <WeekStats forecastData={forecastData} />
      </div>
    </div>
  );
};

export default WeatherApp;
