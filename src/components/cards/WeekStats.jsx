import DayInfo from './DayInfo';

const WeekStats = ({ forecastData }) => {
  return (
    <>
      {forecastData && (
        <div className="w-[300px] md:w-fit flex flex-col md:flex-row bg-white shadow-lg rounded-lg md:divide-x p-5 mt-[30px]">
          {Object.keys(forecastData)?.map((key, index) => (
            <DayInfo key={index} date={key} data={forecastData[key]} />
          ))}
        </div>
      )}
    </>
  );
};

export default WeekStats;
