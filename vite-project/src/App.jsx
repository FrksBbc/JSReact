import { useEffect, useState } from 'react'
import './App.css'
import data from "./data.json";


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);


  return (
    <div>
      <h1>Termékek</h1>
      <p>Lorem...</p>
      {items.map((item) => (
        <div className='product-card' key={item.id}>
          <div>{item.thumbnail}</div>
          <div className='product-title'>
            <h2>{item.title}</h2>
            <h2>${item.price}</h2>
          </div>
          <button>Részletek</button>
        </div>

      ))}
    </div>
  );
}

export default App
