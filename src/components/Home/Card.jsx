"use client";
import { addProduct, getProduct, removeProduct } from "@/utility/readLocalStore";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Card = ({ filtered }) => {
    const [localList, setLocalList] = useState([]);
    useEffect(() => {
        setLocalList(getProduct());
    }, []);

    const handleWishlist = (id) => {
        if (localList.includes(id)) {
            removeProduct(id);
            toast("Remove from wishlist!");

        } else {
            addProduct(id);
            toast("Added to wishlist!");

        }

        setLocalList(getProduct() || []);
    };

    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.length === 0 ? (
                <p className="col-span-full text-center text-gray-500" data-aos="fade-up">
                    No courses found.
                </p>
            ) : (
                filtered.map((product) => {
                    const isLoved = localList.includes(String(product.id));

                    return (
                        <div key={product.id} data-aos="zoom-in">
                            <div className="relative p-6 rounded-2xl shadow-md border border-gray-400 hover:scale-105 transition-all duration-700 ease-out">

                                {/* ❤️ Wishlist Icon */}
                                <div
                                    onClick={() => handleWishlist(String(product.id))}
                                    className={`absolute text-3xl right-2 top-3 cursor-pointer transition 
                                        ${isLoved ? "text-red-600" : "text-gray-400"}`}
                                >
                                    ❤
                                </div>

                                <img
                                    src={product.thumbnail}
                                    alt=""
                                    className="w-full h-44 mb-2 border border-gray-300 rounded-2xl"
                                />

                                <h2 className="text-xl font-bold mb-2 line-clamp-1">
                                    {product.title}
                                </h2>

                                <p className="text-gray-600 mb-1">
                                    Brand:{" "}
                                    <span className="font-medium text-gray-900">{product.brand}</span>
                                </p>

                                <p className="text-sm text-gray-500 mb-2">
                                    Category: {product.category}
                                </p>

                                <p className="text-blue-600 font-bold text-lg mb-3">
                                    ${product.price}
                                </p>

                                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>

                                <Link href={`${product.id}`}>
                                    <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    );
                })
            )}
            <ToastContainer />
        </div>
    );
};

export default Card;
