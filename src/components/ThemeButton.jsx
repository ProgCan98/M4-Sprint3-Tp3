import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.js';

const ThemeButton = () => {
  const { isDark, toggleDark } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDark}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {isDark ? 'Cambiar a Tema Claro' : 'Cambiar a Tema Oscuro'}
    </button>
  );
};

export default ThemeButton;
