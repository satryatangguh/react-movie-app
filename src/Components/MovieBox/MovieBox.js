import { Modal } from 'react-bootstrap';
import React, {useState} from 'react';
import './MovieBox.css';
import "bootstrap/dist/css/bootstrap.min.css";

const MovieBox = ({title, name, poster_path, id, popularity, overview, backdrop_path}) => {

    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false); 

    return (
        <>
            <div className="card h-100 text-center bg-dark rounded-3">
                <img className="card-img-top h-100" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title || name} />
                <div className="card-body text-light">
                    <button type="button" className="btn btn-dark" onClick={handleShow}>
                        More & Detail
                    </button>
                    <Modal size="md" variant="dark" show={show} onHide={handleClose}>
                        <div className="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={handleClose} aria-label="Close"></button>
                        </div>
                        <div className='modal-body'>
                            <img className="card-img-top rounded-2" style={{ height: "100%" }} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title || name} />
                            <h1 className="card-title my-2">{title || name}</h1>
                            <h3 className="card-subtitle my-2">ID: {id} <span>Popularity: {popularity}</span></h3>
                            <p className="card-overview mt-4">{overview}</p>
                        </div>
                        <div className='modal-footer'>
                            <button type="button" className="btn btn-dark">
                                Add to watchlist
                            </button>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    );
}

export default MovieBox;