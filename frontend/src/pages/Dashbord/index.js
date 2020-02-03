import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import './styles.css'

export default function Dashbord() {
    const [spots, setSpots] = useState([])

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user')
            const response = await api.get('/dashbord', {
                headers: { user_id }
            })
            setSpots(response.data)
        }
        loadSpots()
    }, [])

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{backgroundImage: `url(${spot.thumbnail_url})`}}/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$:${spot.price}/dia` : 'GRATUITO'}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}