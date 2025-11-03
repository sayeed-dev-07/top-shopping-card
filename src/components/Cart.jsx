import React from 'react';
import { Link, useOutletContext } from 'react-router';
import CheckoutCard from './CheckoutCard';

import { toast } from 'react-toastify';
const Cart = () => {
    const { cartArr, total, totalItems, setTotal, setTotalItems, setCartArr } = useOutletContext();

    function handleCheckOut(){
        
        toast.success('You would have buy all this things if it were a real store 😆')
        setCartArr([])
        setTotalItems(0)
        setTotal(0)
        
    }

    return (
        <div className='px-2 md:px-[10%] sm:px-[5%] my-[2%]'>

            {
                cartArr.length == 0 ? (
                    <div className='flex min-h-[70vh] items-center justify-center font-outfit flex-col'>
                        <p className='text-4xl font-semibold'>Nothing Added</p>
                        <Link className='text-blue-600 underline text-xl' to='/shop'>CLick here to go to shop</Link>
                    </div>
                ) : (
                    <>
                <p className='text-4xl font-semibold'>{`Total : ${Math.abs(total).toFixed(2)}$`}</p>

                <p className='text-2xl'>Total Items : {totalItems}</p>

                <div className='flex my-3.5 flex-col gap-y-3'>
                    {
                        cartArr.map(item =>
                            <CheckoutCard key={item.id} setTotalItems={setTotalItems} setTotal={setTotal} obj={item} setCartArr={setCartArr} cartArr={cartArr} />
                        )
                    }
                </div>
                <div onClick={()=> handleCheckOut()} className='flex items-center justify-center py-6'>
                    <button className='px-6  py-3 bg-black text-white text-xl rounded-xs font-semibold cursor-pointer border border-black hover:bg-transparent hover:text-black transition-all duration-200'>CheckOut</button>
                </div>
            </>
                )
            }

            

        </div>
    );
};

export default Cart;