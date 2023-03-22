import { Carousel } from 'react-bootstrap';
import Footer from './footer';
import Navbar from './Navbar';

import game_01 from '../src/img/game_01.jpg'
import game_01_2 from '../src/img/game_01-2.jpg'



function Game01() {

    return (

<div>
    <Navbar/>
    <div id="slide_game">
            <Carousel style={{width: "250px", height: "250px",float: 'left'}}>
  <Carousel.Item interval={1000}>
    <img src={game_01} className="img_responsive" alt="..." style={{height: "250px"}} />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img src={game_01_2} className="img_responsive" alt="..." style={{height: "250px"}} />
  </Carousel.Item>
</Carousel>

     </div>  
    
    <Footer/>
</div>      

   )
}
export default Game01;