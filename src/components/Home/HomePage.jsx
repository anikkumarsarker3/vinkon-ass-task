"use client";
import { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";
const HomePage = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        AOS.init({ duration: 200, once: true });
    }, []);

    useEffect(() => {
        const Loader = async () => {
            const res = await fetch("https://dummyjson.com/products?limit=30");
            const json = await res.json();
            setProducts(json.products);
        };
        Loader();
    }, []);
    // if (!products) {
    //     return
    // }


    const categoryProducts = [... new Set(products.map(p => p.category))]

    const filtered = useMemo(() => {
        let result = [...products];
        if (search.trim()) {
            const searchTerm = search.toLowerCase();
            result = result.filter((c) => {
                const title = c.title?.toLowerCase() || "";
                const brand = c.brand?.toLowerCase() || "";
                return title.includes(searchTerm) || brand.includes(searchTerm);
            });
        }
        if (category !== "All") {
            result = result.filter((c) => c.category === category);
        }
        if (sort === "low-high") {
            result.sort((a, b) => a.price - b.price);
        } else if (sort === "high-low") {
            result.sort((a, b) => b.price - a.price);
        }
        return result;
    }, [search, category, sort, products]);


    return (
        <div className="max-w-7xl mx-auto px-6 mt-18">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-12" data-aos="fade-down">
                Explore Courses
            </h1>
            <div
                className="flex flex-col md:flex-row gap-4 justify-between mb-12 bg-white p-6 rounded-2xl shadow-lg"
                data-aos="fade-up"
            >

                <input
                    type="text"
                    placeholder="Search title or brand..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-1/3 px-4 py-3 border rounded-xl shadow-sm bg-gray-50 focus:ring-2 focus:ring-blue-600 outline-none flex-1"
                />

                <select
                    className="border px-4 py-3 rounded-xl shadow-sm bg-gray-50 flex-1"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    {
                        categoryProducts.map((p, i) => <option key={i} value={p}>{p}</option>)
                    }

                </select>
                <select
                    className="border px-4 py-3 rounded-xl shadow-sm bg-gray-50 flex-1"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="">Sort by Price</option>
                    <option value="low-high">Low to High</option>
                    <option value="high-low">High to Low</option>
                </select>
            </div>
            <Card filtered={filtered} />
        </div>
    );
};

export default HomePage;