import { createContext } from 'react';
import { useState } from 'react';

export const Contexto = createContext();

export const ContextoProvider = ({ children }) => {

  const checkLocalStorage = () => {
    const storedTareas = localStorage.getItem('tareas')
    return storedTareas && JSON.parse(storedTareas).length > 0
  }
  const [hayTareas, setHayTareas] = useState(checkLocalStorage())

  return (
    <Contexto.Provider value={{ hayTareas, setHayTareas }}>
      {children}
    </Contexto.Provider>
  );
};
