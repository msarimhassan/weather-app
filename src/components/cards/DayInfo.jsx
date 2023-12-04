import { useUnit } from '../../hooks';
import { getFahrenheitTemprature, getDate } from '../../utils';

const DayInfo = ({ data, date }) => {
  const { isCelsius } = useUnit();

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <p className="font-bold">{getDate(date)}</p>
      <div className="w-[80px] h-[80px]">
        <img
          data-testid="weather-icon"
          src={`https://openweathermap.org/img/wn/${data?.weather?.icon}@2x.png`}
        />
      </div>
      <p>{data?.weather?.main}</p>
      <p data-testid="temperature">
        {isCelsius
          ? `${Math.round(data?.temperature)} °C`
          : getFahrenheitTemprature(Math.round(data?.temperature))}
      </p>
    </div>
  );
};

export default DayInfo;
