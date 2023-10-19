import React,{ useContext, useEffect} from "react";
import { ThemeContext } from "@/app/contexts/ThemeContext"
import Link from 'next/link';

function Appbar({ onMenuToggle }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log('atualiza appbar');
  }, [theme]);

  return (
    <div
      className={`flex justify-between items-center p-5 ${
        theme === 'dark' ? 'bg-purple-700' : 'bg-purple-500'
      }`}
    >
      <div className={`${
        theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <h2 className="font-mono font-semibold text-lg ml-2">Portofolio de Fotos 📷</h2>
      </div>
      <button onClick={onMenuToggle}>
        <svg
          className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'dark:text-white'}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
}

export default Appbar;