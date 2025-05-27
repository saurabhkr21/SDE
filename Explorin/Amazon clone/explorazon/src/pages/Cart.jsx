
import React from "react";
import { useCart } from "../Contexts/CartContext";
import { productsData } from "../constants";

export default function Cart() {
    const { cart, addToCart, removeFromCart } = useCart();
    return (
        <div className="flex flex-col gap-4">
            {cart.length > 0 ? (
                cart?.map(({ id, quantity }) => {
                    const data =
                        productsData.find(({ product_id }) => id === product_id) ?? id;
                    return (
                        <div
                            key={id}
                            className=" flex flex-col justify-center items-center p-4 rounded border bg-slate-50"
                        >
                            <div>Product : {JSON.stringify(data)}</div>

                            <div className="flex gap-2 items-center bg-slate-200 shadow-lg p-1 ">
                                Quantity :{" "}
                                <button
                                    onClick={() => removeFromCart(id)}
                                    className="bg-slate-200 shadow-lg p-2 min-w-4"
                                >
                                    -
                                </button>{" "}
                                {quantity}
                                <button
                                    onClick={() => addToCart(id)}
                                    className="bg-slate-200 shadow-lg p-2 min-w-4"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={() => removeFromCart(id, quantity)}
                                className="bg-slate-200 shadow-lg p-1"
                            >
                                Delete
                            </button>
                        </div>
                    );
                })
            ) : (
                <div>Your cart is empty</div>
            )}
        </div>
    );
}
