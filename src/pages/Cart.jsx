import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="w-full">
  {
    cart.length > 0  ? 
    (<div className="flex max-w-6xl p-2.5 mx-auto space-y-10 space-x-5 min-h-[80vh]   " >


      <div >
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

     

  <div className="ml-6 md:flex hidden h-fit  justify-center pt-36">
  <div className="w-full  p-3 space-y-6">

    {/* Header */}
    <div className="text-center">
      <h2 className="text-2xl font-bold text-green-700">🛒 Your Cart</h2>
      <p className="text-gray-600 text-sm">Review your items before checkout</p>
    </div>

    {/* Summary */}
    <div className="bg-teal-50 rounded-md p-4 border border-teal-200">
      <h3 className="text-lg font-semibold text-teal-700 mb-2">Summary</h3>
      <p className="text-gray-700 mb-1">
        <span className="font-medium">Total Items:</span> {cart.length}
      </p>
      <p className="text-gray-700">
        <span className="font-medium">Total Amount:</span> ${totalAmount}
      </p>
    </div>

    {/* Checkout Button */}
    <div className="text-center">
      <button
        className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition duration-300"
      >
        🛍️ CheckOut Now
      </button>
    </div>

  </div>
</div>



    </div>) : 
    (<div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
  <h1 className="text-3xl font-semibold text-gray-700">🛒 Your Cart is Empty</h1>

  <Link to="/">
    <button className="px-5 py-2 bg-gradient-to-r from-teal-800 to-teal-500 text-white text-lg rounded-3xl cursor-pointer shadow-md hover:from-green-600 hover:to-teal-600 transition duration-300">
      🛍️ Shop Now
    </button>
  </Link>
</div>
)
  }
    </div>
  );
};

export default Cart;
