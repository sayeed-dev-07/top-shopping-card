import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from './Card';
import { useOutletContext } from 'react-router';

const Shop = () => {
    const {setTotal, setTotalItems, setCartArr, cartArr} = useOutletContext();

    const {data, isLoading, isError, error} = useQuery({
        queryKey : ['shopData'],
        queryFn: async()=>{
            const res = await fetch('https://fakestoreapi.com/products')
            if (!res.ok) throw new Error('Failed to fetch data');
            return await res.json();
        },
        staleTime: 1000 * 60 * 20,
    })

    if (isLoading) {
        return <div className='w-full h-full flex items-center justify-center text-3xl font-outfit'>
            <p>Data is loading ....</p>
        </div>
    }
    if (isError) {
      return  <div className='w-full h-full flex items-center justify-center text-3xl font-outfit'>
            <p>Something went Wrong : {error.message}</p>
        </div>
    }
    return (
        <div className='grid grid-cols-1 gap-y-3 gap-x-5 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] py-[5%] justify-center items-start bg-[#292525] px-2 md:px-[10%] sm:px-[5%]'>
           { data.map(elem => (
            <Card key={elem.id} obj={elem} setTotal={setTotal} setTotalItems={setTotalItems} setCartArr={setCartArr} cartArr={cartArr}/>
        ))}
        </div>
    )
};

export default Shop;