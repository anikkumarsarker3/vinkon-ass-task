"use client";
import React from "react";

const ProductActions = ({ id }) => {
    return (
        <div className="flex gap-6 mt-6">

            <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">
                Add to Cart
            </button>
        </div >
    );
};

export default ProductActions;
