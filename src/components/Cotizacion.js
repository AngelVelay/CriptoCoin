import styled from '@emotion/styled';
import React from 'react'

const ResultadoDiv = styled.div`
    color: #FFFF;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
    background: #326AC0;
    margin: 20px 0 25px;
    overflow: hidden;
    padding: 10px;
    border-radius:10px;
`;

const Info = styled.p`

    font-size: 18px;
    text-align:center;
    padding:5px;
    span {
        font-weight:bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
    text-align:center;
    margin: 20px 0 25px;
    padding: 10px;
    span {
        font-weight:bold;
    }
`


const Cotizacion = ({resultado}) => {
    
    if(Object.keys(resultado).length === 0) return null;

    console.log(resultado);
    
    return (
        <ResultadoDiv>
            <Precio>El precio es : <span>{resultado.PRICE}</span></Precio>
            <Info>El precio mas alto del dia es: <span>{resultado.HIGHDAY}</span></Info>
            <Info>El precio mas bajo del dia es: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variación en las utimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima Actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
    )
}

export default Cotizacion
