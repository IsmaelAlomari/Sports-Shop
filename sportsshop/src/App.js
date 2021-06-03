import "./App.css";
import Home from "./components/Home";
import ProductList1 from "./components/ProductList";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";



function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
     <Home />
<ProductList1 />

    </ThemeProvider>
  );
}

export default App;
