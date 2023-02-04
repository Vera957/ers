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
import { WishListPage } from './pages/WishListPage'
import { ProducerPage } from './pages/ProducerPage'



export const App = () => {
  return (<><Routes>
    <Route path='/' element={<Common />}>
      <Route path='/' element={<ProductsPage />}></Route>
      <Route path='/product/:id' element={<OneProductPage />}></Route>
      <Route path='/wishlist' element={<WishListPage />}></Route>
      <Route path='/producer' element={<ProducerPage/>}></Route>
    </Route>
    
  </Routes></>

  );
}

