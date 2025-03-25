import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-600 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo ou Nome */}
        <div className="text-white text-2xl font-semibold">
          <Link href="/" passHref>
            Meu Portfólio
          </Link>
        </div>

        {/* Menu Horizontal */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" passHref>
            <a className="text-white hover:text-gray-200">Home</a>
          </Link>
          <Link href="/about" passHref>
            <a className="text-white hover:text-gray-200">Sobre</a>
          </Link>
          <Link href="/projects" passHref>
            <a className="text-white hover:text-gray-200">Projetos</a>
          </Link>
          <Link href="/skills" passHref>
            <a className="text-white hover:text-gray-200">Habilidades</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="text-white hover:text-gray-200">Contato</a>
          </Link>
        </div>

        {/* Menu Hamburguer (para dispositivos móveis) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {/* Ícone de menu hambúrguer */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu responsivo */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="/" passHref>
            <a className="text-white hover:text-gray-200">Home</a>
          </Link>
          <Link href="/about" passHref>
            <a className="text-white hover:text-gray-200">Sobre</a>
          </Link>
          <Link href="/projects" passHref>
            <a className="text-white hover:text-gray-200">Projetos</a>
          </Link>
          <Link href="/skills" passHref>
            <a className="text-white hover:text-gray-200">Habilidades</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="text-white hover:text-gray-200">Contato</a>
          </Link>
        </div>
      )}
    </nav>
  );
}
