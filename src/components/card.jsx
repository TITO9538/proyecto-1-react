export function Card({img, roll, name}) {
    return (
        <article className="dark:text-slate-300">
            <div className="w-full flex">
                <img src={img} alt={name} className="w-[90%]"/>
                <p className="transform rotate-90 origin-left w-20 h-10 text-[8px] relative top-[-18px] left-[-8px] whitespace-nowrap">{roll}</p>
            </div>
            <div className="text-sm font-semibold">{name}</div>
        </article>
    )
}