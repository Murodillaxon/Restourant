import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from 'react-use-cart';
import Slider from './Carousel';

const Navbar = () => {


  const { totalUniqueItems } = useCart()
  console.log(totalUniqueItems + 'slsl');
  return (
    <div className='header'>
      <div className='container'>
        <div className='header-line'>
          <div className='header-logo'>
            <img src="logo.png" alt="" />
          </div>

          <div className='nav'>
            <Link to={"/"}>
              <a className='nav-item' href="@">ГЛАВНАЯ</a>
            </Link>
            <Link to={"/menu"}>
              <a className='nav-item' href="@">МЕНЮ</a>
            </Link>
            <Link to={'/contact'}>
              <a className='nav-item'>ОБРАТНАЯ СВЯЗЬ</a>
            </Link>
            <a className='nav-item' href="@">БРОНЬ</a>
          </div>

          <div className='cart'>
            <a href="#">
              <img className='cart-img' src="cart.png" alt="" />
            </a>
          </div>

          <div className='phone'>
            <div className='phone-holder'>
              <div className='phone-img'>
                <img src="phone.png" alt="" />
              </div>

              <div className='number'><a className='num' href='#'>+998-93-058-60-53</a></div>
            </div>

            <div className='phone-text'>
              Свяжитесь с нами для <br /> бронирования
            </div>
          </div>

          <div className='btn position-relative'>
            <Link to={'/card'} className='button' href='#'>Каризина <MdOutlineShoppingCart /></Link>

            {
              totalUniqueItems === 0 ? null : <div className='totalItems'> {totalUniqueItems}</div>
            }

          </div>

          <div className='burger-menu'>


            <div id='menu' className='burger-slide disp'>
              <Link to={"/"}>
                <a className='nav-item' href="@">ГЛАВНАЯ</a>
              </Link>
              <Link to={"/menu"}>
                <a className='nav-item' href="@">МЕНЮ</a>
              </Link>
              <Link to={'/contact'}>
                <a className='nav-item'>ОБРАТНАЯ СВЯЗЬ</a>
              </Link>
              <a className='nav-item block' href="/registration">БРОНЬ</a>
            </div>
          </div>
        </div>

        <div className='header-down'>
          <div className='header-title'>
            Добро пожаловать в
            <div className='header-subtitle'>
              Наш ресторан
            </div>
            <div className='header-suptitle'>
              ДОМ ЛУЧШЕЙ ЕДЫ
            </div>
            <div className='header-bth'>
              <a href='#' className='header-button'>VIEW MENU</a>
            </div>
          </div><Slider />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
