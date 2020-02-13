import React, {useState, useEffect} from 'react'

import { View, ScrollView, AsyncStorage, Image, StyleSheet } from 'react-native'

import SpotList from '../components/SpotList'

import Logo from '../assets/logo.png'

export default function List(){
    const [techs, setTechs] = useState([])

    useEffect(()=>{
        AsyncStorage.getItem('techs').then(storageTechs=>{
            const techsArray = storageTechs.split(',').map(tech=>tech.trim())
            setTechs(techsArray)
        })
    },[])

    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo}/>
            <ScrollView style={styles.scrollTechs}>
                {techs.map(tech=><SpotList key={tech} tech={tech}/>)}
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
    },

    logo:{
        height:35,
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:10
    },

    scrollTechs:{
        marginTop:10
    }
})