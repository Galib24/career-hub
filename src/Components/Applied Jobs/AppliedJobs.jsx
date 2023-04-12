import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utils/fakeDB';
import CardApply from '../CardApply/CardApply';

const AppliedJobs = () => {
    const [cart,setCart] = useState([])
const pData = useLoaderData();

useEffect(()=>{

    const savedCart = getShoppingCart()
    let newArr =[]
    for (const id in savedCart){
        const foundProduct = pData.find(product => product.id == id)
        if(foundProduct){
            foundProduct.quantity = savedCart[id]
            // cartD.push(foundProduct)
            newArr.push(foundProduct)
        }
    }
    setCart(newArr)
},[])
console.log(cart);

    return (
        <div>
            <div style={{color:'#7E90FE'}} className='text-center'>
            <h2 >This is Applied Jobs</h2>
            </div>
<div className=' row row-cols-auto g-4 mt-5'>
    {
        cart.map(dt => <CardApply
        key={dt.id}
        dt={dt}
        >

        </CardApply>)
    }
</div>
         
        </div>
    );
};

export default AppliedJobs;