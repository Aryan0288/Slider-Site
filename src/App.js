import logo from './logo.svg';
import './App.css';
import Testimonial from './components/Testimonial';
import data from './data';
import { useEffect, useState } from 'react';
function App() {
  const [increase,setIncrease]=useState(0);
  const [data1,setData]=useState(data);
  
  const [len,setLen]=useState(data.length);
  
  
 
  
  
  return (
    <div className="bg-stone-200">
      <Testimonial data1={data1} plus={increase} inc={setIncrease} len={len} setData={setData} />
    </div>
  );
}

export default App;
