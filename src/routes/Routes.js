import { Routes as ReactRoutes, Route} from 'react-router-dom'
import ToDo from '../components/ToDo/ToDo';
import Home from "../components/Home/Home";
import PokeApi from "../components/PokeApi/PokeApi";

function Routes() {
    return(
        <>
         <ReactRoutes>
            <Route path="/todolist" element={<ToDo/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/pokeapi" element={<PokeApi/>}/>
        </ReactRoutes>
        </>
    )
}

export default Routes;