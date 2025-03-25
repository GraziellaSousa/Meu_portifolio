// app/about/page.tsx
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">

        {/* Botões na parte superior */}
        <div className="absolute top-4 left-4">
          <Link href="/">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
              Inicio
            </button>
          </Link>
        </div>
        <div className="absolute top-4 right-4">
          <Link href="/skills">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
              Skills
            </button>
          </Link>
        </div>

        {/* Seção de Título */}
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 sm:text-6xl">
          Sobre Mim
        </h1>

        {/* Seção de Introdução */}
        <div className="flex flex-col items-center md:flex-row md:space-x-10 mb-12">
          {/* Foto de Perfil */}
          <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-xl mb-6 md:mb-0">
            <img
              src="../images/photo.jpg" // Certifique-se de colocar sua foto em 'public/images'
              className="w-full h-full object-cover"
            />
          </div>
          {/* Descrição */}
          <div className="text-center md:text-left text-white">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Oi, sou Graziella!</h2>
            <p className="text-lg sm:text-xl text-white/90 mt-4 max-w-xl mx-auto md:mx-0">
              Sou apaixonada por TI, com experiência em Segurança. Atualmente moro em São Paulo/SP e estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
            </p>
          </div>
        </div>

        {/* Seção de Formação Acadêmica */}
        <div className="bg-white shadow-2xl rounded-lg p-8 mb-12 border-l-4 border-purple-500">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">Minha Formação Acadêmica</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">1</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Uninove</h4>
                <p className="text-gray-600">Curso: Tecnólogo em Recursos Humanos, Concluído em 2020.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">2</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Centro Universitário Senac</h4>
                <p className="text-gray-600">Curso: Tecnólogo em Sistemas para Internet, Conclusão em 2025.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Experiência Profissional */}
        <div className="bg-white shadow-2xl rounded-lg p-8 mb-12 border-l-4 border-pink-500">
          <h3 className="text-3xl font-semibold text-gray-800 text-center mb-6">Minha Experiência Profissional</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">1</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Assistente de RH - Speed Truck</h4>
                <p className="text-gray-600">Período: Janeiro/2019 à Julho/2019</p>
                <p className="text-gray-600">Descrição: Responsável por todas as atividades relacionadas ao departamento pessoal da empresa, como fechamento de folha, solicitação e benefícios,</p>
                <p className="text-gray-600">rescisões, admissões, controle de ponto, cadastro de funcionários e controle de férias.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">2</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Estágio em TI - Grupo GSH</h4>
                <p className="text-gray-600">Período: Outubro/2022 à Abril/2024.</p>
                <p className="text-gray-600">Descrição: Lançamento de contas da TI no sistema Protheus, acompanhar entregas de notas fiscais e recebimentos de produtos, monitoramento de impressões,</p>
                <p className="text-gray-600">solicitação de assinatura de contratos através do DocuSing, acompanhamento do estoque da TI, fazer relatórios e acompanhamento da planilha de pagamentos.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">3</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Analista de TI - Grupo GSH</h4>
                <p className="text-gray-600">Período: Abril/2024 - Atualmente</p>
                <p className="text-gray-600">Descrição: Criação de acessos a diversos sistemas da empresa, atualizações e gerenciamento de acessos na Intranet/ Forms da empresa, atualização</p>
                <p className="text-gray-600">de documentos/ normas da TI, apoio nos projetos de RPA, apoio no controle de vulnerabilidades nos ambientes, suporte técnico.</p>
              </div>
            </div>
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
  );
}
