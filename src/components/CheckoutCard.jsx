import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { toast } from 'react-toastify';
const CheckoutCard = ({ obj, setTotalItems, setTotal, setCartArr, cartArr }) => {

   function handleIncrease() {
    setTotal(prev => prev + obj.price);
    setTotalItems(prev => prev + 1);

    setCartArr(prev =>
      prev.map(item =>
        item.id === obj.id
          ? { ...item, itemsCount: item.itemsCount + 1 }
          : item
      )
    );
  }
  function handleDelete(){
    setTotal(prev => prev - (obj.price * obj.itemsCount))
    setTotalItems(prev => prev - obj.itemsCount)
    let newArr = cartArr.filter(arr => arr.id != obj.id)
    setCartArr([...newArr])
    toast.error(`Removed ${obj.itemsCount} - ${obj.title}`)
  }
  function handleDecrease() {
    if (obj.itemsCount > 1) { // prevent going below 1
      setTotal(prev => prev - obj.price);
      setTotalItems(prev => prev - 1);

      setCartArr(prev =>
        prev.map(item =>
          item.id === obj.id
            ? { ...item, itemsCount: item.itemsCount - 1 }
            : item
        )
      );
    }
  }

  return (
    <div className="p-4 bg-[#b8afaf] rounded-xl flex items-center gap-6 shadow-md font-outfit">
      <img
        src={obj.image}
        alt={obj.title}
        className="w-24 h-24 object-contain bg-white rounded-lg"
      />

      <div className="flex-1">
        <p className="font-semibold text-lg">{obj.title}</p>
        <p className="text-sm text-gray-200">${obj.price.toFixed(2)}</p>

        <div className="flex items-center gap-3 justify-start py-3">
          <div
            onClick={handleDecrease}
            className="p-2 cursor-pointer rounded-md bg-black text-white hover:bg-gray-800"
          >
            <Minus />
          </div>

          <div className="p-3 rounded-md bg-black text-white flex items-center justify-center min-w-[40px]">
            {obj.itemsCount}
          </div>

          <div
            onClick={handleIncrease}
            className="p-2 rounded-md cursor-pointer bg-black text-white hover:bg-gray-800"
          >
            <Plus />
          </div>
        </div>
        <div>
          <p onClick={()=> handleDelete()} className='px-3  py-2 bg-black font-semibold w-[150px] text-white rounded-md cursor-pointer'>Remove item</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
