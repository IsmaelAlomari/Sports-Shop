
import { DetailWrapper } from "../styles";

const ProductDetails = (props) => {
  let product = props.product
  return (

    <DetailWrapper>
      
      <h1>{product.name}</h1>
      <img src={product.image} alt={""} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={()=> props.setCurrentProduct(null)} > Go Back </button>
    </DetailWrapper>
  );
};

export default ProductDetails