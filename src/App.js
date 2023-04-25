
import Routes from "./routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import { ContextoProvider } from "./context/Context";

function App() {

  return (
   <>
   <ContextoProvider>
      <Navbar/>
      <Routes>
      </Routes>
    </ContextoProvider>
   </>
  );
}

export default App;
