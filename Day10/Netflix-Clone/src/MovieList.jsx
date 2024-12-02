
import movies from "./movies";
import "./MoviesList.css"
function MovieList() {
  return (
    <div className="movie-list">
        {movies.map((movies)=>(
            <div key={movies.id} className="movie-card">
                <img src={movies.image} alt="" classNae="movie-img" />
                <h1>Title:{movies.title}</h1>
                <h2>Language:{movies.language}</h2>
                <h2>Cost:{movies.cost}</h2>
            </div>
        ))} 
      
    </div>
  )
}

export default MovieList;