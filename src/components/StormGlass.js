import React from "react";
import '../App.css';

// function StormGlass ({lat, long}) {
// const params = 'windSpeed' ;
// let responseAPI; 

//     fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}`, {
//       headers: {
//         'Authorization': '86a7f0f4-b4b3-11eb-8d12-0242ac130002-86a7f1c6-b4b3-11eb-8d12-0242ac130002'
//       }
//     }).then((response) => response.json()).then((jsonData) => {
//     //    responseAPI = jsonData[0].windSpeed
//       responseAPI = jsonData.hours[0].windSpeed.icon
//        console.log(lat, long, responseAPI, responseAPI[0].windSpeed)
//     });

//     return(
//         <>
//         <p> {responseAPI} </p>
        
//         </>
//     )

// }

// export default StormGlass;