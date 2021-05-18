import React from "react";
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import '../App.css';

function Weather ({lat, long, location}) {

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '84b45247526fcace7224516a12125e01',
        lat: lat,
        lon: long,
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });

      return (
        <>  
       

       

        <div className="ReactWeather">
        <ReactWeather 
          className="weather" 
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel={location}
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />
        </div>



        
        </>
)
}

export default Weather;