import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext(null);

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0) ?? 0;

    function addToCart(productId) {
        console.log(
            "Adding to cart product : ",
            productId,
            "\nCurrent Cart : ",
            cart
        );
        const existingProduct = cart.find((item) => item.id === productId) ?? {
            id: productId,
            quantity: 0,
        };
        existingProduct.quantity += 1;
        setCart((prevCart) =>
            existingProduct.quantity === 1
                ? [...prevCart, existingProduct]
                : [...prevCart]
        );
    }
    function removeFromCart(productId, quantity = 1) {
        console.log(
            "removing from cart product : ",
            productId,
            "\nCurrent Cart : ",
            cart
        );
        const existingProduct = cart.find((item) => item.id === productId);
        existingProduct.quantity -= quantity;
        setCart((prevCart) =>
            existingProduct.quantity >= 1
                ? [...prevCart]
                : prevCart.filter((item) => item.id !== productId)
        );
    }

    return (
        <cartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, totalItems }}>
            {children}
        </cartContext.Provider>
    );
}

export function useCart() {
    return useContext(cartContext) ?? {};
}