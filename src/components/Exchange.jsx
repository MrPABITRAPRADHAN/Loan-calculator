import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExchangeRates = ({darkmode}) => {
  const [rates, setRates] = useState({});
  const [base, setBase] = useState('USD');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currencies = ['USD', 'EUR', 'INR', 'JPY', 'GBP', 'AUD', 'CAD'];

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.exchangerate.host/latest?base=${base}`);
        setRates(response.data.rates);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch exchange rates');
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [base]);

  return (
    <div className='min-h-screen min-w-screen' style={{ padding: '2rem' ,
      backgroundColor: darkmode ? '#1f2937' : '#ffffff',
    }}>
      <h2>Live Exchange Rates</h2>

      <label>
        Base Currency:
        <select value={base} onChange={(e) => setBase(e.target.value)}>
          {currencies.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </label>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <table border="1" cellPadding="10" style={{ marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Rate (1 {base})</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map(
              (cur) =>
                cur !== base && (
                  <tr key={cur}>
                    <td>{cur}</td>
                    <td>{rates[cur]?.toFixed(4) || 'N/A'}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExchangeRates;
