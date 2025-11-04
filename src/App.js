import './Product.css';
import ProductImage from './components/Product/ProductImage';
import ProductCard from './components/Product/ProductCard';
import ProductInfo from './components/Product/ProductInfo';
import Button from './components/Product/Button';
import Badge from './components/Product/Badge';
import Rating from './components/Product/Rating';
function App() {
  
  return (
    <div className="App">
      <div class="container">
        <div class="product-wrapper">
          <div class="product-list">
            <div class="product-cards-wrapper">
              <ProductCard featured={false}>
                <Badge text="Sale" color="" />
                <ProductImage src="https://i.postimg.cc/bYKnq6HN/lenovo-ideapad.jpg" alt="Product" />
                <ProductInfo name="Lenovo Laptop" price="50000">
                  <div class="description">Lenovo IdeaPad Slim 1 AMD Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) 15ACL6 | 15ALC7 ...</div> 
                  <Rating ratings={2}/>
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
                <Button text="Buy now" variant="secondary" />
              </ProductCard>

              <ProductCard featured={false }>
                <Badge text="New" color="" />
                <ProductImage src="https://i.postimg.cc/9X4XFCJY/headphones.jpg" />
                <ProductInfo name="Wireless Headphones" price="2500">
                  TRIGGR Trinity 2 with Dual Pairing, ENC, Fast Charge, 50H Battery, Rubber Finish, v5.3 Bluetooth  (Midnight Black, On the Ear)
                  <Rating ratings={3}/>
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
                <Button text="Buy now" variant="secondary" />
              </ProductCard>

              <ProductCard featured={true}>
                <Badge text="Trending" color="" />
                <ProductImage src="https://i.postimg.cc/xdYqchc0/shoes.jpg" alt="Product" />
                <ProductInfo name="Nike Go FlyEase Women's Shoes" price="20000">
                  Ditch the laces and get outside. These kicks feature Nike's revolutionary FlyEase technology, making on-and-off a breeze.
                  <Rating ratings={4}/>
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
                <Button text="Buy now" variant="secondary" />
              </ProductCard>
            </div>

            <div class="product-cards-wrapper">
              <ProductCard featured={true}>
                <Badge text="New" color="" />
                <ProductImage src="https://i.postimg.cc/9F6Djr20/iphone-17-pro-max.jpg" alt="Product" />
                <ProductInfo name="Apple iPhone 17 pro max" price="90000">
                  Stay productive and improve your performance with the Super Retina XDR display that is comfortable for the eyes..
                  <Rating ratings={1}/>
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
              </ProductCard>

              <ProductCard featured={false }>
                <Badge text="Sale" color="" />
                <ProductImage src="https://i.postimg.cc/sgK1GKSj/watch.jpg" />
                <ProductInfo name="Rolex - Trending Analog Watch" price="2500">
                  Elegant and versatile design, this men's watch seamlessly transitions from casual to formal occasions.
                  <Rating ratings={2}/>
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
                <Button text="Buy now" variant="secondary" />
              </ProductCard>

              <ProductCard featured={false}>
                <Badge text="New" color="" />
                <ProductImage src="https://i.postimg.cc/rwywTWbz/bag.jpg" alt="bag" />
                <ProductInfo name="Bag - HRX by Hrithik Roshan " price="899">
                  Large 40 L Laptop Backpack Pro Next Ultra Bange Panther Anti-Theft Unisex bag with Shoe compartment (Black)
                  <Rating ratings={4}/>
                </ProductInfo>
                <Button text="Add to Cart" variant="primary" />
                <Button text="Buy now" variant="secondary" />
              </ProductCard>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
