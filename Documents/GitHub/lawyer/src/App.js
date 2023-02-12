import './App.css';

import {Main} from '../src/components/Main'
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}></Route>
    </Routes>
  );
}

export default App;
