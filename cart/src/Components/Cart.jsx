import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../Features/cartSlice";


function Cart() {
  const {items: cartProduct,tempItem,totalPrice,} = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRemoveItem = (id)=>{
    // alert(id)
    dispatch(removeFromCart(id))
  }
  return (
    <div className="wrapper">
      <div className="cart-page-container">
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cartProduct.map((el) =>{ 
            return (
              <div className="cart-item">
                <img src={el.image} alt="" />
                <div className="cart-item-details">
                  <h3>{el.title}</h3>
                  <p>price : ${el.price}</p>
                  <div>
                    <input type="number" min="1" />
                    <button>Update</button>
                    <button onClick={()=>handleRemoveItem(el.id)}>Remove</button>
                  </div>
                </div>
              </div>
            )}
          )}
          <div className="cart-total">
            <p>Total: ${totalPrice}</p>
          </div>
          <button className="back-button" onClick={()=>navigate("/")}>Back to shopping</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
