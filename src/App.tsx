import { useState } from 'react'
import { VStack, useDisclosure } from '@chakra-ui/react'
import Header from './components/Header'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './components/Cart'
import { CartItem } from './interfaces'

function App() {
  const { isOpen, onOpen, onClose} = useDisclosure();
  const [ cart, setCart ] = useState<CartItem[]>([]); 

  return (
    <VStack bg='brand.cream' minH='100vh' maxW='100vw'>
      <Header onOpen={onOpen}/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Cart isOpen={isOpen} onClose={onClose} cartItems={cart}/>
    </VStack>
  )
}

export default App
