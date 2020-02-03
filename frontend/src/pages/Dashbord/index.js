import React,{useState,useEffect} from 'react'

import api from '../../services/api'

export default function Dashbord(){
    const[spots, setSpots]=useState([])

    useEffect(()=>{
        async function loadSpots(){
            const user_id=localStorage.getItem('user')
            const response=await api.get('/dashbord',{
                headers:{ user_id }
            })
            console.log(response.data)
        }
        loadSpots()
    },[])

    return(
        <div></div>
    )
}