import Image from "next/image"

type CardProps = {
    title : string;
    description : string;
    src : string;
}

export default function ProductsCard({title, description, src}: CardProps){
    return(
        <div className="flex flex-col items-center justify-center gap-4 p-4 bg-fuchsia-600 rounded-md">
            <div className="relative w-40 h-60 overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-white rounded-full"></div>
                <Image
                    src={src}
                    alt={title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                />
            </div>
            
            <h1 className="text-2xl font-bebas-neue mt-2">{title}</h1>
            <p className="text-xl font-bebas-neue">{description}</p>
        </div>
    )
}