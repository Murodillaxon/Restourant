import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useCart } from 'react-use-cart'
import './style.css'

const AppetizersSinglePage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)

    const { addItem } = useCart()
    const formatPrice = (price) => {
                return price.toLocaleString('ru-RU');
            };
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/Appetizers/${id}`)
                setProduct(response.data)
            }
            catch (error) {
                console.error("ошибка при выполнении запроса", error);
            }

        }
        fetchProduct();

        

    }, [id])

    if (!product) {
        return (
            <div className="wrap">
                <div className="loading">
                    <div className="bounceball"></div>
                    <div className="text">NOW LOADING</div>
                </div>
            </div>
        );
    }

    return (
        <div className='SinglePage'>
            <section id="container" className="">
                <div id="product-img">
                    <img src={product.image} alt="Nike Roshe Run - Mint Green" title="Nike Roshe Run - Mint Green" className="fade-in " />
                </div>

                <div id="product-info" >
                    <div id="product-spec" className="wrapper">
                        <h1>{product.name}</h1>
                        <h3 className="price">{formatPrice(product.price)}</h3>
                    </div>

                    <div id="ratings">
                        <span className="review-rating">
                            <span className="user-review ninety"></span>
                        </span>
                    </div>


                    <button onClick={() => addItem({ id: product.id, image: product.image, name: product.name, price: product.price })} className="button clearfix-auto">
                        Add to cart
                    </button>


                </div>
            </section>
        </div>
    )
}

export default AppetizersSinglePage