import React, { useState } from 'react'
import "./weather.css"
const Weather = ( {app, temperature} ) => {
    console.log(app)
    const [change, setchange] = useState(true)
const handelChangeTemperature = () => setchange(!change)

  return (
    <article className='fhather'>
        <section className="app">
        <h1>Weather App</h1>
        <h3><span>feels_like:</span> <b>{app?.main.feels_like}</b></h3>
        <section>
            <img src={`https://openweathermap.org/img/wn/${app.weather[0].icon}@4x.png`} alt="" />
        </section>
        <h2><span>City: </span>{app?.name}, {app?.sys.country}</h2>

        <section className='info_ini'>

        <section className='num'>
            <h4><span>Clouds...</span> <br />{app?.weather[0].description}</h4> 
            </section>

        <section className='temp'>
            <nav className='tempe'>
            {   
                change
                ?<h2>{temperature?.celsius}°C</h2>
                :<h2>{temperature?.farenheith}°F</h2>
            }
             <button id='temp' onClick={handelChangeTemperature}>Change to {change ? '°F' : '°C'}</button>
            </nav>
           
            </section>
           
            </section>

        
        <section className='inf_ini'>
        </section>
        <section className='inf'>
        
            <section className='m'>
            <nav>
                <ul>
                    <li><span>Wind Speed</span> <b>{app?.wind.speed} m/s</b></li>
                    <br />
                    <li><span>Pressure</span><b>{app?.main.pressure} hPa</b> </li>
                    <br />
                    <li><span>temp_max</span><b>{app?.main.temp_max}°</b></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><span>Humidity</span><b>{app?.main.humidity}%</b></li>
                    <br />
                     <li><span>Clouds</span><b>{app?.clouds.all}%</b></li>
                    <br />
                    <li><span>temp_min</span> <b>{app?.main.temp_min}°</b></li>
                </ul>
            </nav>
            </section>
        </section>
      
        </section>
        <div className= "bus">
        <from>
            <input type="texto" />
        <button>Search</button>
        </from>
        </div>
    </article>
  )
}

export default Weather