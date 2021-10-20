import React from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {
  const { cartItems, onAddToCart, onRemoveCartItem } = props;

  return (
    <div>
      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base" cellspacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Product</th>
                  <th className="lg:text-right text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">Qty</span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="hidden text-right md:table-cell">Unit price</th>
                  <th className="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td className="hidden pb-4 md:table-cell">
                    <a href="#">
                      <img src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg" className="w-20 rounded" alt="Thumbnail" />
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <p className="mb-2 md:ml-4">Earphone</p>
                      <form action="" method="POST">
                        <button type="submit" className="text-gray-700 md:ml-4">
                          <small className="text-red-500">(Remove item)</small>
                        </button>
                      </form>
                    </a>
                  </td>
                  <td className="justify-center md:justify-end md:flex mt-6">
                    <div className="w-20 h-10">
                      <div className="relative flex flex-row w-full h-8">
                        <input type="number" value="2"
                          className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                      </div>
                    </div>
                  </td>
                  <td className="hidden text-right md:table-cell">
                    <span className="text-sm lg:text-base font-medium">
                      $10.00
                    </span>
                  </td>
                  <td className="text-right">
                    <span className="text-sm lg:text-base font-medium">
                      $20.00
                    </span>
                  </td>
                </tr> */}
                {cartItems.map((item) => {
                  <tr key={item.id}>
                    <td className="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img src={item.image} className="w-20 rounded" alt="Thumbnail" />
                      </a>
                    </td>
                    <td>
                      <p className="mb-2 md:ml-4">{item.name}</p>
                      <form action="" method="POST">
                        <button type="submit" className="text-gray-700 md:ml-4">
                          <small>(Remove item)</small>
                        </button>
                      </form>
                    </td>
                    <td className="justify-center md:justify-end md:flex md:mt-4">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <button onClick={() => onRemoveCartItem(item)} className="bg-red-600">-</button>
                          <span
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black">{item.qty}
                          </span>
                          <button onClick={() => onAddToCart(item)} className="bg-blue-200">+</button>
                        </div>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium">
                        {item.qty} x ${item.price.toFixed(2)}
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium">
                        ${item.price.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                })
                }
              </tbody>
            </table>

            <button className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded mt-3 -mb-1">
              <Link to="/products">
                Continue shopping
              </Link>
            </button>
            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded mt-3 -mb-1 ml-4">
              Empty Cart
            </button>

            <hr className="pb-6 mt-6" />

            <div className="my-4 mt-6 -mx-2 lg:flex flex-row-reverse">
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-100 rounded-full">
                  <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                </div>
                <div className="p-4">
                  <p className="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered</p>
                  <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      $148,827.53
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      New Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      $14,882.75
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Tax
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      $2,976.55
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Total
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      $17,859.30
                    </div>
                  </div>
                  <a href="#">
                    <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-green-700 rounded-full shadow item-center hover:bg-green-800 focus:shadow-outline focus:outline-none">
                      <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                      <span className="ml-2 mt-5px">Checkout</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
