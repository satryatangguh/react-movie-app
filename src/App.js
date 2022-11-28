import React,{ useState, useEffect } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=21ffcbecb3d48c284c502cdad4c17183"
function App() {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])
  

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="">Vidport</Navbar.Brand>
          <Navbar.Brand href="">Trending</Navbar.Brand>
          <Navbar.Toggle aria-control="navbarScroll"></Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav 
              className="me-auto my-2 my-lg-3" 
              style={{maxHeight:'100px'}}navbarScroll>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Movie Search" className="me-2" aria-label="search" name=""></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container'>
        <div className='grid'>
          { movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>) }
        </div>
      </div>
    </>
  );
}

export default App;
