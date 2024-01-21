import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';

const Menu = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/Menu");
                setData(response.data);
            } catch (error) {
                console.error('Ошибка при выполнении запроса', error);
            }
        };

        fetchData();
    }, []);

    

    console.log(data);

    return (
        <div className='Menu'>
            <div className="locSite">
                <Link to={'/'}><span>Главная </span></Link>/ Меню
            </div>
            <h1>Меню ресторана "ДОМ ЛУЧШЕЙ ЕДЫ"</h1>

            <div className="Products">
                {data.length > 0 ? (
                    data.map((value, index) => (
                        <div key={index} className="product">
                            <Link to={`/menu/${value.id}`}>
                                <img src={value.img} alt="" />
                            </Link>
                            <div className="infoProduct">
                                <h4>{value.name}</h4>
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

export default Menu
