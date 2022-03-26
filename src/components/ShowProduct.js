import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
export default props => {

    const {id} = useParams();
    const [product, setproduct] = useState({});

    useEffect(()=>{
        //make a post request to create a new person
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res=>{
                console.log(res.data)
                setproduct(res.data.product)
            })
            .catch(err=>console.log(err))
    }, [])

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3>
        </div>
    )
}