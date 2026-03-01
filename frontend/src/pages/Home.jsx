import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react"
import { searchMovies, getPopularMovies } from "../services/Api";
import '../css/Home.css'

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch(err) {
                console.log(err);
                setError("Failed to load movies");
            } finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    const onHandleSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return;
        if(loading) return;

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch(err) {
            console.log(err);
            setError("Failed to search movies...")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="home">
            {/* ✅ FIX 1: button is now INSIDE the form so it triggers onHandleSearch */}
            <form onSubmit={onHandleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for Movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">
                    <div className="loading-spinner"></div>
                </div>
            ) : (
                <div className="movies-grid">
                    {/* ✅ FIX 2: toLowerCase on searchQuery so filtering is case-insensitive */}
                    {movies.map((movie) =>
                        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                        (<MovieCard movie={movie} key={movie.id} />)
                    )}
                </div>
            )}
        </div>
    )
}

export default Home;
