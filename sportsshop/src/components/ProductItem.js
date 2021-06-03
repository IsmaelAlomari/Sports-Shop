

const ProductItem = (props)=> {
    const product = props.product
    return ( <div className ="product-images">
    <img className="sport-images" src={product.image} />
    <div className="style-words" >{product.name}</div>
    <div>{product.price}</div>
    </div>)
   
}
  
export default ProductItem
