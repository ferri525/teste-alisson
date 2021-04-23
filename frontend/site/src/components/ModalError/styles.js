import styled from 'styled-components';


export const Error = styled.p`
    color:red;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:1rem;
    font-size:0.9rem;
    font-weight:bold;
    display: ${({display}) => display };


    @media (min-width: 768px){
        font-size:1.5rem;
    }
`;