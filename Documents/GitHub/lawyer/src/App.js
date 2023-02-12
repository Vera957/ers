import './App.css';

import {Main} from '../src/components/Main'
import { Route, Routes } from 'react-router';
import { Secondary } from './components/Secondary';
import { Link } from 'react-router-dom';

function App() {

  return (<>
    <Link to='/'>Main</Link>
    <Link to='secondary'>Secondary</Link>
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/secondary' element={<Secondary/>}></Route>
    </Routes>
  </>);
}

export default App;
