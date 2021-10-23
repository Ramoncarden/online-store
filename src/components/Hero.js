import React from 'react'
import { Link } from 'react-router-dom'

const imgClass = "bg-hero-background min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10"
const submitBtnClass = "px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out"
const viewProductsBtnClass = "mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-green-700 to-green-800 text-white outline-none focus:outline-none hover:shadow-lg hover:from-green-800 transition duration-200 ease-in-out"

const Hero = () => {
  return (
    <div className={imgClass}>
      <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
        <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg sm:rounded-3xl">

          <div className="px-20 py-6 bg-purple-50 rounded-lg">

            {/* *********************** Logo section ************************************* */}

            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center text-3xl font-bold font-logoFont text-green-800">
                  <svg className="w-10 h-10 mr-1 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                  </svg>
                  Chic
                </div>
                <div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                  <Link to="/" className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                    Product
                    <svg className="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </Link>
                  <Link to="/" className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                    Community
                    <svg className="w-3.5 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </Link>
                  <Link to="/" className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                    Plans
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <Link to="/products" className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out">Login</Link>
                <button className={submitBtnClass}>Sign Up</button>
              </div>
            </div>

            {/* ******************* Hero section and view products button ************************************* */}

            <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
              <div className="text-6xl font-semibold text-gray-900 leading-none">Find all the <span className="font-logoFont text-green-800">Chic</span> wares in one place.</div>
              <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">All the best styles and a better shopping experience for your home.</div>
              <Link to="/products">
                <button className={viewProductsBtnClass}>
                  View Products!
                </button>
              </Link>
            </div>
            <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
              <footer type="button" className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
                <Link to="/products">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </Link>
              </footer>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
