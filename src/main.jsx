import ReactDOM from 'react-dom/client';
//se usa esta linea para agregar los stilos de boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Home from './Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
      <BrowserRouter>
       <Home/>
     </BrowserRouter>
  );

