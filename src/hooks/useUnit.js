import { useContext } from 'react';

import { UnitContext } from '../context';

const useUnit = () => {
  const { isCelsius, setIsCelsius } = useContext(UnitContext);

  const setTempratureUnit = unit => {
    if (typeof setIsCelsius === 'undefined') return;
    setIsCelsius(unit);
  };

  return { isCelsius, setTempratureUnit };
};

export default useUnit;
