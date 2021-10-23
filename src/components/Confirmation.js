import React from 'react'
import { Link } from 'react-router-dom'

const Confirmation = (props) => {
  const { getConfirmationNumber } = props;

  return (
    <div className="container mx-auto text-center mt-6 w-1/2 p-8 text-gray-700 bg-white shadow-lg pin-r pin-y">
      <h1 className="text-6xl text-gary-700 pt-4">Thank you!!!</h1>
      <h3 className="mt-5 text-3xl text-gray-700">Your order confirmation number is: <strong>#{getConfirmationNumber()}</strong></h3>
      <Link to="/products">
        <p className="text-green-500 text-2xl hover:text-green-700 mt-5">Click here to start a new order</p>
      </Link>
    </div>
  )
}

export default Confirmation
