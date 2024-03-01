import Link from "next/link";
import Image from "next/image"

export default function Footer(){
    return(
        <div className="bg-black w-full text-center mt-24 py-8 min-h[250px] flex flex-col gap-12 items-center justify-center">
            <span className="text-fuchsia-600">CENTRAL DE ATENDIMENTO: contato@gkvaquin.com.br</span>  
            <span className="text-fuchsia-600">ENDEREÇO: Rua José Lourenço Kelmer - UFJF -Instituto de Ciências Exatas - sala 3313</span>
    
            <Image src={'/img/gkvaquinLogo.png'} alt={"logo"} width={904} height={904} className="h-40 w-60 rouded-xl"></Image>      
        </div>
    )
}

