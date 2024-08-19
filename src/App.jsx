import Navbar from './components/Navbar';
import Menu from './components/Menu';
import { useState } from 'react';
import DropdownMenu from './context/DropdownMenu';

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
