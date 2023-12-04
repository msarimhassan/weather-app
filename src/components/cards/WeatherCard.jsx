import {
  getDate,
  getFahrenheitTemprature,
  showErrorMessage
} from '../../utils';
import { useUnit } from '../../hooks';

const WeatherCard = ({ searchFunction, city, setCity, currentForecast }) => {
  const { isCelsius } = useUnit();

  return (
    <div className="border w-[300px]  md:w-[400px] h-[400px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center">
      {/* Search bar */}

      <div className="flex items-center justify-center">
        <input
          data-testid="input-city"
          value={city}
          onChange={e => setCity(e.target.value)}
          onKeyDown={e => {
            if (e.key == 'Enter') {
              if (city == '') return showErrorMessage('Enter valid city name');
              searchFunction();
            }
          }}
          placeholder="City Name"
          className="border ms-2 rounded ps-2 outline-none"
          type="text"
        />
        <button
          data-testid="test-search-button"
          className="bg-white rounded-full shadow-lg ms-1 p-2"
          onClick={() => {
            if (city == '') return showErrorMessage('Enter valid city name');
            searchFunction();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 30 30"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
        </button>
      </div>

      {/* Date  */}
      <div
        data-testid="test-weather-info"
        className="flex justify-center items-center mt-[30px]"
      >
        <p className="text-grey">
          {currentForecast?.cityName && currentForecast?.cityName + ' - '}
          {getDate()}
        </p>
      </div>

      {/* Temprature and Icon */}

      <div className="flex justify-center items-center">
        <div>
          {currentForecast?.weather?.icon && (
            <img
              src={`https://openweathermap.org/img/wn/${currentForecast?.weather?.icon}@2x.png`}
            />
          )}
        </div>
        {currentForecast?.temperature && (
          <p className="text-[40px] font-bold">
            {isCelsius
              ? `${Math.round(currentForecast?.temperature)} °C`
              : getFahrenheitTemprature(
                  Math.round(currentForecast?.temperature)
                )}
          </p>
        )}
      </div>

      {/* Temprature Title */}
      <div className="mt-[1px] flex justify-center items-center">
        <p className="text-[40px] font-bold">
          {currentForecast?.weather?.main}
        </p>
      </div>

      {/* Temprature Description */}
      <div className="flex justify-center items-center">
        <div className="m-5 flex flex-col justify-center items-center">
          <p className="text-grey text-[20px]">Humidity</p>
          <p>{currentForecast?.humidity}</p>
        </div>
        <div className="m-5 flex flex-col justify-center items-center">
          <p className="text-grey  text-[20px]">Wind Speed</p>
          {currentForecast?.windSpeed && (
            <p>{currentForecast?.windSpeed} km/h</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
