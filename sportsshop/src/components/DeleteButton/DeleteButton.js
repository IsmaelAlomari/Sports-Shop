

const DeleteButton = (props) => {

    return (
<button onClick={() => props.deleteProduct(props.productId) }>Remove</button>
    )
}

export default DeleteButton