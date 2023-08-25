
const Movie = (Props)=> {
    const style={
        backdropFilter:"blur(40px)",
        background:`url(${Props.mov.posterurl}}) `,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
    }
    return(
        
    <div className="mov" style={style}>
        <div className="blur">

            <div className="left">
                <img src={Props.mov.posterurl} alt=""/>
            </div>
            <div className="right">
                <h1 className="title">{Props.mov.title}</h1>
                <p><span className="rating">storyline:</span> {Props.mov.storyline}</p>
                <h3>Rating:<span className="rating"> {Props.mov.imdbRating}</span></h3>
                <h2>Actors:</h2>
                <ul>{Props.mov.actors.map((act)=>{
                    return(
                        <li>{act}</li>
                    )
                })}
                </ul>

            </div>
        </div>
    </div>
    )
}

export default Movie;