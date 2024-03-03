type TitleProps = {
    title : string
}

export default function Title({title} : TitleProps) {
    return(
        <div className="flex flex-col justify-center items-center">
            <h1>{title}</h1>
        </div>
    )
}