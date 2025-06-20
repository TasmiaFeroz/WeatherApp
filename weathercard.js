// import React, {useState, useEffect} from 'react'

// const Weathercard = ({ tempInfo }) => {
//     const [weatherState, setWeatherState] = useState("")
//     const {
//         temp, humidity, pressure, weathermood, name, speed, country, sunset,
// }
//  =tempInfo;
// useEffect(() => {
// if(weathermood){
//     switch (weathermood) {
//         case "Clouds":setWeatherState("wi-day-cloudy");
//             break;
//             case "haze":setWeatherState("wi-fog");
//             break;
//             case "Clear":setWeatherState("wi-day-sunny");
//             break;
//             case "Mist":setWeatherState("wi-dust");
//             break;
//         default:
//             // case "Clear":setWeatherState("wi-day-sunny");
//             break;
//     }
// }
// }, [weathermood])
// let sec=sunset;
// let date=new Date(sec *1000);
// let timeStr= "${date.getHours()}: ${date.getMinutes()}}";

// return (
//     <>
//         <article className="widget">
//             <div className="weatericon">
//                 <i className={`wi ${weatherState} `}></i>
//             </div>
//             <div className="weatherInfo">
//                 <div className="temprature">
//                     <span>{temp}</span>
//                 </div>
//                 <div className="description">
//                     <div className="weatherCondition">
//                         {weathermood} </div>
//                     <div className="place">
//                         {name}, {country}</div>
//                 </div>
//             </div>
//             <div className="date"> {Date().toLocaleString()}  </div>

//             <div className="extra-temp">
//                 <div className="temp-info-minmax">
//                     <div className="two-sided-section">
//                         <p>
//                             <i className={"wi wi-sunset"}></i>
//                         </p>
//                         <p className='extra-info-leftside'>
//                       {timeStr}  <br></br>
//                          Sunset
//                         </p>
//                     </div>

//                     <div className="two-sided-section">
//                         <p>
//                             <i className={"wi wi-sunset"}></i>
//                         </p>
//                         <p className='extra-info-leftside'>
//                         {humidity} <br></br>
//                             Humidity
//                         </p>
//                     </div>

//                     <div className="two-sided-section">
//                         <p>
//                             <i className={"wi wi-sunset"}></i>
//                         </p>
//                         <p className='extra-info-leftside'>
//                             {pressure} <br></br>
//                             Pressure
//                         </p>
//                     </div>

//                     <div className="two-sided-section">
//                         <p>
//                             <i className={"wi wi-sunset"}></i>
//                         </p>
//                         <p className='extra-info-leftside'>
//                     {speed}<br></br>
//                            speed
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </article>
//     </>
// )
// }

// export default Weathercard;



import React from 'react';

const Weathercard = ({ tempInfo }) => {
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    } = tempInfo;

    // Converting sunset time to readable format
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <article className="widget">
            <div className="weatherIcon">
                <i className={`wi wi-day-${weathermood ? weathermood.toLowerCase() : ''}`}></i>
            </div>
            
            <div className="weatherInfo">
                <div className="temperature">
                    <span>{temp}&deg;</span>
                </div>
                <div className="description">
                    <div className="weatherCondition">{weathermood}</div>
                    <div className="place">
                        {name}, {country}
                    </div>
                </div>
            </div>

            <div className="date">{new Date().toLocaleString()}</div>

            <div className="extra-temp">
                <div className="temp-info-minmax">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-sunset"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {timeStr} PM <br />
                            Sunset
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-humidity"}></i>
                        </p>
                        <p className="extra-info-leftside">


                            {humidity} <br />
                            Humidity
                        </p>
                    </div>
                </div>

                <div className="weather-extra-info">
                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-rain"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {pressure} <br />
                            Pressure
                        </p>
                    </div>

                    <div className="two-sided-section">
                        <p>
                            <i className={"wi wi-strong-wind"}></i>
                        </p>
                        <p className="extra-info-leftside">
                            {speed} <br />
                            Speed
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Weathercard;
