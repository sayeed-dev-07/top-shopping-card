import React from 'react';
import { useOutletContext } from 'react-router';
import Card from './Card';
const Cart = () => {
     const {itemsCount, setItemsCount, setTotalItemsCount, cartArr, setCartArr} = useOutletContext();
    return (
        <div>
            {
                cartArr.map((elem)=> (
                    <Card key={elem.id} obj={elem} setTotalItemsCount={setTotalItemsCount} cartArr={cartArr} setCartArr={setCartArr} itemsCount2={elem.itemsCount}/>
                ))
            }
        </div>
    );
};

export default Cart;