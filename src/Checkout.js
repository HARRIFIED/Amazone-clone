import React from 'react';
import { useStateValue } from './StateProvider';  
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout_layout">
            <div className="checkout">
                    <div className="checkout_left">
                        <img 
                        className="checkout-image"
                        src=""
                        alt=""
                        />
                        {basket?.length === 0  ? (
                            <div>
                                <h2>Your Shopping Basket is empty</h2>
                                <p>
                                    You have no items in your basket. 
                                    Add items to your baskt using the Add to basket button
                                </p>
                            </div>
                        ) : (
                            <div>
                                <h2 className="checkout-title">Your shopping basket</h2>
                                {basket?.map(item => (
                                    <CheckoutProduct key={item.id}
                                    id={item.id} 
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                                ))}
                                
                            </div>
                        )}
                    </div>
                    {basket.length > 0 && (
                        <div className="checkout_right">
                            <Subtotal />
                        </div>
                    ) }
            </div>

        </div>
    )
}

export default Checkout
