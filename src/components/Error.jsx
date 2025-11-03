import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='w-full font-outfit flex items-center justify-center text-center min-h-screen bg-[#565448] flex-col gap-y-3'>
            <p className='capitalize text-4xl '>something went wrong</p>
           <Link className='capitalize underline text-blue-600' to='/'>Click here to go to Home</Link>
        </div>
    );
};

export default Error;