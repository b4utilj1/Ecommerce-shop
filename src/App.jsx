import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { Home } from './components/Home.jsx'
import { Category } from './pages/Category.jsx'
import { Product } from './pages/Product.jsx'
import { Cart } from './pages/Cart.jsx'
import { Login } from './pages/Login.jsx'
import { Footer } from './components/Footer.jsx'


//Images
import bannerMens from './assets/bannermens.png'
import bannerWomen from './assets/bannerwomens.png'
import bannerKids from './assets/bannerkids.png'


function App(){

  return (
    <main className='bg-white text-teal-900'>
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mens' element={<Category category='men' banner={bannerMens}/>} />
        <Route path='/womens' element={<Category category='women' banner={bannerWomen}/>} />
        <Route path='/kids' element={<Category category='kid' banner={bannerKids} />} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
        </Route>
        <Route path='/cart-page' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
       </Routes>
      <Footer/>
       </BrowserRouter>

    </main>
  )
}

export default App
