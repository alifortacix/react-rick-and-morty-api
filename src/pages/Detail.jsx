import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../components/Card/Card'

const Detail = () => {
    const detailStyle = {"flexDirection" : "column"}
    const [character, setCharacter] = useState([])
    const {id} = useParams();
    const requestUrl = "https://rickandmortyapi.com/api/character/"+id
    useEffect( () => {
        axios.get(requestUrl)
        .then(response => setCharacter(response.data))
    }, []);
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-4 d-flex justify-content-center" style={detailStyle}>
                <img className='img-fluid rounded-3' src={character.image} alt={character.image} />
                <h1 className='text-center'>{character.name}</h1>
                <h6 className='text-center'>{character.gender}</h6>
                <h6 className='text-center'>{character.species}</h6>
            </div>
            <div className="col-md-8">
                <ul>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Detail
