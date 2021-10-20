import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

const ProductList = () => {

  // const { data: product, error } = axios.get("http://localhost:8000/Products")
  // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  const [ data, setData ] = useState([]);

  // useEffect(() => {
  //   async function getProducts() {
  //     try {
  //       const res = await axios.get("http://localhost:8000/Products");
  //       setData(res.data);
  //       // console.log(data)
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   getProducts();
  // }, [])

  // async function getProducts() {
  //   try {
  //     const res = await axios.get("http://localhost:8000/Products");
  //     setData(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }


  // if (!data) {
  //   axios.get("http://localhost:8000/Products")
  //     .then(function (res) {
  //       setData(res.data)
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     })
  // }

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


/* 📔 User Stories
1. User can click on a View Products button on the Landing Page to display the Products Page. ***COMPLETED***

2. User can see a card on the Products Page for each Product showing the product thumbnail, name, price, a short description, and a Select button.  ***COMPLETED***

3. User can see a Product Details page displayed when the Select button is clicked showing the same information from the product card, but also a unique product id, a long description, Add to Cart button, and a See More Products button.  ***COMPLETED***

4. User can see a confirmation message when the product is added to the shopping cart.

5. User can click on the See More Products page to return to the Products Page. ***COMPLETED***

6. User can see a Shopping Cart button on both the Landing Page or the Products Page. Hint: a top bar might be a good common location for this button.

7. User can click on the Shopping Cart button to display the Shopping Cart page containing the product id, name, price, and quantity ordered input box for each product previously added to the Shopping Cart.

8. User can see a total purchase amount on the Shopping Card that is calculated as the sum of the quantities multiplied by the unit price for each product ordered.

9. User can adjust the quantity ordered for any product to adjust the total purchase amount.

10. User can click a Place Order button on the Shopping Cart Page to complete the order. User will see a confirmation number when the order has been placed.

11. User can click a Cancel Order button on the Shopping Cart Page to cancel the order. User will see the product quantities and the total purchase amount reset to zero.

12. User can click a See More Products button on the Shopping Cart Page to return to the Products Page. If the order hasn't been placed yet this will not clear the products that have already been added to the Products Page.
-----------------------------
⭐ Bonus features

1. User can see an error message if the quantity ordered exceeds the "on hand" quantity of the product.

2. User can specify a bill to and ship to address when the order is placed from the Shopping Cart Page

3. User can see shipping charges added to the total purchase amount

4. User can see sales taxes added to the total purchase amount

5. Developer will implement the product inventory in an external file or a database. */

