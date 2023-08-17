import btnImage from './assets/icon-arrow.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [age, setAge] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  const [error, setError] = useState(null);

  const calculateAge = () => {
    const inputDate = new Date(`${year}-${month}-${day}`);

    if (!day || !month || !year) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(inputDate)) {
      setError("Invalid date.");
      return;
    }

    const currentDate = new Date();
    if (inputDate > currentDate) {
      setError("Date cannot be in the future.");
      return;
    }

    const yearDiff = currentDate.getFullYear() - inputDate.getFullYear();
    const monthDiff = currentDate.getMonth() - inputDate.getMonth();
    const dayDiff = currentDate.getDate() - inputDate.getDate();

    setAge({
      years: yearDiff,
      months: monthDiff,
      days: dayDiff,
    });

    setError(null);
  };
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-radius-custom bg-white p-4">
        <div className="flex justify-center mb-4">
          <form className="flex flex-col md:flex-row">
            <label className="flex flex-col items-center md:items-start mb-2 md:mb-0 md:mr-4">
              <p className="text-grey">DAY</p>
              <input
                value={day}
                onChange={(e) => setDay(e.target.value)}
                type="text"
                placeholder="DD"
                className="mt-1 w-20 md:w-28 px-4 py-3 text-center border transition duration-300 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-md"
              />
            </label>
            <label className="flex flex-col items-center md:items-start mb-2 md:mb-0 md:mr-4">
              <p className="text-grey">MONTH</p>
              <input
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                type="text"
                placeholder="MM"
                className="mt-1 w-20 md:w-28 px-4 py-3 text-center border transition duration-300 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-md"
              />
            </label>
            <label className="flex flex-col items-center md:items-start">
              <p className="text-grey">YEAR</p>
              <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="text"
                placeholder="YYYY"
                className="mt-1 w-24 md:w-32 px-4 py-3 text-center border transition duration-300 focus:border-purple focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-md"
              />
            </label>
          </form>
        </div>

        {error && <div className="text-red mt-2">{error}</div>}

        <div className="flex items-center mb-4">
          <div className="flex-grow">
            <hr className="border-smokeyGrey" />
          </div>
          <button
            className="bg-purple hover:bg-black ml-4 rounded-lg p-2"
            onClick={calculateAge}
          >
            <img src={btnImage} alt="" />
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="flex flex-col items-center">
            <div className="mt-4 flex items-center">
              <span className="text-purple text-4xl font-bold leading-110">{age.years}</span>
              <p className="ml-2 text-4xl font-bold leading-110">YEARS</p>
            </div>

            <div className="mt-4 flex items-center">
              <span className="text-purple text-4xl font-bold leading-110">{age.months}</span>
              <p className="ml-2 text-4xl font-bold leading-110">MONTHS</p>
            </div>

            <div className="mt-4 flex items-center">
              <span className="text-purple text-4xl font-bold leading-110">{age.days}</span>
              <p className="ml-2 text-4xl font-bold leading-110">DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App
