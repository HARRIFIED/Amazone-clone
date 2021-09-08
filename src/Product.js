import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useStateValue} from './StateProvider';

const Product = ({ id, title, price, image, rating}) => {

    const  [{}, dispatch] = useStateValue();

    const addToBasket = () => {
      //Add item to basket bt using dispatch
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };

    return (
        <div className="product">
          <div className="product-info">
            <p>{title}</p>
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
          </div>
          <img className="product-image" src={image} alt="product" />
          <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}


export default Product;