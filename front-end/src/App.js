import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([{}])
  
  useEffect(() => {
    fetch('/CalgaryHacks2025')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [])
  
  return (
    <div>App</div>
  )
}




