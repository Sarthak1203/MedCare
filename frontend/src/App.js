
import './App.css';
import  {Navbar}  from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Shop} from './Pages/Shop'
import {ShopCategory}  from './Pages/ShopCategory';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Medicine' element={<ShopCategory category="Medicine"/>}/>
        <Route path='/Medical Equipment' element={<ShopCategory category="Medical Equipment"/>}/>
        <Route path="/Women's Health" element={<ShopCategory category="Women's Health"/>}/>
        <Route path='/Baby Care' element={<ShopCategory category="Baby Care"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
