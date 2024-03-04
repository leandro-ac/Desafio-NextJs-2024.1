import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-fuchsia-600 w-full text-white mt-24 py-8 min-h-[250px] grid grid-cols-3 gap-8 items-center justify-center">
      
      <div className="flex flex-col items-center">
        <Link href="https://www.whatsapp.com/?l=pt_br">          
            <Image src="/img/zap.png" alt="WhatsApp" width={32} height={32} />
        </Link>

        <Link href="https://www.instagram.com/codejr/?hl=en">
            <Image src="/img/insta.png" alt="Instagram" width={32} height={32} />
        </Link>

        <Link href="https://www.linkedin.com/company/codejr/mycompany/">
            <Image src="/img/face.png" alt="Facebook" width={32} height={32} />
        </Link>
      </div>

      <div className="text-center">
        <span className="text-black">CENTRAL DE ATENDIMENTO: contato@gkvaquin.com.br</span>  
        <span className="text-black">ENDEREÇO: Rua José Lourenço Kelmer - UFJF -Instituto de Ciências Exatas - sala 3313</span>
      </div>

      <div className="flex items-center justify-center">
        <Link href="/">
            <Image src="/img/gkvaquinLogo.png" alt="Logo" width={120} height={80} className="rounded-xl" />
        </Link>
      </div>
    </div>
  );
}