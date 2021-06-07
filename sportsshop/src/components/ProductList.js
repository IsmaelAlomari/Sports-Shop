
import ProductItem from "./ProductItem"
import {List} from "../styles"
import SearchBar from "./SearchBar"
import { useState } from "react";




const ProductList1 = (props) => {
  
  const [query ,setQuery]= useState("")
    
  let element = props.products
  .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
  .map((product)=>(
  <ProductItem setCurrentProduct={props.setCurrentProduct} product={product} deleteProduct={props.deleteProduct} key={product.id}/>

  ))
        return ( 
        
<div>
          <SearchBar setQuery={setQuery}/>
                 <List>{element}</List>
                 
               </div> )
       
                
              }
  
   
    


export default ProductList1;

