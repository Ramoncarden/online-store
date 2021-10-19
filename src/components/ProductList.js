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
    // Cart and Navbar area
    <>
      <div x-data="{ cartOpen: false , isOpen: false }" className="bg-white">
        <header>
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="hidden w-full text-gray-600 md:flex md:items-center">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                </svg>
                <span className="mx-1 text-sm">NY</span>
              </div>
              <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
                Brand
              </div>
              <div className="flex items-center justify-end w-full">
                <button click="cartOpen = !cartOpen" className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>

                <div className="flex sm:hidden">
                  <button type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                      <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <nav className="sm:flex sm:justify-center sm:items-center mt-4">
              <div className="flex flex-col sm:flex-row">
                <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</Link>
                <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</Link>
                <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</Link>
                <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</Link>
                <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</Link>
              </div>
            </nav>
            <div className="relative mt-6 max-w-lg mx-auto">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>

              <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
            </div>
            <hr className="mb-3 mt-6 content-center" />
          </div >
        </header >
      </div >


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

3. User can see a Product Details page displayed when the Select button is clicked showing the same information from the product card, but also a unique product id, a long description, Add to Cart button, and a See More Products button.

4. User can see a confirmation message when the product is added to the shopping cart.

5. User can click on the See More Products page to return to the Products Page.

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

