import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import game_23 from '../src/img/game_23.jpg'


function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
                <img src={game_23} className="d-block w-100" alt="First slide" width={250} height={250} />
      </Carousel.Item>
      <Carousel.Item>
                <img src={game_23} className="d-block w-100" alt="First slide" width={250} height={250} />
      </Carousel.Item>
      <Carousel.Item>
                <img src={game_23} className="d-block w-100" alt="First slide" width={250} height={250} />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
