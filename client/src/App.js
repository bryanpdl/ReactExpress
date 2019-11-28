import React, { Component } from 'react';
// import Products from './Components/Products/Products.js'
import Navbar from './Components/Navbar/Navbar.js'
import Card from './Components/Cards/Card.js'
import './Components/Products/Products.css'
import './Components/Cards/Cards.css'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
        products: []
    }
}

componentDidMount() {
    fetch('/api/ui8')
        .then(res => res.json())
        .then(products => this.setState({ products }, () => console.log('Products fetched.', products)))
}

render() {
    return (
        <div>
          <Navbar />
            <h2 className="title" >Products</h2>
            {this.state.products.map(product =>
            
            <Card
             name={product.name}
             price={product.price}
              />

              
                           
        )}
        </div>
    );
  }
  
}

export default App;
