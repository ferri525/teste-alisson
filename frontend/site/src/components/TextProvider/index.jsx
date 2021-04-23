import React, {createContext, useState} from 'react';


export const Context = createContext({text: '', setText: () => {} });
const OfProvider = ({children}) => {
    const [text, setText] = useState('');
   
   
    return (
        <Context.Provider value={{text, setText}}>
            {children}
        </Context.Provider>
    );
};
   


export default OfProvider;