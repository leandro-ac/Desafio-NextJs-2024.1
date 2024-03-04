import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-600 via-black to-fuchsia-600">
      <div className="bg-black p-8 rounded-md shadow-md flex flex-col items-center">
        
        <div className="text-center mb-4 w-full bg-fuchsia-600 p-2 rounded-t-md">
          <h2 className="text-3xl mb-2 text-white">Seja Bem-Vindo(a)!</h2>
        </div>
        
        <div className="flex-grow self-stretch bg-black p-12 rounded-md flex flex-col md:flex-row md:items-center">
          
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img src="/img/gkvaquinLogo.png" alt="Logo" className="w-60 h-60" />
          </div>
          
          <div className="md:flex-grow md:ml-4 flex flex-col">
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Digite sua senha"
              />
            </div>

            <div className="flex justify-center">
                <Link href="/Gerenciamento">
                  <button
                    className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                    type="button"
                  >
                    Entrar
                  </button>
                </Link>
              </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LoginForm;