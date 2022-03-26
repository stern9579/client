import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=> {
                setProducts(res.data.products);
                setLoaded(true);
            })
            .catch(err=>console.log("Error: ", err))
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    console.log(products)
    return (
        <div>
            <>
                <ProductForm />
                <hr/>
                {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
                {/* <ProductList products = {products} /> */}
            </>
        </div>
    )
}