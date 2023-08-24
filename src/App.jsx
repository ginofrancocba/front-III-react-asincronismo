import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
    .then((response) => response.json())
    .then((data) => {
      //Estoy pasando la posición 0 a la data porque la respuesta es un array de largo 1. De ser mas largo hay que iterar data
      setItem(data[0])
      setLoading(false)
    })
    .catch((error) => console.error("El error fue: " + error))
  },[])


  return (
    <>
        {loading ? (<div>
          <h3>Loading...</h3>
        </div>) : (
          <div>
            <img src= {item} alt="imagen de perrito" />
          </div>
        )} 
    </>
  )
}

export default App
