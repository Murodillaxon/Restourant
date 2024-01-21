import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const MeatDishes = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/MeatDishes')
                setData(response.data)
            } catch (error) {
                console.error(error, 'Ошибка при выполнении запроса');
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
                <Link to={'/'}><span>Главная </span></Link>/<Link to={'/menu'}> Меню</Link> / Мясные блюда
            </div>

            <h1>Мясные блюда</h1>



            <div className="Products">
                {data.length > 0 ? (
                    data.map((value, index) => (
                        <div key={index} className="product">
                            <Link to={`/menu/MeatDishes/${value.id}`}>
                                <img src={value.image} alt="" />
                            </Link>
                            <div className="infoProduct">
                                <p>{value.name}</p>
                                <p className='price'>{formatPrice(value.price)}</p>
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

export default MeatDishes
