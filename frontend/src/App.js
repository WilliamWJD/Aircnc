import React,{useState} from 'react';

import api from './services/api'

import './App.css'
import logo from './assets/logo.svg'

function App() {
  const [email, setEmail]=useState('')

  async function handleSubmit(event){
    event.preventDefault()

    const response=await api.post('/user',{
      email
    })

    const { _id } = response.data

    localStorage.setItem('user',_id)
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>Ofereça <strong>spots</strong> para os programadores e encontre <strong>talentos</strong> para sua empresa</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email" placeholder="Seu melhor e-mail"/>
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
