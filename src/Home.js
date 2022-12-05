import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import MovieBox from "./Components/MovieBox/MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_APIURL}trending/all/day?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`).then(response=>{
            setMovies(response.data.results)
        }).catch(err=>{console.log(err)})
    }, [])
    

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=21ffcbecb3d48c284c502cdad4c17183&query=${query}`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setMovies(data.results);
        } catch (e) {
            console.log(e);
        }
    };

    const changeHandler = (e) => {
        setQuery(e.target.value);
    };

    return (
        <>
            <div className="px-4">
                <div className="my-3 mx-3">
                    <form className="d-flex group-search" onSubmit={searchMovie}>
                        <input type="search" className="form-control" placeholder="Search for a movie" aria-label="search" name="query" value={query} onChange={changeHandler}/>
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                    </form>
                </div>
                <div>
                    {movies.length > 0 ? (
                        <div className="container-fluid">
                            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-2">
                                {movies.map((movie, index) => (
                                    <div key={index}>
                                        <MovieBox {...movie} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <h2>Sorry Movie Not Found</h2>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;