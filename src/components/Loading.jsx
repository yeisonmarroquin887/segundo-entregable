import React from 'react'
import "./loa.css"
const Loading = () => {
  const loady = {
    backgroundImage: `url('./loading/inicio.gif')`
  }
  return (
    <div className='lo' style={loady}>
      <nav className='car'>
      <h1><b>🌥️Loading🌤️</b></h1>
      </nav>
      <nav className='card'>
      <h2>Gracias por ingresar a mi pagina, Bienvenido Seas... <br/>"🙌🌅🌄🌉🏞️⛈️🌩️🙌"</h2>
      </nav>
     
    </div>
  )
}

export default Loading