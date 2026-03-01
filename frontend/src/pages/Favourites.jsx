import '../css/Favourites.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/movieCard';

function Favourites(){
    const {favourites} = useMovieContext();
    if(favourites){
        return (
            <div className='favourites'>
                <h2>Your Favourite movies:</h2>
                <div className="movies-grid">
                    {favourites.map((movie) => 
                        movie.title.toLowerCase().startsWith(searchQuery) &&
                        (<MovieCard movie={movie} key={movie.id}></MovieCard>)
                    )}
                </div>
            </div>
        )
    }

    return <div className="favourites-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>Start adding movies your to your favourite list</p>

    </div>
}

export default Favourites;