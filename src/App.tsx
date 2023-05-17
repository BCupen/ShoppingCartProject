import { VStack, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Shop from "./pages/Shop";
import CartProvider from "./components/CartProvider";
import { products } from "./assets/productData";
import Products from "./components/Products";
import Contact from "./pages/Contact";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CartProvider>
      <VStack
        bg="brand.cream"
        minH="100vh"
        maxW="100vw"
        spacing="0"
        justifyContent="start"
      >
        <Header onOpen={onOpen} />
        <Routes>
          <Route path="/ShoppingCartProject" element={<Home />} />
          <Route path="/shop" element={<Shop />}>
            <Route index element={<Products products={products} />} />
            <Route
              path="/shop/dogs"
              element={
                <Products
                  products={products.filter(
                    (product) => product.category === "dog"
                  )}
                />
              }
            />
            <Route
              path="/shop/cats"
              element={
                <Products
                  products={products.filter(
                    (product) => product.category === "cat"
                  )}
                />
              }
            />
            <Route
              path="/shop/fish"
              element={
                <Products
                  products={products.filter(
                    (product) => product.category === "fish"
                  )}
                />
              }
            />
          </Route>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Cart isOpen={isOpen} onClose={onClose} />
      </VStack>
    </CartProvider>
  );
}

export default App;
