import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DemoHero from './DemoHero';
import SchedulePage from './SchedulePage';
import ConfirmationPage from './ConfirmationPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Definindo rotas */}
        <Route path="/DemoHero" element={<DemoHero />} />
        <Route path="/schedule/:id" element={<SchedulePage />} />
        <Route path="/confirmation/:id" element={<ConfirmationPage />} />
        
        {/* Defina uma rota padrão */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
