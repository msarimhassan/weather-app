import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UnitContext, LoaderContext } from './context';
import WeatherApp from './WeatherApp';
import { Loader } from './components';

export default function App() {
  const [isCelsius, setIsCelsius] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoaderContext.Provider value={{ setIsLoading }}>
      <UnitContext.Provider value={{ isCelsius, setIsCelsius }}>
        <ToastContainer position="top-right" />
        <Loader visible={isLoading} />
        <WeatherApp />
      </UnitContext.Provider>
    </LoaderContext.Provider>
  );
}
