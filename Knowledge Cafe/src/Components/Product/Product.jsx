import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);
    const { id, author_name, blog_title, read_time, blog_img, author_img } = props.product;

    return (
        <div className='product'>
            <img className='banner-img' src={blog_img} alt="" />
            
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='author-img' src={author_img} alt="" />

                    <div>
                        <h1>Name</h1>
                        <h6>Date</h6>
                    </div>
                </div>

                <div className="read-time">
                    <p>minutes</p>
                </div>
            </div>
            
        </div>
    );
};

export default Product;