import React from 'react'
import {useEffect} from 'react'

const Bienvenida=(props)=>{
    const {nombre}=props;
    
    useEffect(()=>{
        const getUsers= async()=>{
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then( data=>{
                console.log(data);
            }
            );
        }
        getUsers().catch(null);
    },[]);


    return(
        <div>
            <h2>Bienvenido {nombre}</h2>
        </div>
    );
}
export default Bienvenida;