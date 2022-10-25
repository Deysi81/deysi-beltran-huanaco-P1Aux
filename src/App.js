import { BrowserRouter } from 'react-router-dom';
import { NavbarBeltran} from './components/routes/NavbarBeltran';
import { RoutesLayoutBeltran} from './components/routes/RoutesLayoutBeltran';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*<NavbarBeltran/>*/}
         <RoutesLayoutBeltran/>
      </BrowserRouter>
    </div>
  );
}

export default App;
