'use client'

import Link from "next/link"
import Image from "next/image"

const links =[
    {href: '/home' , label: 'home'},
    {href: '/contato' , label: 'contato'},
    {href: '/membros' , label: 'membros'},
    {href: '/gerenciamento' , label: 'gerenciamento'},
    {href: '/login' , label: 'login'},
]

export default function Header() {
    return(
        <header className="bg-black sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
            <div className="flex flex-wrap items-center justfy-between w-full md:w-10/12 mx:auto">
                <Link href="/" className="flex gap-4 items-center px-4">
                    <Image src={'/img/gkvaquinLogo.png'} alt={"logo"} width={904} height={904} className="h-40 w-40 rouded-xl"></Image>
                </Link>
                <nav className="flex justify-center">
                    <div className="hidden w-full md:flex justify-end items-center gap-16">

                        {links.map((link, index) =>
                        <Link href={link.href} key={index}>
                            <span className="text-2xl text-fuchsia-600 hover:bg-white/20 p-12 rounded-xl">{link.label}</span>
                        </Link>
                        )}
                        
                    </div>

                </nav>
            </div>

        </header>
    )
}