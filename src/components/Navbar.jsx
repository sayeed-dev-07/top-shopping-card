import { ShoppingCart } from 'lucide-react';
import { React, useState } from 'react';
import { Link, useLocation } from 'react-router';
import CartComp from './CartComp';

const Navbar = () => {
    const [burgerOn, setBurgerOn] = useState(false);
    
    const location = useLocation();
    const path = location.pathname;
    let active = 'home'
    if (path === '/shop') {
        active = 'shop'
    } else if (path === '/cart')
        active = 'cart'
    return (
        <div>
            <div className='flex sm:px-[5%] h-[10vh] px-2 md:px-[10%] font-outfit items-center justify-between bg-[#11120D] text-[#FFFBF4]'>
                <Link to='/' className='uppercase text-4xl font-semibold'>Nuvéa</Link>
                <ul className='hidden sm:flex items-center justify-center text-2xl font-semibold gap-x-6'>
                    <li className='group'>
                        <Link to='/'>Home</Link>
                        <div className={`${active === 'home' ? 'w-full' : 'w-0'} w-0 group-hover:w-full h-[0.1rem] bg-[#FFFBF4] duration-100`}></div>
                    </li>
                    <li className='group'>
                        <Link to='shop'>Shop</Link>
                        <div className={`${active === 'shop' ? 'w-full' : 'w-0'} w-0 group-hover:w-full h-[0.1rem] bg-[#FFFBF4] duration-100`}></div>
                    </li>
                    <li className='group'>
                        <Link to='cart'> <CartComp/> </Link>
                        <div className={`${active === 'cart' ? 'w-full' : 'w-0'} w-0 group-hover:w-full h-[0.1rem] bg-[#FFFBF4] duration-100`}></div>
                    </li>
                </ul>
                <div onClick={() => burgerOn ? setBurgerOn(false) : setBurgerOn(true)} className='flex sm:hidden flex-col gap-y-2'>
                    <div className={`${burgerOn ? 'translate-y-2 transition-all duration-150 rotate-45 ' : 'block'} w-10 h-1 bg-[#FFFBF4] rounded-md`}></div>
                    <div className={`${burgerOn ? 'hidden' : ''} w-10 h-1 bg-[#FFFBF4] rounded-md`}></div>
                    <div className={`${burgerOn ? 'transition-all duration-150 -rotate-45 -translate-y-1' : 'block'} w-10 h-1 bg-[#FFFBF4] rounded-md`}></div>
                </div>



            </div>



            {burgerOn &&
                <div className='absolute min-h-[90vh] text-white bg-[#000000dc] w-screen py-[60%] z-100'>
                    <ul className='flex items-center flex-col justify-center h-full text-center '>
                        <li onClick={() => setBurgerOn(false)} className='group py-2 text-2xl font-semibold'>
                            <Link to='/'>Home</Link>
                            <div className='w-0 group-hover:w-full h-[0.1rem] bg-white duration-100'></div>
                        </li>
                        <li onClick={() => setBurgerOn(false)} className='group py-2 text-2xl font-semibold'>
                            <Link to='shop'>Shop</Link>
                            <div className='w-0 group-hover:w-full h-[0.1rem] bg-white duration-100'></div>
                        </li>
                        <li onClick={() => setBurgerOn(false)} className='group py-2 text-2xl font-semibold'>
                            <Link to='cart'> <CartComp/>  </Link>
                            <div className='w-0 group-hover:w-full h-[0.1rem] bg-white duration-100'></div>
                        </li>
                    </ul>
                </div>
            }
        </div>

    );
};

export default Navbar;