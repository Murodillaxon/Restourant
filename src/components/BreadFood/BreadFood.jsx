import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BreadFood = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/BreadFood');
                setData(response.data);
            } catch (error) {
                console.log(error, 'Ошибка при выполнении запроса');
            }
        };
        fetchData()
    }, []);

    const formatPrice = (price) => {
        return price.toLocaleString('ru-RU');
    };
    return (
        <div className='Menu'>
            <div className="locSite">
                <Link to={'/'}><span>Главная </span></Link>/<Link to={'/menu'}> Меню</Link> / Хлеб Всему Рад !
            </div>
            
            <h1>Хлеб Всему Рад !</h1>

            <div className="Products">
                {data.length > 0 ? (
                    data.map((value, index) => (
                        <div key={index} className="product">
                            <Link to={`/menu/breadfood/${value.id}`}>
                                <img src={value.image} alt="" />
                            </Link>
                            <div className="infoProduct">
                                <p>{value.name}</p>
                                <p>{formatPrice(value.price)} UZS</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div class="wrap">
                        <div class="loading">
                            <div class="bounceball"></div>
                            <div class="text">NOW LOADING</div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default BreadFood
