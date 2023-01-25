//import logo from './logo.svg';
import './App.css'
import { Common } from './pages/Common'
import {
  //createBrowserRouter,
  //RouterProvider,
  Route,
  Routes,
  //Link,
} from "react-router-dom"
import { ProductsPage } from './pages/ProductsPage'
import { OneProductPage } from './pages/OneProductPage'



export const App = () => {
  return (<><Routes>
    <Route path='/' element={<Common />}>
      <Route path='/' element={<ProductsPage />}></Route>
      <Route path='/product/:id' element={<OneProductPage />}></Route>
    </Route>
    
  </Routes></>

  );
}

