import React from 'react';

const ProductsItem = ({product}) => {
    return (
        <div>
            id:{product.id} name:{product.name} price:{product.price}
        </div>
    );
};

export default ProductsItem;