import "./App.css";
import Home from "./components/Home";
import ProductList1 from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import  {ThemeButton ,GlobalStyle} from "./styles";
import { useState } from "react";
import ProductDetails from "./components/ProductDetails"
import products from "./products";





const theme = {
  light: {
    mainColor: "#242424",
    backgroundColor: "#fefafb", 
    pink: "#ff85a2",
    red: "#ff3232",
  },

  dark: {
    mainColor: "#fefafb", 
    backgroundColor: "#242424", 
    pink: "#ff85a2",
    red: "#ff3232",
  },
};


function App() {

const [_products, setProducts] = useState(products)

const [currentProduct, setCurrentProduct] = useState(null)
  

const [themeOfPage , setTheme] = useState(theme.light);
const [numIcon , setIcon] = useState ("Dark Theme")
const toggleCurrentTheme = () => {
  if(themeOfPage === theme.light) {
    setTheme(theme.dark)
    setIcon("Light Theme")
  }
  if(themeOfPage === theme.dark) {
    setTheme(theme.light)
    setIcon("Dark Theme")

  }

}

const deleteProduct = (productId) => {
  let newProduct = _products.filter(product => product.id !== productId)
  setProducts(newProduct)
}

const setView = () => {
  if (currentProduct) 
  return <ProductDetails product= {currentProduct} setCurrentProduct={setCurrentProduct} />
  else return <ProductList1 products={_products} setCurrentProduct={setCurrentProduct} deleteProduct={deleteProduct} />
}

  return (
    <ThemeProvider theme={themeOfPage}>
      <GlobalStyle />
      <ThemeButton onClick={toggleCurrentTheme}>{numIcon}
   </ThemeButton> 
     <Home />
    { setView()}
    </ThemeProvider>
  );
}

export default App;
