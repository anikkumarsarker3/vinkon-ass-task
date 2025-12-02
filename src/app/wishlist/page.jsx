'use client'
import Card from '@/components/Home/Card';
import { getProduct } from '@/utility/readLocalStore';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [products, setProducts] = useState([]);
    const list = getProduct()
    // console.log(list)
    useEffect(() => {
        const Loader = async () => {
            const res = await fetch("https://dummyjson.com/products?limit=30");
            const json = await res.json();
            setProducts(json.products);
        };
        Loader();
    }, []);
    const filtered = products.filter(p => list.includes(String(p.id)));
    console.log(filtered)
    return (
        <div className='mt-18 max-w-7xl mx-auto'>
            <h2 className='text-2xl font-bold my-5 text-center'>Wishlist</h2>
            <Card filtered={filtered}></Card>

        </div>
    );
};

export default page;