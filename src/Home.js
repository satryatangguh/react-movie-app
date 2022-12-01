import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login"
import MovieBox from "./Components/MovieBox/MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container,
    Form,
    FormControl,
    Button,
    Row,
    Col,
} from "react-bootstrap";
// import * as dotenv from 'dotenv';


function Home() {
    // dotenv.config()
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_APIURL}movie/popular?api_key=${process.env.REACT_APP_APIKEY}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMovies(data.results);
            });
    }, []);

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
            <Form className="d-flex" onSubmit={searchMovie}>
                <FormControl
                    type="search"
                    placeholder="Movie Search"
                    className="me-2"
                    aria-label="search"
                    name="query"
                    value={query}
                    onChange={changeHandler}
                ></FormControl>
                <Button variant="secondary" type="submit">
                    Search
                </Button>
            </Form>
            <div>
                {movies.length > 0 ? (
                    <Container fluid>
                        <Row lg={5} md={3} sm={2} xs={2}>
                            {movies.map((movieReq) => (
                                <Col key={movieReq.id}>
                                    <MovieBox {...movieReq} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                ) : (
                    <h2>Sorry Movie Not Found</h2>
                )}
            </div>
        </>
    );
}

export default Home;