import {useState} from 'react'
import PropType from 'prop-types';

export const CounterApp = ({value})=>{
    //counter/setCounter no es nada mas como nosotros le quisimos poner
    const [counter, setCounter] = useState(value); //value es el valor inicial de nuestro hook y viene desde el main.jsx
    //lo que hace setCounter es cambiarnos nuestro valor de counter, debido a que es una constante y no se puede cambiar el valor
    const handleAdd = ()=>{
        setCounter(counter +1)
        //setCounter((c)=>c+1) //esta es otra forma de poder hacerlo 
    }

    //para restar
    const handleLess = () =>{
        setCounter(counter -1)
    }

    //Para restart
    const handleReset = ()=>{
        setCounter(value) //yo lo intente con counter = value pero esto da un error
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleLess }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterApp.PropType ={
    value: PropType.number.isRequired
}