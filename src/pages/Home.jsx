import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Card from '../components/Card/Card'
import axios from 'axios'

const Home = () => {
    const [query, setQuery] = useState('')
    const [users, setUsers] = useState([])

    const axios = require('axios');
    // Make a request for a user with a given ID
    useEffect(() =>{
        axios.get('https://rickandmortyapi.com/api/character')
            .then(response => setUsers(response.data['results']))
    },[]);

    

    return (
        <div className='container'>
            <div className="row">
                {users.filter((user) =>
                    user.name.toLowerCase().includes(query)
                ).map((user) => (
                    <div className='col-md-4'>
                        <Card key={user.id} name={user.name} imgPath={user.image} desc={user.desc} id={user.id}></Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
