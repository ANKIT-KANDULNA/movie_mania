import MovieCard from "../components/movieCard"
import { useState } from "react"
import '../css/Home.css'

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Frozen", release_date: "2013"},
        {id: 2, title: "Mufasa", release_date: "2024"},
        {id: 3, title: "Avengers", release_date: "2012"},
    ]

    const onHandleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        // setSearchQuery("");
    }

    return <div className="home">
        <form onSubmit={onHandleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for Movies..." 
                className="search-input"
                value = {searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>
        <button type="submit" className="submit-btn">Search</button>

        <div className="movies-grid">
            {movies.map((movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) &&
                (<MovieCard movie={movie} key={movie.id}></MovieCard>)
            )}
        </div>
    </div>
}

export default Home;