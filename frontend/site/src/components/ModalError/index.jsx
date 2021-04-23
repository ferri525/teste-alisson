import React from 'react';

import {Error} from './styles';

const ModalError = props => (
    <Error display={props.display}> Token Errado. Tente Novamente!</Error>
);

export default ModalError;