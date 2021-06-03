import "../App.css";
import products from "../products";
import ProductItem from "./ProductItem"
import {List} from "../styles"


const ProductList1 = () => {
    const element = products.map((product) => (
      
        <ProductItem product = {product} />
    ))
    
     
      return <List>{element}</List>
   
    }


export default ProductList1;

