import React, {useContext} from 'react';

import {Main,Container,Titulo,Legenda, Texto,Lista} from './styles';
import {Context} from '../../components/TextProvider';
import data from '../../assets/data.json';

const Index = () => {
    const {text} = useContext(Context);
   
return(
   <Main>
       <Container>
           <Titulo>Bem Vindo!</Titulo>
           <Legenda>Você foi logado com sucesso!</Legenda>
           <Texto>{text}</Texto>
           <Lista>{JSON.stringify(data, null, '\n')}</Lista>
       </Container>
   </Main>
)};


export default Index;