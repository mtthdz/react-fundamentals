import React from "react";
import { 
  Link,
  Routes,
  Route
} from 'react-router-dom';
import StylePage from './pages/StylePage'
import ComponentPage from './pages/ComponentPage';
import ReduxPage from './pages/ReduxPage';

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Styles</Link></li>
          <li><Link to="/components">Components</Link></li>
          <li><Link to="/redux">Redux</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={ <StylePage /> } /> 
        <Route path="/components" element={ <ComponentPage /> } /> 
        <Route path="/redux" element={ <ReduxPage /> } /> 
      </Routes>
    </div>
  );
}

export default App;