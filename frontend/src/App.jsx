import React from 'react';
import UrlForm from './components/UrlForm';
const App = () => {
  
  
  return (
    <div className="max-w-md mx-auto mt-16 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-indigo-600 font-bold text-2xl mb-6">🔗 URL Shortener</h2>
      <UrlForm />
    </div>
  );
};

export default App;