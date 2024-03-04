// components/ContactSection.js
import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex flex-wrap">
      {/* Seção de Descrição da Empresa à Esquerda */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <section>
          <h1 className="text-3xl font-bold mb-4 text-white">Sobre a GKVaquin</h1>
          <p className="text-white">
            A GKVaquin tem como missão fornecer instrumentos musicais de alta qualidade,
            promovendo a expressão artística e a paixão pela música em músicos de todos os níveis.
            Buscamos constantemente inovação e excelência em nossos produtos para atender às
            necessidades e expectativas de nossos clientes.
          </p>
        </section>
      </div>

      {/* Seção de Inputs e Botão à Direita */}
      <div className="w-full lg:w-1/2">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Entre em Contato</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-sm font-bold mb-2">
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Seu Nome"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
                Mensagem:
              </label>
              <textarea
                id="message"
                name="message"
                className="border-2 border-white p-2 w-full bg-white text-black"
                placeholder="Sua Mensagem"
              />
            </div>

            <button
              type="submit"
              className="bg-fuchsia-600 text-white py-2 px-4 rounded hover:bg-fuchsia-700"
            >
              Enviar
            </button>
          </form>
        </section>
      </div>

      {/* Seção com o Número, Instagram e Facebook */}
      <div className="w-full lg:w-1/2 mt-4">
        <section>
          <p className="text-white">Número da Empresa: (32) 7070-7070</p>
          <p className="text-white">Instagram: @gkvaquin</p>
          <p className="text-white">Facebook: @gkvaquin</p>
        </section>
      </div>
    </div>
  );
};

export default ContactSection;
