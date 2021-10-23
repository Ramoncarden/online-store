import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Cart = (props) => {
  const { cartItems, onAddToCart, onRemoveCartItem, resetCart, removeSingleItem, checkout } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.0625;
  const totalPrice = itemsPrice + taxPrice;
  const history = useHistory()

  // push to confirmation page.
  const submitOrder = () => {
    if (cartItems.length) {
      history.push('/confirmation')
    }
  }

  return (
    <div>
      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left max-w-md">Product</th>
                  <th className="lg:text-center text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">Qty</span>
                    <span className="hidden lg:inline text-left">Quantity</span>
                  </th>
                  <th className="hidden text-right md:table-cell">Unit price</th>
                  <th className="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="hidden pb-4 md:table-cell">
                      <Link to={`products/${item.id}`}>
                        <img src={item.image} className="w-20 rounded mb-3" alt="Thumbnail" />
                      </Link>
                    </td>
                    <td>
                      <i className="text-gray-400 text-xs md:ml-3">(product id: {item.id})</i>
                      <p className="mb-2 md:ml-3">{item.title}</p>
                      <button onClick={() => removeSingleItem(item)} type="submit" className="text-gray-700 md:ml-4">
                        <small className="text-red-500 hover:text-red-700">(Remove item)</small>
                      </button>
                    </td>

                    <td className=" justify-end md:justify-end md:flex md:mt-4 md:table-cell h-10 w-12">
                      <div className="custom-number-input">
                        <label htmlFor="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">
                        </label>
                        <div className="flex flex-row h-10 w-full rounded-lg bg-transparent">
                          <button onClick={() => onRemoveCartItem(item)} data-action="decrement" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                            <span className="m-auto text-2xl font-thin">−</span>
                          </button>
                          <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none" name="custom-input-number" readOnly value={item.qty} />
                          <button onClick={() => onAddToCart(item)} data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                            <span className="m-auto text-2xl font-thin">+</span>
                          </button>
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
                        ${(item.price * item.qty).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>

            <button className="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded mt-3 -mb-1">
              <Link to="/products">
                Continue shopping
              </Link>
            </button>
            <button onClick={resetCart} className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded mt-3 -mb-1 ml-4">
              Empty Cart
            </button>

            <hr className="pb-6 mt-6" />

            {/* ************** Total calculations ****************** */}

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
                      ${itemsPrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Shipping
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      FREE!
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Tax
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      ${taxPrice.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Total
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      <strong>${totalPrice.toFixed(2)}</strong>
                    </div>
                  </div>

                  <button onClick={() => { checkout(); submitOrder() }} className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-green-700 rounded-full shadow item-center hover:bg-green-800 focus:shadow-outline focus:outline-none">
                    <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                    <span className="ml-2 mt-5px">Checkout</span>
                  </button>

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
