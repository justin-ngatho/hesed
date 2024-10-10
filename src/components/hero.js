
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  
  

  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img src="./hesed/hero1.jpg" alt="image"/>

          <div className="card-body">
            <br/>
             <br/>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./hesed/hero1.jpg" alt="image" />
        <div className="card-body">
            <br/>
             <br/>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./hesed/hero1.jpg" alt="image" />
        <div className="card-body">
            <br/>
             <br/>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;