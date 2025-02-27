import Image from "next/image";

export function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-fuchsia-600">
      <div className="w-full lg:w-1/2">
        <Image src="/img/instrumento.jpeg" alt="instrumentos" width={904} height={904} className="w-full h-[70vh] filter grayscale mb-4 lg:mb-0" />
      </div>

      <div className="w-full lg:w-1/2">
        <div className="p-4">
          <p className="text-7xl">GKVAQUIN: O ritmo perfeito para sua melodia!</p>
        </div>
        <div className="p-4">
          <p className="text-4xl">Bem-vindo ao GKvaquin!</p>
          <p className="text-2xl">Desde o cavaco pro pagode até o violino pra serenata. Só aqui você encontra variedade, preço e satisfação! Não perca tempo, adquira agora seu instrumento e leve a vida com mais harmonia!</p>
        </div>
      </div>
    </div>
  );
}
