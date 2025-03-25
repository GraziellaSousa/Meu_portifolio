// app/page.tsx
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 min-h-screen flex flex-col justify-center items-center text-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Título */}
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Olá, sou Graziella
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl text-white/90 mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Sou apaixonada por TI e em constante evolução. Com experiência em Segurança da Informação, estou sempre em busca de novos desafios.
        </p>

        {/* Seção de Botões de Navegação */}
        <div className="flex justify-center space-x-6 mb-10">
          <Link href="/about" passHref>
            <button className="bg-indigo-700 text-white px-8 py-4 rounded-full text-xl hover:bg-indigo-800 transition-all transform hover:scale-105">
              Sobre Mim
            </button>
          </Link>

          <Link href="/projects" passHref>
            <button className="bg-purple-700 text-white px-8 py-4 rounded-full text-xl hover:bg-purple-800 transition-all transform hover:scale-105">
              Projetos
            </button>
          </Link>

          <Link href="/skills" passHref>
            <button className="bg-pink-700 text-white px-8 py-4 rounded-full text-xl hover:bg-pink-800 transition-all transform hover:scale-105">
              Skills
            </button>
          </Link>

          <Link href="/contact" passHref>
            <button className="bg-indigo-800 text-white px-8 py-4 rounded-full text-xl hover:bg-indigo-900 transition-all transform hover:scale-105">
              Contato
            </button>
          </Link>
        </div>

        {/* Seção de Redes Sociais */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold text-white mb-6">Vamos Conectar!</h3>
          <div className="flex justify-center space-x-8 text-gray-200">
            <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-10 h-10 hover:text-white transition-colors" />
            </a>
            <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-10 h-10 hover:text-white transition-colors" />
            </a>
            <a href="https://twitter.com/seuusuario" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-10 h-10 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
