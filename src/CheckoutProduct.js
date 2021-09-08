import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeButton = () => {
        dispatch ({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="product" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                 <p className="product_price">
                 <small>$</small>
                 <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p><FontAwesomeIcon icon="star" style={{color: 'yellow'}} /></p>
                        ))
                    }
                </div>
                <button onClick={removeButton}>Remove from basket</button>
            </div>
        </div>

    );
}


export default CheckoutProduct