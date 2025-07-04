// src/service/ProductService.js

export const ProductService = {
    getProductsSmall() {
        return fetch('https://primefaces.org/cdn/primereact/data/products-small.json')
            .then((res) => res.json())
            .then((data) => data);
    }
};
