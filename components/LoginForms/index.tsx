// components/LoginForm.js
import React from 'react';

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-600 via-black to-fuchsia-600">
      <div className="bg-black p-8 rounded-md shadow-md w-96 flex flex-col items-center">
        {/* Seção do "Seja Bem-Vindo(a)!" */}
        <div className="bg-fuchsia-600 text-center mb-4">
          <h2 className="text-2xl mb-2 text-white">Seja Bem-Vindo(a)!</h2>
        </div>
        {/* Logo  */}
        <div className="flex-shrink-0 mb-4">
          <img src="/img/gkvaquinLogo.png" alt="Logo" className="w-32 h-32" />
        </div>
        {/* Seção dos Inputs  */}
        <div className="flex-grow self-stretch">
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
            <button
              className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
