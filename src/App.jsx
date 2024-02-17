import { useEffect, useState } from 'react'
import './App.css'
import axios, { Axios } from 'axios'
import Weather from './components/Weather'
import Loading from './components/Loading'
import style from './utils/style'

const background = [1, 2, 3, 4, 5, 6, 7]
function App() {


const [moneyRandom, setMoneyRandom] = useState(style(background))
  const [latlon, setlatlon] = useState()
 const [weather, setweather] = useState()
 const [temperature, settemperature] = useState()


 const arraymoney = {
  backgroundImage: `url('./image/fondo${moneyRandom}.jpg')`
}

const clickbutton = () => {setMoneyRandom(style(background))}

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
 
const [value, setvalue] = useState('')

useEffect(()=>{
  if(latlon){
    const apykey = '4f616028d15fe2aec507964cdb43e2b2'
    const  url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&lat=${latlon.lat}&lon=${latlon.lon}&appid=${apykey}`
    axios.get(url)
    .then(res => {
      const celsius = (res.data.main.temp - 273.15).toFixed(1)
      const farenheith = (celsius * 9 / 5 + 32).toFixed(1)
      settemperature( {celsius, farenheith} )
      setweather(res.data)})
    .catch(err => console.log(err))
  }
},[latlon, value])




 

 
  return (
    <div style={arraymoney} className="App">
     
      {
        weather
           ?    <Weather 
           app={weather}
           temperature={temperature}
           a={setvalue}
           clickbutton={clickbutton}
           />
        
           : <Loading/>
      }

    </div>
  )
}

export default App
