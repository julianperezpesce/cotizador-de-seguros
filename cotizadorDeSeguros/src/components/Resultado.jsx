import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: left;
`;

const ResultadoCotizacion = styled.div`
    text-align: left;
    padding: .5rem;
    margin-top: 1rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    position: relative;
`;
const TextoCotizacion = styled.p`
    color: #00838F;
    margin-top: 2rem;
    padding: 1rem;
    text-align: left;
    text-transform: uppercase;
    font-weight: bold;

`;

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) 
        ? <Mensaje>Elija marca, año y plan</Mensaje>
        : 
            (
                <ResultadoCotizacion>
                    <TransitionGroup
                        component="span"
                        className="resultado"    
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{ enter: 500, exit: 500 }}
                        >
                            <TextoCotizacion>El total es: $<span>{cotizacion}</span> </TextoCotizacion>        
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
            )
    )
}
//     if (cotizacion === 0) return null

//     return ( 
//         <Fragment>
//             <h1>Resultado </h1>
//             <p>Total: ${cotizacion}</p>
//         </Fragment>
        
//      );
Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
} 
export default Resultado;