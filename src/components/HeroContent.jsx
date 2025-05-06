import React, { useState } from 'react';
import '../Style/loancalc.css';

const currencies = ['USD', 'EUR', 'INR', 'JPY', 'AUD', 'CAD', 'GBP'];

const LoanCalculator = ({darkMode}) => {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [term, setTerm] = useState('');
  const [currency, setCurrency] = useState('INR');
  const [schedule, setSchedule] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const conversionRates = {
    INR: 1,
    USD: 0.012,
    EUR: 0.011,
    JPY: 1.67,
    AUD: 0.018,
    CAD: 0.016,
    GBP: 0.0098,
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const P = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(term) * 12;

    if (!P || !r || !n) {
      alert('Please enter valid values.');
      return;
    }

    const monthly = (P * r) / (1 - Math.pow(1 + r, -n));
    let balance = P;
    const rateFactor = conversionRates[currency];
    const scheduleData = [];

    for (let i = 1; i <= n; i++) {
      const interest = balance * r;
      const principal = monthly - interest;
      balance -= principal;
      scheduleData.push({
        month: i,
        principal:( principal* rateFactor).toFixed(2),
        interest: (interest * rateFactor).toFixed(2),
        balance: (balance > 0 ? balance * rateFactor : 0).toFixed(2),
      });
    }

    setSchedule(scheduleData);
    setShowTable(true);

  };

  const handleReset = () => {
    setAmount('');
    setRate('');
    setTerm('');
    setCurrency('INR');
    setSchedule([]);
    setShowTable(false);
  };

  return (
    <div className="loan-container" style={{
      background: darkMode ? 'transparent' : '#ffffff',
      color: darkMode ? '#f9fafb' : 'white',
      padding: '20px',
      borderRadius: '8px',
    }}>
      <h2 style={{
         color: darkMode ? 'white' : 'black',
        }}>Loan Calculator Dashboard</h2>
      <form onSubmit={handleCalculate}>
        <label htmlFor="amount" style={{
          color: darkMode ? 'white' : 'black',
        }}>Loan Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g. 50000"
          required
        />

        <label htmlFor="rate" style={{
          color: darkMode ? 'white' : 'black',
        }}>Interest Rate (%)</label>
        <input
          type="number"
          step="0.01"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="e.g. 5.5"
          required
        />

        <label htmlFor="term" style={{
          color: darkMode ? 'white' : 'black',
        }}>Term (Years)</label>
        <input
          type="number"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="e.g. 10"
          required
        />

        <div className="currency-reset-row">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="currency-select"
           >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
          <button type="button" className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>

        <button type="submit" className="calc-button">
          Calculate
        </button>
      </form>

      {showTable && (
        <div className="table-container">
          <h3>Amortization Schedule</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Principal ({currency})</th>
                <th>Interest ({currency})</th>
                <th>Remaining Balance ({currency})</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item) => (
                <tr key={item.month}>
                  <td>{item.month}</td>
                  <td>{item.principal}</td>
                  <td>{item.interest}</td>
                  <td>{item.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
