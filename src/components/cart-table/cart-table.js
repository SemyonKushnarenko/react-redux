import React from 'react'
import './cart-table.scss'
import {connect} from 'react-redux'
import {onDeleteFromCart} from '../../actions'

const CartTable = ({itemsInCart, onDeleteFromCart, totalPrice}) => {
    function checkData(items) {
        if (items.length) {
            return (
                <>
                    <div className="cart__title">Ваш заказ:</div>
                    <div className="cart__list">
                        {items.map(item => {
                            const {title, price, url, qtty, id} = item
                            return (
                                        <div key={id} className="cart__item">
                                            <img src={url} className="cart__item-img" alt={title}></img>
                                            <div className="cart__item-title">{title}</div>
                                            <div className="cart__item-price">{price}$ * {qtty}</div>
                                            <div onClick={() => onDeleteFromCart(id)} className="cart__close">&times;</div>
                                        </div>
                            )
                        })}
                    </div>
                    
                    <div className="cart__price"> 
                        <p>Цена: <span className="price">{totalPrice}</span></p>
                    </div>
                </>
            )
        }
        return <p className="cart__empty">Your cart is empty</p>
    }
    return checkData(itemsInCart)
};

const mapStateToProps = ({itemsInCart, totalPrice}) => {
    return {itemsInCart, totalPrice}
}

export default connect(mapStateToProps, {onDeleteFromCart})(CartTable);