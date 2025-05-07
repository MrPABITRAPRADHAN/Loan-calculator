import React, { useEffect, useState } from 'react';

const ExchangeRates = ({darkMode}) => {
  const [rates, setRates] = useState(null);
  const [base, setBase] = useState('USD');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
        const data = await res.json();
        if (data.rates) {
          setRates(data.rates);
        } else {
          setError('Exchange rates not found.');
        }
      } catch (err) {
        setError('Failed to fetch exchange rates.');
        console.error(err);
      }
    };

    fetchRates();
  }, [base]);

  if (error) return <p className="text-red-500">{error}</p>;

  if (!rates) return <p className="text-gray-700">Loading exchange rates...</p>;

  return (
    <div className="p-8 min-h-screen min-w-screen" style={{
      backgroundColor: darkMode ? 'black' : 'white',
    }}>
      <h2 className="text-xl font-bold mb-4" style={{
      color: darkMode ? 'white' : 'black',
    }}>Live Exchange Rates (Base: {base})</h2>
      <select
        value={base}
        onChange={(e) => setBase(e.target.value)}
        className="mb-4 p-2 border "
      >
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency} style={{
            color:'black'
          }}>{currency}</option>
        ))}
      </select>

      <table className="min-w-full bg-grey border" style={{
      backgroundColor: darkMode ? 'black' : 'white',
      color: darkMode ? 'white' : 'black',
    }}>
        <thead style={{
              backgroundColor: darkMode ? 'grey' : 'white'
            }}>
          <tr>
            <th className="border p-2">Currency</th>
            <th className="border p-2">Rate</th>
          </tr>
        </thead>
        <tbody style={{
      color: darkMode ? 'white' : 'black',
    }}>
          {Object.entries(rates).map(([currency, rate]) => (
            <tr key={currency} >
              <td className="border p-2" style={{
              color: darkMode ? 'white' : 'black'
            }}>{currency}</td>
              <td className="border p-2" style={{
              color: darkMode ? 'white' : 'black'
            }}>{rate.toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExchangeRates;
