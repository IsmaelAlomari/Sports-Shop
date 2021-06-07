import DeleteButton from "../components/DeleteButton/DeleteButton"

const ProductItem = (props)=> {

    const product = props.product

    return ( 
    <div className ="product-images">
    <img className="sport-images" onClick={() => props.setCurrentProduct(product)} src={product.image} alt={""} />
    <div className="style-words" >{product.name}</div>
    <div>{product.description}</div>
    <div>{product.price}</div>
    <DeleteButton deleteProduct ={props.deleteProduct} productId={product.id} />
    </div>
    )
   
}
  
export default ProductItem
