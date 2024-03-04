'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/Home', label: 'home' },
  { href: '/Contato', label: 'contato' },
  { href: '/Membros', label: 'membros' },
  { href: '/Gerenciamento', label: 'gerenciamento' },
  { href: '/Login', label: 'login' },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-10/12 mx-auto">
        <Link href="/" className="flex gap-4 items-center px-4">
          <Image
            src="/img/gkvaquinLogo.png"
            alt="logo"
            width={904}
            height={904}
            className="h-40 w-40 rounded-xl"
          />
        </Link>

        <nav className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? 'Fechar' : 'Menu'}
          </button>
        </nav>

        <nav className={`md:flex flex-col md:flex-row justify-center items-center ${isMenuOpen ? 'block' : 'hidden'} flex-grow`}>
            {links.map((link, index) => (
                <Link href={link.href} key={index}>
                <span
                    onClick={toggleMenu}
                    className="text-2xl text-fuchsia-600 hover:text-white p-2 md:p-4 rounded-xl cursor-pointer block text-center mx-12"
                >
                    {link.label}
                </span>
                </Link>
            ))}
        </nav>

      </div>
    </header>
  );
}

