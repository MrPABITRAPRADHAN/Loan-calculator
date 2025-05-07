import React from 'react';

const About = ({darkMode}) => {
  return (
    <div className="min-h-screen min-w-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-10 w-full" style={{
      backgroundColor: darkMode ? 'black' : 'white',
    }}>
      <div className="max-w-4xl mx-auto" style={{
      color: darkMode ? 'white' : 'black',
    }}>
        <h1 className="text-4xl font-bold mb-6 text-center">About This App</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📘 Description</h2>
          <p className="text-base leading-relaxed">
            This Loan Calculator web application allows users to calculate loan amortization schedules based on input values such as loan amount, interest rate, and term. It also provides real-time currency exchange rates for international users and supports light/dark theme toggling for better accessibility.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">✨ Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Loan calculation with amortization schedule</li>
            <li>Dynamic currency conversion (INR, USD, EUR, JPY, etc.)</li>
            <li>Responsive UI with mobile-first design</li>
            <li>Dark/Light mode toggle</li>
            <li>Reset and recalculate functionality</li>
            <li>Video background and smooth UI transitions</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">🛠️ Technologies Used</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm text-center">React.js</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm text-center">Tailwind CSS</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm text-center">JavaScript</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm text-center">React Router</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm text-center">HTML5</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm text-center">CSS3</span>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">🌐 APIs Used</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>ExchangeRate-API:</strong> for fetching live currency exchange rates</li>
            <li><strong>Custom Logic:</strong> for amortization schedule generation</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
