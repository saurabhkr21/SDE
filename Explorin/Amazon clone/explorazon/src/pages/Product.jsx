
import React from "react";
import { useParams } from "react-router";
import { productsData } from "../constants";
import { useCart } from "../Contexts/CartContext";
// import productsData from "../constants";

export default function Product() {
    const { productId = "" } = useParams();
    const { addToCart } = useCart();
    const productData = productsData.find(
        (product) => product.product_id === productId
    );

    return (
        <div>
            <div className=" bg-slate-100 p-4 rounded-2xl shadow ">
                {JSON.stringify(productData)}
            </div>
            <button
                onClick={() => addToCart(productData.product_id)}
                className="bg-[#FF9900] p-2 rounded-2xl shadow m-4"
            >
                Add To Cart
            </button>
        </div>
    );
}
