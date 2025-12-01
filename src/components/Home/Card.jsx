import Link from 'next/link';
import React from 'react';

const Card = ({ filtered }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.length === 0 ? (
                <p
                    className="col-span-full text-center text-gray-500"
                    data-aos="fade-up"
                >
                    No courses found.
                </p>
            ) : (
                filtered.map((product, index) => (
                    <div
                        key={product.id}
                        data-aos="zoom-in"

                    >
                        <div className="p-6  rounded-2xl shadow-md border border-gray-400 transform transition-all duration-700 ease-out hover:scale-105 ">
                            <img src={product.thumbnail} alt="" className='w-full h-44 border border-gray-300 rounded-2xl my-2 hover:scale-103 duration-700' />
                            {/* Title */}
                            <h2 className="text-xl font-bold mb-2 line-clamp-1">{product.title}</h2>

                            {/* Instructor */}
                            <p className="text-gray-600 mb-1">
                                Brand:{" "}
                                <span className="font-medium text-gray-900">{product.brand}</span>
                            </p>

                            {/* Category */}
                            <p className="text-sm text-gray-500 mb-2">
                                Category: {product.category}
                            </p>

                            {/* Price */}
                            <p className="text-blue-600 font-bold text-lg mb-3">
                                ${product.price}
                            </p>

                            {/* Description */}
                            <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                                {product.description}
                            </p>

                            {/* Button */}
                            <Link href={`${product.id}`}>
                                <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Card;