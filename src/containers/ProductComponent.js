import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products)
    console.log(products);

    const renderList = products.map((product) => {
        const { id, title, price, description, category, image } = product;
        return (
            <div className='four column wide' style={{ width: '500px', height: '500px' }} key={id}>
                <div className='ui link card'>
                    <div className='card'>
                        <div className='image'>
                            <img src={image} alt={title} /></div>
                    </div>
                    <div className='content'>
                        <div className='header'>{title}</div>
                        <div className='meta price'>${price}</div>
                        <div className='meta'>{category}</div>
                        <div className='meta'></div>
                    </div>

                </div>
            </div>
        )

    })


    return (
        <>
            {renderList}
        </>

    )
}

export default ProductComponent
