import { createContext } from 'react';

// Instanciar el objeto Context usando el factory createContex
// Definimos el "interface" del subtipo
// exportamos la variable

export const Context = createContext({
    title: '',
});

// Creamos un componente Provider
// recive por props children
// utiliza la propiedad "Provider" del objeto Context

// Al Contex.Provaider le asignamos el valor del contexto
// o una variable con dicho valor

const title = 'TODO List with Flux & Context';

const contextValue = {
    title,
};

export function ContextProvider({ children }) {
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
