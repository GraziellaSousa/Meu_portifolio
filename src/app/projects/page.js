// app/projects/page.tsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Loja de Brinquedos',
      description:
        'Um projeto de e-commerce de loja de brinquedos com funcionalidades de carrinho de compras, pagamento online e gerenciamento de estoque.',
      demoUrl: 'https://github.com/GraziellaSousa/Fox-Brinquedos.git',
    },
    {
      id: 2,
      title: 'Gestão de Habitação',
      description:
        'Uma site para gestão de habitação, onde é possível cadastrar imóveis, contratos de locação e venda, gerenciar acesso',

      demoUrl: 'https://github.com/GraziellaSousa/Gestao_Habitacao.git',
    },
    {
      id: 3,
      title: 'Admin de Eventos',
      description:
        'Site com foco no ambiente administrativo de um E-Commerce. Na parte de gestão é possível cadastrar novos eventos, controle de',
      imageUrl: '/images/projeto3.jpg',
      demoUrl: 'https://github.com/GraziellaSousa/Bravo_Ticket.git',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Botões na parte superior */}
        <div className="absolute top-4 left-4">
          <Link href="/skills">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
              Skills
            </button>
          </Link>
        </div>
        <div className="absolute top-4 right-4">
          <Link href="/contact">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
              Contato
            </button>
          </Link>
        </div>

        {/* Seção de Título */}
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 sm:text-6xl">
          Meus Projetos Incríveis
        </h1>

        {/* Seção de Introdução */}
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl text-white/90 mt-4 max-w-xl mx-auto">
            Aqui estão alguns dos projetos mais emocionantes em que trabalhei. Clique para ver mais detalhes e demos dos projetos.
          </p>
        </div>

         {/* Seção de Projetos */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Descrição do Projeto */}
              <div className="p-6 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 flex-1">
                <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-indigo-600 text-white px-6 py-2 rounded-full text-center hover:bg-indigo-700 transition-colors transform hover:scale-105"
                >
                  Ver Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Redes Sociais */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-semibold text-white mb-6">Conecte-se Comigo</h3>
          <div className="flex justify-center space-x-8 text-gray-200">
            <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-10 h-10 hover:text-white transition-colors transform hover:scale-125" />
            </a>
            <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-10 h-10 hover:text-white transition-colors transform hover:scale-125" />
            </a>
            <a href="https://twitter.com/seuusuario" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-10 h-10 hover:text-white transition-colors transform hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
