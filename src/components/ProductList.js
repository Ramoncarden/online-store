import React from 'react'

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

const ProductList = () => {
  return (
    // Cart and Navbar area
    <>
      <div x-data="{ cartOpen: false , isOpen: false }" class="bg-white">
        <header>
          <div class="container mx-auto px-6 py-3">
            <div class="flex items-center justify-between">
              <div class="hidden w-full text-gray-600 md:flex md:items-center">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z" fill="currentColor" />
                </svg>
                <span class="mx-1 text-sm">NY</span>
              </div>
              <div class="w-full text-gray-700 md:text-center text-2xl font-semibold">
                Brand
              </div>
              <div class="flex items-center justify-end w-full">
                <button click="cartOpen = !cartOpen" class="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                  <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>

                <div class="flex sm:hidden">
                  <button type="button" class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                      <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <nav class="sm:flex sm:justify-center sm:items-center mt-4">
              <div class="flex flex-col sm:flex-row">
                <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Home</a>
                <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Shop</a>
                <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
                <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
                <a class="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
              </div>
            </nav>
            <div class="relative mt-6 max-w-lg mx-auto">
              <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>

              <input class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
            </div>
            <hr className="mb-3 mt-6 content-center" />
          </div >
        </header >
      </div >


      {/* Product listings */}
      <section class="text-gray-400 body-font">
        <div class="container px-4 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3 flex justify-between">
              <div class="h-full border-2 border-gray-500 rounded-lg overflow-hidden">
                <img class="lg:h-60 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
                  <h1 class="title-font text-lg font-medium text-green-600 mb-3">The Catalyzer</h1>
                  <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-yellow-600 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default ProductList


/* 📔 User Stories
1. User can click on a View Products button on the Landing Page to display the Products Page.

2. User can see a card on the Products Page for each Product showing the product thumbnail, name, price, a short description, and a Select button.

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

