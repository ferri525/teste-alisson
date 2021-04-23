import React from 'react';

import {Container,Button} from './styles';

const Buttons = props => (
    <Container>
        <Button {...props} >{props.text}</Button>
    </Container>
);


export default Buttons;