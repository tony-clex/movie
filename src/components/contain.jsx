export default function contain ({item, redirect}) {
    return (
        <>
        <div className="movie">
        <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.backdrop_path}`} alt="" className='tony' onClick={()=>redirect(item)}/>
        </div>
        </>
    )
}