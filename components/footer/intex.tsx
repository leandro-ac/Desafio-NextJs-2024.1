import Image from "next/image"


export default function Footer() {
    return (
      <div className="bg-fuchsia-600 w-full text-white mt-24 py-8 min-h-[250px] grid grid-cols-3 gap-8 items-center justify-center">
        
        <div className="flex flex-col items-center">
          <span className="text-white">📞</span>
          <span className="text-white">✉️</span>
        </div>
  
        
        <div className="text-center">
          <span className="text-black">CENTRAL DE ATENDIMENTO: contato@gkvaquin.com.br</span>  
          <span className="text-black">ENDEREÇO: Rua José Lourenço Kelmer - UFJF -Instituto de Ciências Exatas - sala 3313</span>
        </div>
  
       
        <div className="flex items-center justify-center">
          <Image src={'/img/gkvaquinLogo.png'} alt={"logo"} width={904} height={904} className="h-40 w-60 rounded-xl"></Image>
        </div>
      </div>
    )
  }

