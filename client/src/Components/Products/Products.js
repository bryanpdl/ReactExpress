import React, { Component } from 'react';

import '../Cards/Cards.css';

class Products extends Component {
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
                <h2 className="title" >Products</h2>
                {this.state.products.map(product =>
                
                <div className="Card">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>
                               
            )}
            </div>
        );
    }
}

export default Products;
