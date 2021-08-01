import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Navigation from './Navigation';
import Countries from './Countries';
import Country from './Country';

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Route exact path="/">
        <Countries />    
      </Route>
      <Route exact path="/countries/:name" children={<Country />}/>
    </Router>
    </>
  );
}

export default App;
