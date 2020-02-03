import React, { useState, useEffect } from 'react'

import api from '../../services/api'

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
                        <header/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}