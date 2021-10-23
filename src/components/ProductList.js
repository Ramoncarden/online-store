import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios.get("http://localhost:8000/Products")
      .then((res) => {
        const allProducts = res.data;
        setData(allProducts);
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      {/* Product listings */}
      <section className="text-gray-500 body-font">
        <div className="container px-4 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map(item => (
              <
                div key={item.id} className="p-4 md:w-1/3 flex justify-between mb-6">
                <div className="h-full rounded-lg">
                  <img className="lg:h-72 md:h-36 w-full object-scale-down object-center py-2" src={item.image} alt="blog" />

                  <div className="p-6 bg-gray-100 h-3/6 relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{item.category}</h2>
                    <h1 className="title-font text-lg font-medium text-green-600 mb-3">{item.title}</h1>
                    <p className="leading-relaxed max-h-24 mb-3 no-scrollbar overflow-ellipsis overflow-auto ...">{item.description}</p>
                    <div className="flex items-center absolute inset-x-6 bottom-3">
                      <Link to={`/products/${item.id}`} className="text-yellow-600 hover:text-yellow-700 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                      <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm">
                        <p>${item.price}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


export default ProductList


