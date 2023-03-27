import React, {useState} from 'react';
import ProductsItem from "./ProductsItem";

const ProductsList = () => {

    let originalProducts = [
        {
            id: 1,
            name: "Помидор",
            price: 32
        },
        {
            id: 2,
            name: "Морковка",
            price: 15
        },
        {
            id: 3,
            name: "Свекла",
            price: 41
        }
    ];

    let [products, setProducts] = useState([...originalProducts]);

    return (
        <div>
            {
                products.map(product => {
                    return <ProductsItem product={product} key={product.id}/>
                })
            }
        </div>
    );
};

export default ProductsList;