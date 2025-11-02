import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from './Card';

const Shop = () => {
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
        data.map(elem => (
            <Card key={elem.id} title={elem.title} image={elem.image}/>
        ))
    )
};

export default Shop;