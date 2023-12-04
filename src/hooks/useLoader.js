import { useContext } from 'react';
import { LoaderContext } from '../context';

const useLoader = () => {
  const { setIsLoading } = useContext(LoaderContext);

  const setLoader = status => {
    if (typeof setIsLoading === 'undefined') return;
    setIsLoading(status);
  };

  return { setLoader };
};

export default useLoader;
