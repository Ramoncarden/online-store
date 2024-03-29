import React from 'react'
import { Link } from 'react-router-dom'

const ProductsNav = (props) => {
  const { countCartItems } = props;

  return (
    <div>
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
              <Link to='/'>
                <div className="flex items-center justify-center text-3xl font-bold font-logoFont text-green-800">
                  <svg className="w-10 h-10 mr-1 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                  </svg>
                  Chic
                </div>
              </Link>

              {/* ********** cart link ************** */}
              <div className="flex items-center justify-end w-full">
                <Link to="/cart">
                  <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0 relative flex">
                    <svg className="h-6 w-6 mt-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    {countCartItems ? (
                      <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{countCartItems}
                      </span>
                    ) : (
                      ''
                    )}
                  </button>
                </Link>
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
                <Link to="/" className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">Home</Link>
                <Link to="/products" className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">Shop</Link>
                <Link to="/" className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">Categories</Link>
                <Link to="/" className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">Contact</Link>
                <Link to="/" className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0">About</Link>
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
    </div>
  )
}

export default ProductsNav
