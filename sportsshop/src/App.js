import logo from './logo.svg';
import products from "./products";
import "./App.css";

function App() {

  const product11 = products.map((product) => (
   <div className ="productImages">
      <img className="sport-Images" src={product.image} />
      <div className="styleOfWords">{product.name}</div>
      <div>{product.price}</div>
      
    </div>
  ));

  return (
    <div>
      <header className= "GalaxySports">Galaxy Sports</header>
      <p className= "description"> Get your own special sports equipment from Galaxy sports to
practice your favorite sport
</p>

<img className= "imagesport" src = "https://lh3.googleusercontent.com/2BBO1xZFq-dUB4igoS0nsMeHW4-v2smnvauhXrnCwer0PM6LmlgWHoLeUHHZjfLl8nfwRQNreYGcognRyvLQi92Xuw=w1000" />
<div className="store">Products in Store </div>
        <div className="productsList">{product11}</div>
    
    </div>
  );
}

export default App;
