import btnImage from './assets/icon-arrow.svg';
import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const[resultDay, setResultDay] = useState('--');
  const[resultMonth, setResultMonth] = useState('--');
  const[resultYear, setResultYear] = useState('--');

  const[emptyDay, setEmptyDay] = useState(false);
  const[emptyMonth, setEmptyMonth] = useState(false);
  const[emptyYear, setEmptyYear] = useState(false);




  return (
    <div >
      <form>
      <label>
      <p className="">day</p>
        <input
          value={day}
          onChange={e => setDay(e.target.value)}
          type="number"
          placeholder='DD'
        />
      </label>
      <label>
      <p className="">Month</p>
        <input
          value={month}
          onChange={e => setMonth(e.target.value)}
          type="number"
          placeholder='MM'
        />
      </label>
      <label>
      <p className="">Year</p>
        <input
          value={year}
          onChange={e => setYear(e.target.value)}
          type="number"
          placeholder='YYYY'
        />
      </label>
    </form>
 


    <div className="line w-20 h-[1.5px] m-2 bg-lightgrey"></div>
<button className="bg-purple">
  <img src={btnImage} alt="" />
</button>
<div className="resultContainer">
          <h1 className="text-black">
            <span className="text-red-800 text-4xl m-2">
              {Number.isNaN(resultYear) ? "--" : resultYear}
            </span>
            years
          </h1>
          <h1 className="text-black">
            <span className="text-purple text-4xl m-2">
              {Number.isNaN(resultMonth) ? "--" : resultMonth}
            </span>
            months
          </h1>
          <h1 className="text-black text-2xl">
            <span className="text-red-800 text-4xl m-2">
              {Number.isNaN(resultDay) ? "--" : resultDay}
            </span>
            days
          </h1>
        </div>
      </div>
    
    


  )
}

export default App;


