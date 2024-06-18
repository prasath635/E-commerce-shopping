import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


function DarkVariantExample() {
  return (
    <Carousel id='home' data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:"85vh"}}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-with-curly-hairstyle-sexy-man-dressed-jeans-jacket-fashion-male-isolated-blue-wall-studio-sunglasses_158538-26554.jpg?t=st=1716201162~exp=1716204762~hmac=26a411b18d9ca90e6273608495ff562e3a7869114b414d3bd1bbe9e7f9443058&w=900"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>MENS</h1>
          <p>Click below to explore exclusive collections foe handsome mens</p>
          <Button variant="dark">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"85vh"}}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/enthusiastic-long-haired-female-photographer-playing-with-red-skirt_197531-7751.jpg?w=1060&t=st=1716200856~exp=1716201456~hmac=b6bab31787c382c7a7b17323e924361958dd3552c8b292a1a4c114ba99a5a7bd"
          alt="Second slide"
        />
        <h1></h1>
        <Carousel.Caption>
          <h1 style={{color:"white"}}>WOMENS</h1>
          <p style={{color:"white"}}> Beautiful and trendy collections exclusive for women</p>
          <Button variant="light">Shop Now</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"85vh"}}
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/portrait-cute-little-boy-stylish-jeans-clothes_155003-12191.jpg?t=st=1716201079~exp=1716204679~hmac=a6ca159c9e3a2455e299ce81c1c28fc17534ce548c368a3b02bdf0492b8dcdaf&w=1060"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1> KIDS </h1>
          <p> New and exclusive for kids
          </p>
          <Button variant="dark">Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;