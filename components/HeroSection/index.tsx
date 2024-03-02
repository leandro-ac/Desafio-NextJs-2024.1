import Image from "next/image"

export function HeroSection(){
    return(
        <div>
            <div>
                <Image src="/img/instrumento.jpeg" alt={"instrumentos"} width={904} height={904} className="w-full h-[70vh]  filter grayscale"/>
            </div>
            <div className="flex justify-between mt-4 bg-fuchsia-600">
                <div className="w-1/2 p-4">
                    <p>GKVAQUIN: O ritmo perfeito para sua melodia!</p>
                </div>
                <div className="w-1/2 p-4">
                    <p>Bem-vindo ao GKvaquin!</p>
                    <p>Desde o cavaco pro pagode até o violino pra serenata. só aqui você encontra variedade, preço e satisfação! Não perca tempo, adquira agora seu instrumento e leve a vida com mais harmonia!</p>
                </div>
            </div>
        </div>    
    )
}