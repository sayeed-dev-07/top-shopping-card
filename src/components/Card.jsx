import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ obj, setTotal, setTotalItems, cartArr, setCartArr }) => {
  const [itemsCount, setItemsCount] = useState(obj.itemsCount ? obj.itemsCount : 1);

  function handleClick() {
    const existingItem = cartArr.find(item => item.id === obj.id);

    if (existingItem) {
      const updatedCart = cartArr.map(item =>
        item.id === obj.id
          ? { ...item, itemsCount: item.itemsCount + itemsCount }
          : item
      );

      setCartArr(updatedCart);
      toast.info(`Increased ${obj.title} quantity!`);
    } else {
      const newItem = { ...obj, itemsCount };
      setCartArr(prev => [...prev, newItem]);
      toast.success(`${obj.title} added to cart!`);
    }
    setTotal(prev => prev + obj.price * itemsCount);
    setTotalItems(prev => prev + itemsCount);
  }

  return (
    <div className='bg-white rounded-xl card-appear shadow-2xl font-outfit'>
      <div className='overflow-hidden rounded-tl-xl flex bg-[#6b6060b4] items-center justify-center rounded-tr-xl h-[300px]'>
        <img className='w-[150px]' src={obj.image} alt="" />
      </div>
      <div className='p-6 rounded-b-xl text-xl flex flex-col items-center bg-[#beb8b8] text-black justify-center text-center gap-y-2'>
        <p className='font-semibold text-2xl'>{obj.title}</p>
        <p>⭐ Rating : {obj.rating.rate}</p>
        <p>💳 Price : {obj.price}$</p>

        <div className='flex items-center  gap-3 justify-center py-3'>
          <div
            onClick={() => setItemsCount(prev => (prev > 1 ? prev - 1 : prev))}
            className='p-3 cursor-pointer rounded-md bg-black text-white'
          >
            <Minus />
          </div>

          <div className='p-3 rounded-md bg-black text-white flex items-center justify-center'>
            {itemsCount}
          </div>

          <div
            onClick={() => setItemsCount(prev => prev + 1)}
            className='p-3 rounded-md cursor-pointer bg-black text-white'
          >
            <Plus />
          </div>
        </div>

        <button
          onClick={handleClick}
          type='button'
          className='cursor-pointer w-full p-3 bg-black text-white rounded-md'
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
