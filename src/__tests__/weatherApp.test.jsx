import WeatherApp from '../WeatherApp';
import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('WeatherApp', () => {
  it('Renders correctly', () => {
    const { getByTestId } = render(<WeatherApp />);
    const app = getByTestId('weather-app');
    expect(app).toBeInTheDocument();
  });

  it('City input', async () => {
    const { getByTestId } = render(<WeatherApp />);
    // check the change function is working correctly
    fireEvent.change(getByTestId('input-city'), {
      target: { value: 'London' }
    });
    const inputElement = screen.getByTestId('input-city');
    expect(inputElement.value).toMatch('London');
  });

  it('Toggles unit between Celsius and Fahrenheit', async () => {
    const { getByTestId } = render(<WeatherApp />);

    // Check if the default unit is rendered
    expect(screen.getByText('°C')).toBeInTheDocument();

    // Toggle the unit
    fireEvent.click(getByTestId('test-unit-toggle'));

    // Check if the unit is toggled to Fahrenheit
    expect(screen.getByText('°F')).toBeInTheDocument();
  });

  it('Displays weather details for a searched city', async () => {
    const { getByTestId } = render(<WeatherApp />);

    // Search for a city
    fireEvent.change(getByTestId('input-city'), {
      target: { value: 'London' }
    });

    // click on search button
    fireEvent.click(getByTestId('test-search-button'));

    // Expect the weather details to be displayed
    const weatherElement = await screen.getByTestId('test-weather-info');

    expect(weatherElement).toBeInTheDocument();
  });
});
