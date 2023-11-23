// == Import

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// Composants
import App from './components/App/App';

// == Render
const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));


root.render(rootReactElement);
