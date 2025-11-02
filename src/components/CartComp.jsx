import { ShoppingCart } from 'lucide-react';
import React from 'react';

const CartComp = ({num = 0}) => {
    if (num == 0) {
        return <ShoppingCart/>
    }
    return (
            <div className='relative'>
            <ShoppingCart />
            <span className='absolute -top-2 text-xs px-1 py-.5 -right-2 bg-[#000000] rounded-full'>{num}</span>
            </div>
    );
};

export default CartComp;