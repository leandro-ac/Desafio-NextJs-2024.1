import ProductsCard from "../Cards";
import Title from "../Title";

export default function Produtos(){
    return(
        <div>
            <div className="w-full space-y-12">
                <div className="mb-4 mt-8 text-6xl text-white">
                    <Title title={"Maiores Sucessos"}/>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                    <ProductsCard title={"CAVAQUINHO"} description={"R$:389.90"} src={"/img/cavaquinho.png"}/>
                    <ProductsCard title={"PANDEIRO"} description={"R$:129.90"} src={"/img/pandeiro.png"}/>
                    <ProductsCard title={"TANTAN"} description={"R$:289.90"} src={"/img/tantan.png"}/>
                </div>
            </div>

            <div className="w-full space-y-12">
                <div className="mb-4 mt-8 text-3xl text-white">
                    <Title title={"PERCUSSÃO"}/>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                    <ProductsCard title={"BATERIA"} description={"R$:889.90"} src={"/img/bateria.png"}/>
                    <ProductsCard title={"PANEDIRO"} description={"R$:129.90"} src={"/img/pandeiro.png"}/>
                    <ProductsCard title={"TANTAN"} description={"R$:289.90"} src={"/img/tantan.png"}/>
                    <ProductsCard title={"CAJON"} description={"R$:329.90"} src={"/img/cajon.png"}/>
                </div>
            </div>

            <div className="w-full space-y-12">
                <div className="mb-4 mt-8 text-3xl text-white">
                    <Title title={"CORDAS DEDILHADAS"}/>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                    <ProductsCard title={"VIOLÃO"} description={"R$:429.90"} src={"/img/violao.png"}/>
                    <ProductsCard title={"CAVAQUINHO"} description={"R$:389.90"} src={"/img/cavaquinho.png"}/>
                    <ProductsCard title={"BANJO"} description={"R$:459.90"} src={"/img/banjo.png"}/>
                    <ProductsCard title={"GUITARRA"} description={"R$:519.90"} src={"/img/guitarra.png"}/>
                </div>
            </div>

            <div className="w-full space-y-12">
                <div className="mb-4 mt-8 text-3xl text-white">
                    <Title title={"CORDAS FRICCIONADAS"}/>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                    <ProductsCard title={"VIOLINO"} description={"R$:399.90"} src={"/img/violino.png"}/>
                    <ProductsCard title={"VIOLONCELO"} description={"R$:729.90"} src={"/img/violoncelo.png"}/>
                    <ProductsCard title={"CONTRABAIXO"} description={"R$:1209.90"} src={"/img/contrabaixo.png"}/>
                    <ProductsCard title={"VIOLA"} description={"R$:429.90"} src={"/img/viola.png"}/>
                </div>
            </div>

            <div className="w-full space-y-12">
                <div className="mb-4 mt-8 text-3xl text-white">
                    <Title title={"SOPROS"}/>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                    <ProductsCard title={"FLAUTA"} description={"R$:219.90"} src={"/img/flauta.png"}/>
                    <ProductsCard title={"CLARINETE"} description={"R$:369.90"} src={"/img/clarinete.png"}/>
                    <ProductsCard title={"SAXOFONE"} description={"R$:329.90"} src={"/img/saxofone.png"}/>
                    <ProductsCard title={"GAITA"} description={"R$:109.90"} src={"/img/gaita.png"}/>
                </div>
            </div>
        </div>

        

        
    )
}