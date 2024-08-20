import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import App from './App.jsx';
import './assets/styles/index.css';
import ReactGA from 'react-ga';

ReactGA.initialize('G-4D8BDQ0GDG');
ReactGA.pageview(window.location.pathname + window.location.search);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Home />} />
        <Route path='/accueil' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
