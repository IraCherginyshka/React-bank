import React from 'react';

import Header from './components/Header';
import Form from './components/Form';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header
        logo="Bank"
        title="Support Portal"
      />

      <main className="container content">
        <Form />
      </main>

    </div>
  );
}

export default App;
