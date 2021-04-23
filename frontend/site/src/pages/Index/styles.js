import styled from 'styled-components';

export const Main = styled.main`
    max-width:100vw;
    max-height:100vh;
`;

export const Container = styled.div `
    height: 50vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    margin-top: 20px;
`;

export const Texto = styled.p`
    margin-top:1.5rem;
    font-weight:bold;
    font-size:1.5rem;
`;

export const Titulo = styled.h1`
    font-size: 2rem;

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`

export const Legenda = styled.h2`
    font-size: 1.5rem;

    
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`

export const Lista = styled.pre`
padding-top:1.5rem;
 font-size: 0.9rem;

 @media (min-width: 768px){
    font-size: 1.2rem;
 }
`

