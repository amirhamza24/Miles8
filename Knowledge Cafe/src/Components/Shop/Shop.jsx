import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='w-10/12 mx-auto mt-10'>
            <div className='shop-container'>
                <div className="product-container mr-10 mb-10">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product> )
                    }
                </div>

                <div className="bookmarked">
                    <h4>Bookmarked sEction here</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;