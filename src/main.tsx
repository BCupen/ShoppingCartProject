import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx';
import './assets/BrunoAceSC-Regular.ttf'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import '@fontsource/righteous'
import './index.css'

const theme = extendTheme({
  fonts:{
    heading: `'Righteous'`,
    body: `'Roboto'`
  },
  colors: {
    brand:{
      charcoal: '#122620',
      cream: '#F4EBD0',
      gold: '#D6AD60',
      tan: '#B68D40',
      cartCount: '#D3BCBC' 
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
          <App />          
      </ChakraProvider>
    </BrowserRouter>   
  </React.StrictMode>,
)
