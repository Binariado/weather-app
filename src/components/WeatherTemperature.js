import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons={
  sunny:'day-sunny',
  fog:'night-fog'
}

const getWeatherIcons = weatherState =>{
  const icon=icons[weatherState];
  if(icon)
    return (
      <WeatherIcons name={icon} size='2x' />
    );
  else
    return (
      <WeatherIcons name={'day-sunny'} size='2x' />
    );
}

const WeatherTemperature = ({temperature, weatherState}) =>{

  return (
    <div>
      {
        getWeatherIcons(weatherState)
      }
      <span>{`${temperature} c`}</span>
    </div>
  );
}

export default WeatherTemperature;