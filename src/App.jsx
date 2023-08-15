
import { useState } from 'react';
import './App.css';

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
}

export default App;


