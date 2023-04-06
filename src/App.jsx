import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loading from './components/Loading'

function App() {
  const [latlon, setlatlon] = useState()
 const [weather, setweather] = useState()
 const [temperature, settemperature] = useState()
useEffect(()=>{
  const success = pos => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setlatlon(obj)
  }
navigator.geolocation.getCurrentPosition(success)
},[])
useEffect(()=>{
  if(latlon){
    const apykey = '4f616028d15fe2aec507964cdb43e2b2'
    const  url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apykey}`
    axios.get(url)
    .then(res => {
      const celsius = (res.data.main.temp - 273.15).toFixed(1)
      const farenheith = (celsius * 9 / 5 + 32).toFixed(1)
      console.log(celsius)

      settemperature( {celsius, farenheith} )
      setweather(res.data)})
    .catch(err => console.log(err))
  }
},[latlon])

 
  return (
    <div className="App">
      {
        weather
           ?    <Weather 
           app={weather}
           temperature={temperature}
           />
           : <Loading/>
      }
   
    </div>
  )
}

export default App
