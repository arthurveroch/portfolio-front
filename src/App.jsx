import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import { useEffect, useState } from 'react';
import DropdownMenu from './context/DropdownMenu';
import ReactGA from 'react-ga';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const DropdownMenuValue = {
    isOpen,
    setIsOpen,
    handleOpen,
  };

  const location = useLocation();

  useEffect(() => {
    // Suivi de la page vue lors des changements de route
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <DropdownMenu.Provider value={DropdownMenuValue}>
        <Menu />
        <Navbar />
      </DropdownMenu.Provider>
    </>
  );
}

export default App;
