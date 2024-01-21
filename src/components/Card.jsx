import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart'
          
const Card = () => {

  const formatPrice = (price) => {
    return price.toLocaleString('ru-RU');
};

  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart()


  if (isEmpty) {
    return (
      <div className="Menu">
        <div class="card">
          <div class="card-header">
            Ошибка !
          </div>
          <div class="card-body">
            <h5 class="card-title">Каризина пустая</h5>
            <p class="card-text">Зайдите в меню и выбериет себе еду.</p>
            <Link to={'/menu'}>

              <a href="#" class="btn btn-warning">В меню</a>
            </Link>
          </div>
        </div>
      </div>

    );
  }
  return (
    <section className='py-4 Menu'>
      <div className='row justufy-content-center'>
        <div className="col-12">
          <h5>В Карзине ({totalUniqueItems}) Всего набрана: ({totalItems})</h5>
          <table className='table table-light table-hover m-o'>
            <tbody>
              {items.map((value, index) => {
                return (
                  <tr className='cartProduct' key={index}>
                    <td>
                      <img src={value.image} style={{ height: '6rem' }} alt="" />
                    </td>
                    <td>{value.name}</td>
                    <td className='price'>{formatPrice(value.price)}</td>
                    <td>Количество: ({value.quantity})</td>
                    <td>
                      <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(value.id, value.quantity - 1)}>-</button>
                      <button className='btn btn-info ms-2' onClick={() => updateItemQuantity(value.id, value.quantity + 1)}>+</button>
                      <button className='btn btn-danger ms-2' onClick={() => removeItem(value.id)}>Удалить</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='col-auto ms-auto'>
          <h2 className='price'>Общая цена: {formatPrice(cartTotal)}</h2>
        </div>
        <div className="col-auto">
          <button className='btn btn-danger'
            onClick={() => emptyCart()}>
            Удалить всё
          </button>
          <button className='btn btn-primary m-2'>
            Купить сейчас же
          </button>
        </div>
      </div>
    </section>
  )
}

export default Card
