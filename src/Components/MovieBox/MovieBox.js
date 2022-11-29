import { Modal, show, Button} from 'react-bootstrap';
import React, {useState} from 'react';
import './MovieBox.css';

const API_IMG="https://image.tmdb.org/t/p/w500/";
const MovieBox = ({title, poster_path, id, popularity, overview}) => {

    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false); 

    return (
        <>
            <div className="card text-center my-3 bg-dark rounded-3">
                <div className="card-body">
                    <img className="card-img-top rounded-3" src={API_IMG + poster_path} />
                    <div className="card-body">
                        <button
                            type="button"
                            className="btn btn-dark"
                            onClick={handleShow}
                        >
                            View More
                        </button>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img
                                    className="card-img-top"
                                    style={{ width: "14rem" }}
                                    src={API_IMG + poster_path}
                                    alt={title}
                                />
                                <h3>{title}</h3>
                                <h4>Popularity: {popularity}</h4>
                                <h5>Movie ID: {id}</h5>
                                <br />
                                <h6>Overview</h6>
                                <p>{overview}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                >
                                    Close
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