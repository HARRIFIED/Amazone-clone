import { Carousel } from 'react-bootstrap';
import {useState} from 'react';
import './Home.css';


const imgStyle ={ 
  width:'100%',
  maskImage:'linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 1))',
  zIndex: '-1',
  marginBottom: '-350px',
}


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={10000}>
      <Carousel.Item>
        <img style={imgStyle}
          className="home-image"
          src="https://m.media-amazon.com/images/I/51jljUCi27L._SX3000_.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imgStyle}
          className="home-image"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imgStyle}
          className="home-image"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={imgStyle}
          className="home-image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}




export default ControlledCarousel;