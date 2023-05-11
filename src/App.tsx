import { useState } from 'react'
import { VStack, useDisclosure } from '@chakra-ui/react'
import Header from './components/Header'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './components/Cart'
import Shop from './pages/Shop'
import { CartItem } from './interfaces'
import { products } from './assets/productData';
import Products from './components/Products'

function App() {
  const { isOpen, onOpen, onClose} = useDisclosure();
  const [ cart, setCart ] = useState<CartItem[]>([]); 

  return (
    <VStack bg='brand.cream' minH='100vh' maxW='100vw' spacing='0'>
      <Header onOpen={onOpen}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop' element={<Shop />}>
            <Route index element={<Products products={products}/>}/>
            <Route path='/shop/dogs' element={<Products products={products.filter(product => product.category === 'dog')}/>}/>
            <Route path='/shop/cats' element={<Products products={products.filter(product => product.category === 'cat')}/>}/>
            <Route path='/shop/fish' element={<Products products={products.filter(product => product.category === 'fish')}/>}/>
        </Route>
      </Routes>
      <Cart isOpen={isOpen} onClose={onClose} cartItems={cart}/>
    </VStack>
  )
}

export default App
