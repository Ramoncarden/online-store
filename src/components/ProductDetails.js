import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const ProductDetails = () => {
  const { id } = useParams()
  const [ data, setData ] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get(`http://localhost:8000/Products/${id}`)
      .then((res) => {
        const allProducts = res.data;
        setData(allProducts);
      })
      .catch(error => console.error(error))
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <Link to={"/products"}>Head on back</Link>
    </div>
  )
}

export default ProductDetails
