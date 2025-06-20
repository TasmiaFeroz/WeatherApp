





import React, { useState, useEffect } from 'react';
import Weathercard from './weathercard';

const Temp = () => {
    const [searchValue, setSearchValue] = useState("Mianwali");
    const [tempInfo, setTempInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getWeatherInfo = async () => {
        setLoading(true);
        setError(null);

        try {
        

            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Failed to fetch weather data');
            }

            const data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp, humidity, pressure, weathermood, name, speed, country, sunset
            };
            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input
                        type="search"
                        placeholder="Search..."
                        autoFocus
                        id="search"
                        className="searchTerm"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <Weathercard tempInfo={tempInfo} />
            )}
        </>
    );
};

export default Temp;
