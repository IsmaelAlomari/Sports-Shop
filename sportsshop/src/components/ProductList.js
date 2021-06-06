import "../App.css";
import products from "../products";
import ProductItem from "./ProductItem"
import {List} from "../styles"
import SearchBar from "./SearchBar"
import { useState } from "react";


const ProductList1 = () => {
  
  const [query ,setQuery]= useState("")
    
  let filter = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
  let element =filter.map((product) => ( <ProductItem product = {product} />))
   
  
  
     
      return ( <>
     
                <SearchBar setQuery={setQuery}/>
                 <List>{element}</List>
                </>
                )
              }
  
   
    


export default ProductList1;

