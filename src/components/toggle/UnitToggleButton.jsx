import { useUnit } from '../../hooks';

const UnitToggleButton = () => {
  const { setTempratureUnit, isCelsius } = useUnit();

  return (
    <div className="flex absolute top-10 right-5 items-center justify-center">
      <span className="me-3 text-[14px] font-bold">°F</span>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          data-testid="test-unit-toggle"
          type="checkbox"
          checked={isCelsius}
          className="sr-only peer"
          onChange={e => setTempratureUnit(e.target.checked)}
        />
        <div className="w-11 h-6 bg-sky-300 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-sky-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-sky-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-sky-300 peer-checked:bg-sky-300"></div>
        <p className="ms-3 text-[14px] font-bold">°C</p>
      </label>
    </div>
  );
};

export default UnitToggleButton;
