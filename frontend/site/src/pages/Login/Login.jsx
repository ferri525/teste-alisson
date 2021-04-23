import React, {useState, useContext} from 'react';
import {Main,Formulario,Titulo} from './styles';
import {useHistory} from 'react-router-dom';

import axios from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ModalError from '../../components/ModalError';
import {Context} from '../../components/TextProvider';




const Login = () => {
    const {setText} = useContext(Context);
    const [inputText, setInputText] = useState('');
	const [token, setToken] = useState('')
    const [display, setDisplay] = useState('none')

    const history = useHistory();


     const handleSubmit = async (e) => {
         e.preventDefault();
        try{
            const {data: {route, texto}} = await axios.post('/', {token,inputText})
            setText(inputText);
            history.push('/index')
        }catch(e){
            console.log(e);
            setDisplay('initial')
        }
    }
    return (
    <Main>
         <Titulo>Teste Alisson</Titulo>
        <Formulario onSubmit={(e) => handleSubmit(e)}>
            <Input
                 type="text"
                 name="texto"
                 placeholder="TEXTO PRÓXIMA PÁGINA"
                 onChange = {(e) => setInputText(e.target.value)}
                 value={inputText} 
            />

            <Input 
                type="password"
                name="token"
                placeholder="SENHA"
                onChange = {(e) => setToken(e.target.value)}
                value={token}  
            />

            <ModalError display={display} />
            <Button 
                type="submit" 
                text="LOGAR"
            />

        </Formulario>
    </Main> 
    );   

};


export default Login;