import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    
    return (

        <div className="h-[90vh] font-outfit bg-[url('/body.png')] bg-center bg-cover">
            <div className='w-full h-full bg-[#000000b8] flex items-center justify-center'>
                <div className='sm:w-[70vw] w-full px-2 lg:w-[50vw] flex flex-col items-center justify-center gap-y-12 text-center card-appear'>
                    <p className='text-2xl sm:text-3xl md:text-5xl text-white '><span className='text-[crimson] font-semibold md:leading-22'>Nuvéa</span> — where timeless design meets effortless elegance. Curated clothing for the modern soul.</p>

                    <Link to='shop'>
                    <DrawOutlineButton color={'crimson'} text={'white'}>Browse Shop</DrawOutlineButton>
                    </Link>
                </div>
            </div>
        </div>

    );
};
export const DrawOutlineButton = ({ children, color, text, ...rest }) => {
  return (
    <button
      {...rest}
      style={{ color: text }}
      className="group relative text-base sm:text-xl px-10 py-4 font-semibold transition-colors duration-400 cursor-pointer "
    >
      <span className='group-hover:text-[crimson] duration-400'>{children}</span>

      {/* TOP */}
      <span
        style={{ backgroundColor: color }}
        className="absolute left-0 top-0 h-[2px] w-0 transition-all duration-100 group-hover:w-full"
      />

      {/* RIGHT */}
      <span
        style={{ backgroundColor: color }}
        className="absolute right-0 top-0 h-0 w-[2px] transition-all delay-100 duration-100 group-hover:h-full"
      />

      {/* BOTTOM */}
      <span
        style={{ backgroundColor: color }}
        className="absolute bottom-0 right-0 h-[2px] w-0 transition-all delay-200 duration-100 group-hover:w-full"
      />

      {/* LEFT */}
      <span
        style={{ backgroundColor: color }}
        className="absolute bottom-0 left-0 h-0 w-[2px] transition-all delay-300 duration-100 group-hover:h-full"
      />
    </button>
  );
};


export default Home;