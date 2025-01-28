import { useContext } from "react";
import { CartContext } from "../../../Context/CartProvider";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

function CartPage() {
  const { state, dispatch } = useContext(CartContext);
  const CartItems = state.CartItems;
  const totalItems = state.CartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  const totalAmount = state.CartItems.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing;
  }, 0);

  return (
    <div className="flex  justify-center mt-10   ">

      <div className=" w-[60%] ">
        {CartItems.length > 0 ? (
          <div>
            <div className="  p-2">
              {CartItems.map((item) => {
                return (
                  <div className="  shadow-md my-5 rounded-md p-3 shadow-stone-300  flex justify-between" key={item.id}>
                    <div className=" flex  ">
                      <img className="h-16" src={item.image} alt="" />
                      <h1 className="ml-7  w-96 ">{item.name}</h1>
                    </div>

                    <div>



                      <p>Rs.{item.caloriesPerServing}</p>
                      <button
                        onClick={() => {
                          dispatch({ type: "Delete", payload: { id: item.id } })

                        }}
                      >
                        <MdDelete />


                      </button>
                    </div>

                    <div className=" w-24  space-x-2 mt-3 ">
                      <button
                        onClick={() => {
                          dispatch({ type: "Decrement", payload: { id: item.id } })
                        }}
                        className="bg-slate-500 rounded w-7">-</button>
                      <span>{item.qty}</span>

                      <button
                        onClick={() => {
                          dispatch({ type: "Increment", payload: { id: item.id } })


                        }}
                        className="bg-slate-500 rounded w-7">+</button>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        ) : (
          <div className="border-2 flex justify-center flex-col items-center w-52  ">
            <img src="https://as2.ftcdn.net/v2/jpg/02/38/57/71/1000_F_238577130_VIOFThdkVVqg6qE97Vg8QFHsniA2PpGk.jpg" alt="" />
            <h1>Cart is Empty <NavLink className="text-red-600  underline" to='/menu'>Shop Now</NavLink></h1>
          </div>
        )}
      </div>
      {CartItems.length > 0  &&(
        <div className="border-2 shadow shadow-slate-500 h-80 ml-8  rounded-lg w-[25%]  ">
        <p>Order Summary</p>
        <p>Total Price Rs.{totalAmount} </p>
        <div>
          <NavLink to='/payment' state={[...CartItems]}>
        <button className="bg-black text-white rounded p-2 w-52 " >
            Proceed to Checkout  ({totalItems})
            </button>
            </NavLink>

          <button
            onClick={() => {
              dispatch({ type: "EmptyCart", payload: { id: item.id } })

            }}
            className="bg-red-500 rounded-md text-white text-xl">Clear Cart</button>
        </div>
      </div>
      )}
      
    </div>
  );
}

export default CartPage;
