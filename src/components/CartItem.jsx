
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div >

    <div className="flex items-start gap-4 hover:scale-105 transition duration-300 ease-in p-5 py-10 mt-10 ml-5 rounded-xl  border-b-2 border-black   max-w-2xl">
  
  {/* Image */}
  <div className="w-32 h-32 flex-shrink-0 rounded-lg ">
    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
  </div>

  {/* Content */}
  <div className="flex flex-col justify-between flex-grow">
    <div>
      <h1 className="text-black font-semibold text-lg truncate w-44">{item.title}</h1>
      <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.description}</p>
    </div>
    <div className="flex justify-between items-center mt-4">
      <p className="text-green-600 font-semibold text-base">{item.price}</p>
      <div onClick={removeFromCart} className="cursor-pointer text-xl">
        <FcDeleteDatabase />
      </div>
    </div>
  </div>

</div>


    </div>
  );
};

export default CartItem;
