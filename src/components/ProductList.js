import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
export default props => {

    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        // console.log(productId)
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, idx) => {
                return (
                    <div key={product._id}>
                        <Link to={"/product/" + product._id} style={{ marginRight: 10 }}>{product.title}</Link>
                        <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
                        |
                        <button onClick={(e) => { deleteProduct(product._id) }}>
                            Delete
                        </button>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}