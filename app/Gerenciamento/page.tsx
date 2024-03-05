'use client'

import SearchBar from '@/components/SearchBar';
import React, { useState } from 'react';
import Image from 'next/image';


const MembersPage = () => {
 
  const initialMembers = [
    { nome: 'Leandro Alvares de Carvalho', cargo: 'Gerente', email: '123@email.com', acoes: ['Visualizar', 'Editar', 'Excluir'] },
    { nome: 'Maria de Jesus', cargo: 'Gerente', email: '123@email.com', acoes: ['Visualizar', 'Editar', 'Excluir'] },
    { nome: 'José Silva Santos', cargo: 'Gerente', email: '123@email.com', acoes: ['Visualizar', 'Editar', 'Excluir'] },
    { nome: 'Pedro Alvares de Santos', cargo: 'Gerente', email: '123@email.com' , acoes: ['Visualizar', 'Editar', 'Excluir']},
    { nome: 'Marina de Carvalho Silva', cargo: 'Gerente', email: '123@email.com', acoes: ['Visualizar', 'Editar', 'Excluir'] },
    { nome: 'José Antonio Dias Cabral', cargo: 'Gerente', email: '123@email.com', acoes: ['Visualizar', 'Editar', 'Excluir'] },
    { nome: 'Carlos José Pereira', cargo: 'Gerente', email: '123@email.com', acoes: ['Visualizar', 'Editar', 'Excluir'] },
    { nome: 'Ana Maria de Souza', cargo: 'Gerente', email: '123@email.com', acoes: ['Visualizar', 'Editar', 'Excluir'] },
    { nome: 'Marcia Helena Motta ', cargo: 'Gerente', email: '123@email.com', acoes: ['Visualizar', 'Editar', 'Excluir'] },
  ];
  
  const [members, setMembers] = useState(initialMembers);

  const handleSearch = (searchTerm: string) => {
    const filteredMembers = initialMembers.filter((member) =>
      member.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMembers(filteredMembers);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl text-white mb-4 text-center">Membros</h1>

      <div className="flex items-center mb-4">
        <SearchBar onSearch={handleSearch} />

        <div className="ml-auto p-2">
          <button>
            <Image src="/img/add.png" alt="Logo" width={24} height={24} className="rounded-full" />
          </button>
        </div>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-white">
            <th className="py-2 px-4 border-b border-r border-black">Nome</th>
            <th className="py-2 px-4 border-b border-r border-black">Cargo</th>
            <th className="py-2 px-4 border-b border-r border-black">Email</th>

            {/* Nova coluna para ações */}
            <th className="py-2 px-4 border-b text-center">
              <div className="flex space-x-4 justify-center">
                <span className="text-black">Ações</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-fuchsia-600' : 'bg-white'}>
              <td className="py-2 px-4 border-b border-r border-black">{member.nome}</td>
              <td className="py-2 px-4 border-b border-r border-black">{member.cargo}</td>
              <td className="py-2 px-4 border-b border-r border-black">{member.email}</td>

              {/* Nova coluna para ações */}
              <td className="py-2 px-4 border-b text-center">
                <div className="flex space-x-4 justify-center">
                  {member.acoes.map((acao, acaoIndex) => (
                    <span key={acaoIndex} className={`cursor-pointer ${acao === 'Excluir' ? 'text-red-500' : 'text-black'} text-center`}>
                      {acao}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersPage;
