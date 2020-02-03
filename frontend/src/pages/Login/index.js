import React,{useState} from 'react'

import api from '../../services/api'

export default function Login({ history }) {
    const [email, setEmail] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await api.post('/user', {
            email
        })
        const { _id } = response.data
        localStorage.setItem('user', _id)
        history.push('/dashbord')
    }

    return (
        <>
            <p>Ofereça <strong>spots</strong> para os programadores e encontre <strong>talentos</strong> para sua empresa</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Seu melhor e-mail" 
                    onChange={event=>setEmail(event.target.value)}
                />
                <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    )
}