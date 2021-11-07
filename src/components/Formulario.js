import React ,{useEffect, useState}from 'react'
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import axios from 'axios';
import Error from './Error';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 15px;
    background-color: #27A541;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #0F672C;
        cursor:pointer;
    }
`;

const Formulario = ({setcriptomonedas,setMoneda}) => {

    const [listacripto,setListacripto]= useState([]);
    const [error,setError]=useState(false);

    const MONEDAS = [
        {codigo:'USD' , nombre:'Dolar de Estados Unidos'},
        {codigo:'MXN' , nombre:'Peso Méxicano'},
        {codigo:'EUR' , nombre:'Euro'},
        {codigo:'GBP' , nombre:'Libra Esterlina'}
    ]

    //Utilizar Use Moneda
    const [moneda,SelectMonedas]=useMoneda('Elije tu Moneda','',MONEDAS);

    //Utilizar UseCriptomonedas

    const [criptomoneda,SelectCripto]=useCriptomoneda('Elije tu criptomoneda','',listacripto);

    //Ejecutar llamdo a la API 

    useEffect(() => {
       const consultarAPI = async()=>{
           const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';       
            
           const resultado = await axios.get(url);
           setListacripto(resultado.data.Data);
        }
        consultarAPI();
    }, [])

    //Cuando el Usuario hace el Submit
    const cotizarMoneda = (e) => {
        e.preventDefault();

    //Validar si ambos campos estan llenos 

    if(moneda===''||criptomoneda===''){
         setError(true);
         return;
        }
    //Pasar los Datos al componente principal

    setError(false);
    setMoneda(moneda);
    setcriptomonedas(criptomoneda);


    }

    return (
        <form
        onSubmit={cotizarMoneda}>

            {error ? <Error mensaje="Todos los campos son Obligatorios"/> : null}

            <SelectMonedas/>
            <SelectCripto/>

            <Boton type="submit"
            value="Calcular"/>
        </form>
    )
}

export default Formulario
