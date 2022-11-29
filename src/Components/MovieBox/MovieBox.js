import { Modal, Button} from 'react-bootstrap';
import React, {useState} from 'react';
import './MovieBox.css';

const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieBox = ({title, poster_path, id, popularity, overview, backdrop_path}) => {

    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false); 

    return (
        <>
            <div className="card text-center my-3 bg-dark rounded-3">
                <div className="card-body">
                    <img
                        className="card-img-top rounded-3"
                        src={API_IMG + poster_path}
                        alt={title}
                    />
                    <div className="card-body">
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={handleShow}
                        >
                            View Detail
                        </button>
                        <Modal size="md" variant="dark" show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title />
                            </Modal.Header>
                            <Modal.Body>
                                <img
                                    className="card-img-top rounded-2"
                                    style={{ width: "100%" }}
                                    src={API_IMG + backdrop_path}
                                    alt={title}
                                />
                                <h1 className="card-title my-2">{title}</h1>
                                <h3 className="card-subtitle my-2">ID: {id} <span>Popularity: {popularity}</span></h3>
                                <p className="card-overview mt-4">{overview}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button style={{ backgroundColor: '#FFD700', color: '#000', border: '1px solid #FFD700', fontSize: '15px', fontWeight: '600'}}>
                                    Add to watchlist
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieBox;