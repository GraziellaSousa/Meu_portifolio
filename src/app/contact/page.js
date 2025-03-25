// app/contact/page.tsx
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative">
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
          <Link href="/">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
              Inicio
            </button>
          </Link>
        </div>

        {/* Seção de Título */}
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 sm:text-6xl">
          Fale Comigo
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-20">
          {/* Informações de Contato */}
          <div className="w-full md:w-1/3 text-center md:text-left text-white">
            <h2 className="text-3xl font-semibold mb-4">Entre em Contato</h2>
            <p className="text-lg mb-4">
              Se você deseja conversar sobre oportunidades, tirar dúvidas ou apenas bater um papo, sinta-se à vontade para me enviar uma mensagem.
            </p>
            <div className="space-y-4 mb-8">
              <p><strong>Email:</strong> graziellaaraujo07@gmail.com</p>
              <p><strong>Telefone:</strong> (11) 97776-5835</p>
              <div className="flex justify-center space-x-8 mt-6">
                <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                  LinkedIn
                </a>
                <a href="https://twitter.com/seuusuario" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato (somente visual, sem funcionalidade) */}
          <div className="w-full md:w-2/3">
            <form className="bg-white p-8 rounded-xl shadow-xl space-y-6">
              <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Formulário de Contato</h2>

              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-lg text-gray-700 mb-2">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Seu e-mail"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Sua mensagem"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              {/* Botão de Enviar */}
              <div className="flex justify-center">
                <button
                  type="button"
                  className="px-6 py-3 mt-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
