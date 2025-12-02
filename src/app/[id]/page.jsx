import ProductActions from "@/components/Button/ProductActions";
import Card from "@/components/Home/Card";
import { getProduct } from "@/utility/readLocalStore";
import { FaStar, FaTruck, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
const Page = async ({ params, }) => {
    const { id } = await params;
    try {
        const res = await fetch("https://dummyjson.com/products?limit=30");
        const data = await res.json();
        let products = data.products;
        const product = products.filter(data => data.id === Number(id))
        // console.log(products)
        const filtered = products.filter(data => data.id !== Number(id) && data.category === product[0].category)
        const {
            title,
            description,
            category,
            price,
            discountPercentage,
            rating,
            stock,
            tags,
            brand,
            sku,
            weight,
            dimensions,
            warrantyInformation,
            shippingInformation,
            availabilityStatus,
            reviews,
            returnPolicy,
            minimumOrderQuantity,
            meta,
            images,
            thumbnail } = product[0]

        // const list = await getProduct();
        // console.log(list)

        // console.log(id)

        // console.log(list.includes(Number(id)));
        // console.log(list.includes(id))
        return (
            <div className="mt-18 max-w-7xl mx-auto">

                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-2 gap-10">


                        <div className="flex justify-center items-start">
                            <img
                                src={images[0]}
                                alt=''
                                className="w-full max-w-md rounded-2xl shadow-lg"
                            />
                        </div>


                        <div className="flex flex-col gap-4">
                            <h1 className="text-3xl font-bold">{title}</h1>

                            <p className="text-gray-600">
                                Brand: <span className="font-medium">{brand}</span>
                            </p>
                            <p className="text-gray-600">
                                Category: <span className="font-medium">{category}</span>
                            </p>

                            <p className="text-2xl text-blue-600 font-bold">${price}</p>

                            <p className="flex items-center gap-2 text-green-600 font-medium">
                                <FaCheckCircle /> {availabilityStatus} ({stock} in stock)
                            </p>

                            <div className="flex items-center gap-2">
                                <span className="flex gap-1 text-yellow-400">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}
                                        />
                                    ))}
                                </span>
                                <span className="text-gray-600">({reviews.length} reviews)</span>
                            </div>

                            <p className="flex items-center gap-2 text-gray-600">
                                <FaTruck /> {shippingInformation}
                            </p>
                            <p className="flex items-center gap-2 text-gray-600">
                                <FaInfoCircle /> {warrantyInformation}
                            </p>

                            <p className="text-gray-700 mt-4">{description}</p>


                            <div className="mt-6">
                                <h2 className="text-xl font-semibold mb-2">Reviews:</h2>
                                <div className="flex flex-col gap-3">
                                    {reviews.map((rev, idx) => (
                                        <div key={idx} className="p-3 border rounded-lg shadow-sm">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="flex gap-1 text-yellow-400">
                                                    {Array.from({ length: 5 }, (_, i) => (
                                                        <FaStar
                                                            key={i}
                                                            className={i < rev.rating ? "text-yellow-400" : "text-gray-300"}
                                                        />
                                                    ))}
                                                </span>
                                                <span className="text-gray-600">{rev.reviewerName}</span>
                                            </div>
                                            <p className="text-gray-700">{rev.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* <div className="flex gap-6"> */}

                            <ProductActions id={id}></ProductActions>

                        </div>
                    </div>
                </div>
                <div className="px-5">

                    <h1 className="text-center text-2xl font-bold my-5">Similar Products</h1>
                    <Card filtered={filtered}></Card>
                </div>

            </div>
        );
    } catch (error) {
        return (
            <div className="text-center mt-20 text-red-600 text-xl">
                Product Not Found
            </div>
        );
    }





};

export default Page;
