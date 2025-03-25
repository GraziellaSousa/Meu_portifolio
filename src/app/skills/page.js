// app/skills/page.tsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { DiSass } from 'react-icons/di';
import { SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';
import Link from 'next/link';

export default function Skills() {
  return (
    <div>
      {/* Inclua a Navbar aqui */}
      <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">

          {/* Botões na parte superior */}
          <div className="absolute top-4 left-4">
            <Link href="/about">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                Sobre Mim
              </button>
            </Link>
          </div>
          <div className="absolute top-4 right-4">
            <Link href="/projects">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
                Projetos
              </button>
            </Link>
          </div>

          {/* Seção de Título */}
          <h1 className="text-5xl font-extrabold text-center text-white mb-8 sm:text-6xl">
            Minhas Habilidades
          </h1>

          {/* Seção de Habilidades */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

            {/* Habilidade HTML */}
            <div className="bg-white rounded-xl p-8 text-center shadow-xl transition-transform transform hover:scale-105">
              <FaHtml5 className="text-5xl text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">HTML</h3>
              <p className="text-gray-600 mt-2">Markup básico para estruturar páginas.</p>
            </div>

            {/* Habilidade CSS */}
            <div className="bg-white rounded-xl p-8 text-center shadow-xl transition-transform transform hover:scale-105">
              <FaCss3Alt className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">CSS</h3>
              <p className="text-gray-600 mt-2">Estilização visual de páginas e layouts.</p>
            </div>

            {/* Habilidade JavaScript */}
            <div className="bg-white rounded-xl p-8 text-center shadow-xl transition-transform transform hover:scale-105">
              <FaJs className="text-5xl text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">JavaScript</h3>
              <p className="text-gray-600 mt-2">Linguagem de programação para interatividade.</p>
            </div>

            {/* Habilidade React */}
            <div className="bg-white rounded-xl p-8 text-center shadow-xl transition-transform transform hover:scale-105">
              <FaReact className="text-5xl text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">React</h3>
              <p className="text-gray-600 mt-2">Biblioteca JavaScript para interfaces de usuário.</p>
            </div>

            {/* Habilidade Node.js */}
            <div className="bg-white rounded-xl p-8 text-center shadow-xl transition-transform transform hover:scale-105">
              <FaNodeJs className="text-5xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Node.js</h3>
              <p className="text-gray-600 mt-2">Ambiente de execução JavaScript no servidor.</p>
            </div>

            {/* Habilidade Git */}
            <div className="bg-white rounded-xl p-8 text-center shadow-xl transition-transform transform hover:scale-105">
              <FaGitAlt className="text-5xl text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Git</h3>
              <p className="text-gray-600 mt-2">Controle de versão de código-fonte.</p>
            </div>

            {/* Habilidade Sass */}
            <div className="bg-white rounded-xl p-8 text-center shadow-xl transition-transform transform hover:scale-105">
              <DiSass className="text-5xl text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Sass</h3>
              <p className="text-gray-600 mt-2">Pré-processador CSS para maior flexibilidade.</p>
            </div>

            {/* Habilidade Tailwind CSS */}
            <div className="bg-white rounded-xl p-8 text-center shadow-xl transition-transform transform hover:scale-105">
              <SiTailwindcss className="text-5xl text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Tailwind CSS</h3>
              <p className="text-gray-600 mt-2">Framework CSS utilitário para desenvolvimento rápido.</p>
            </div>

            {/* Habilidade TypeScript */}
            <div className="bg-white rounded-xl p-8 text-center shadow-xl transition-transform transform hover:scale-105">
              <SiTypescript className="text-5xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">TypeScript</h3>
              <p className="text-gray-600 mt-2">Superset do JavaScript com tipagem estática.</p>
            </div>

            {/* Habilidade Next.js */}
            <div className="bg-white rounded-xl p-8 text-center shadow-xl transition-transform transform hover:scale-105">
              <SiNextdotjs className="text-5xl text-black mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Next.js</h3>
              <p className="text-gray-600 mt-2">Framework React para renderização do lado do servidor e geração de sites estáticos.</p>
            </div>
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
    </div>
  );
}
