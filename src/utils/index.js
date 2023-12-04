import { toast } from 'react-toastify';

export const getDate = (dateToFormat = '') => {
  const options = {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  };
  const date = dateToFormat ? new Date(dateToFormat) : new Date();
  const formattedDate = date.toLocaleDateString('en-US', options);

  return formattedDate;
};

export const showErrorMessage = message => {
  toast.dismiss();
  return toast.error(message);
};

export const getFahrenheitTemprature = celsiusTemperature => {
  const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  return `${fahrenheitTemperature} °F`;
};
