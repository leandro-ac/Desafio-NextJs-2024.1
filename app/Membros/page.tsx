'use client'

import SearchBar from '@/components/SearchBar';
import React, { useState } from 'react'

const MembersPage = () => {
  const initialMembers = [
    { nome: 'Leandro Alvares de Carvalho', cargo: 'Gerente', email: '123@email.com' },
    { nome: 'Maria de Jesus', cargo: 'Gerente', email: '123@email.com' },
    { nome: 'José Silva Santos', cargo: 'Gerente', email: '123@email.com' },
    { nome: 'Pedro Alvares de Santos', cargo: 'Gerente', email: '123@email.com' },
    { nome: 'Marina de Carvalho Silva', cargo: 'Gerente', email: '123@email.com' },
    { nome: 'José Antonio Dias Cabral', cargo: 'Gerente', email: '123@email.com' },
    { nome: 'Carlos José Pereira', cargo: 'Gerente', email: '123@email.com' },
    { nome: 'Ana Maria de Souza', cargo: 'Gerente', email: '123@email.com' },
    { nome: 'Marcia Helena Motta ', cargo: 'Gerente', email: '123@email.com' },
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

      <SearchBar onSearch={handleSearch} />

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-white">
            <th className="py-2 px-4 border-b border-r border-black">Nome</th>
            <th className="py-2 px-4 border-b border-r border-black">Cargo</th>
            <th className="py-2 px-4 border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-fuchsia-600' : 'bg-white'}>
              <td className="py-2 px-4 border-b border-r border-black">{member.nome}</td>
              <td className="py-2 px-4 border-b border-r border-black">{member.cargo}</td>
              <td className="py-2 px-4 border-b">{member.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersPage;
