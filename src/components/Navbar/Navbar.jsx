import React, { useContext, useEffect } from 'react';
import { NavbarContainer } from './NavbarStyles';
import { Link } from 'react-router-dom';
import { Contexto } from '../../context/Context';

const Navbar = () => {
  const { hayTareas, setHayTareas } = useContext(Contexto);

  useEffect(() => {
    const storedTareas = localStorage.getItem('tareas');
    if (storedTareas) {
      const parsedTareas = JSON.parse(storedTareas);
      if (parsedTareas.length > 0) {
        setHayTareas(true);
      } else {
        setHayTareas(false);
      }
    } else {
      setHayTareas(false);
    }
  }, [setHayTareas]);

  return (
    <NavbarContainer>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="pokeapi">Poke Api</Link>
      </div>
      <div>
        <Link to="todolist" style={{ color: hayTareas ? 'red' : 'white' }}>
          To Do List
        </Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
