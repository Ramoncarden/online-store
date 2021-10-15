import React from 'react'

const ProductList = () => {
  return (
    <div>
      <h1>Products here</h1>
    </div>
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

