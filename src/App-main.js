import './Product.css';
import ProductImage from './components/Product/ProductImage';
import ProductCard from './components/Product/ProductCard';
import ProductInfo from './components/Product/ProductInfo';
import Button from './components/Product/Button';
import Badge from './components/Product/Badge';

function App() {
  
  return (
    <div className="App">
      <div class="container">
        <div class="product-wrapper">
          <div class="product-list">
            <div class="product-cards-wrapper">
              <ProductCard featured={true}>
                <Badge text="Sale" color="" />
                <ProductImage src="https://i.postimg.cc/bYKnq6HN/lenovo-ideapad.jpg" alt="Product" />
                <ProductInfo name="Wireless Headphones" price="$79.99">
                  High-quality sound with noise cancellation
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
              </ProductCard>

              <ProductCard featured={true }>
                <Badge text="Sale" color="" />
                <ProductImage src="https://i.postimg.cc/9X4XFCJY/headphones.jpg" />
                <ProductInfo name="Wireless Headphones" price="2500">
                  High-quality sound with noise cancellation
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
              </ProductCard>

              <ProductCard featured={true}>
                <Badge text="Sale" color="" />
                <ProductImage src="https://i.postimg.cc/xdYqchc0/shoes.jpg" alt="Product" />
                <ProductInfo name="Wireless Headphones" price="$79.99">
                  High-quality sound with noise cancellation
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
              </ProductCard>
            </div>

            <div class="product-cards-wrapper">
              <ProductCard featured={true}>
                <Badge text="Sale" color="" />
                <ProductImage src="https://i.postimg.cc/9F6Djr20/iphone-17-pro-max.jpg" alt="Product" />
                <ProductInfo name="Wireless Headphones" price="$79.99">
                  High-quality sound with noise cancellation
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
              </ProductCard>

              <ProductCard featured={true }>
                <Badge text="Sale" color="" />
                <ProductImage src="https://i.postimg.cc/sgK1GKSj/watch.jpg" />
                <ProductInfo name="Wireless Headphones" price="2500">
                  High-quality sound with noise cancellation
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
              </ProductCard>

              <ProductCard featured={true}>
                <Badge text="Sale" color="" />
                <ProductImage src="https://i.postimg.cc/rwywTWbz/bag.jpg" alt="Product" />
                <ProductInfo name="Wireless Headphones" price="$79.99">
                  High-quality sound with noise cancellation
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
              </ProductCard>
            </div>
            
          </div>
        </div>
      </div>

      {/* 
      const name = "Prince Jha";
      const currentYear = new Date().getFullYear();
      import ClassComponent from './components/ClassComponent';
      import FunctionComponent from './components/FunctionComponent';
      import Welcome from './components/Welcome';
      import ButtonComponent from './components/ButtonComponent';
      import InfoCard from './components/InfoCard';
      import Card from './components/Card';
      import Navbar from './components/Navbar';
      
      
      <div>
        <p>Name: {name}</p>
        <p>Current Year: {currentYear}</p>
        <p>Next Year: {currentYear+1}</p>
      </div>
      <FunctionComponent />
      <ClassComponent />
      <Welcome/>
      <Welcome name='Prince'/>
      <ButtonComponent text="Click Me" />
      <InfoCard name="Sonali Patil" age="30" occupation="Student" />
      <Card>
        <h1>Name: Sonali</h1>
        <p>Occupation: IT engineer</p>
        <p>B.E Computer science</p>
      </Card>
      <Card>
        <h1>Name: Pranali</h1>
        <p>Occupation: Lawyer</p>
        <p>L.L.B</p>
        <ButtonComponent text="Visit" />
      </Card>
      <Navbar /> */}
    </div>
  );
}

export default App;
