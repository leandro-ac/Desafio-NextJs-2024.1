import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex flex-wrap">
      
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl mb-4 text-white">Nos conheça melhor!</h1>
          <p className="text-white text-lg">
            A GKVaquin tem como missão fornecer instrumentos musicais de alta qualidade,
            promovendo a expressão artística e a paixão pela música em músicos de todos os níveis.
            Buscamos constantemente inovação e excelência em nossos produtos para atender às
            necessidades e expectativas de nossos clientes.
          </p>
          <p className="text-white text-lg">
          Nos destacamos pela variedade de produtos, atendendo às necessidades e preferências de músicos de todos os estilos e níveis de habilidade. Desde guitarras elétricas que proporcionam timbres versáteis até violões acústicos com sonoridade envolvente, nossa coleção abrange uma extensa gama de instrumentos musicais. Os teclados oferecem opções tanto para músicos clássicos quanto para os que buscam inovação sonora, enquanto as baterias e percussões cativam com sua diversidade de ritmos e estilos.
          </p>
      </div>

      
      <div className="w-full lg:w-1/2">
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
      </div>

      <div className="w-full mt-8 lg:mt-12  text-black text-3xl lg flex justify-center items-center bg-white py-4">
        <a href="https://www.whatsapp.com/?l=pt_br" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <img src="/img/zap.png" alt="WhatsApp" className="mr-2 h-10 w-10" />
          (32)70707070
        </a>

        <a href="https://www.instagram.com/codejr/?hl=en" target="_blank" rel="noopener noreferrer" className="ml-4 flex items-center">
          <img src="/img/insta.png" alt="Instagram" className="mr-2 h-10 w-10" />
          @gkvaquin
        </a>
        
        <a href="https://www.linkedin.com/company/codejr/mycompany/" target="_blank" rel="noopener noreferrer" className="ml-4 flex items-center">
          <img src="/img/face.png" alt="Facebook" className="mr-2 h-10 w-10" />
          @gkvaquin
        </a>
      </div>

    </div>
  );
};

export default ContactSection;
