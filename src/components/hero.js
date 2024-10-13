
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  
  

  return (
    <div className='container-carousel'>
    <Carousel style={{}} interval={null}>
      
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src="./hesed/hero1.jpg" alt="image" />
        
          <div className="card-body">
            <br/>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              Some quick example text to build on the card title and make up the
              bulk of the card's content. 
                          
            </p>
            <a href="#" className="btn btn-primary" style={{marginBottom:"20px"}}>
              Go somewhere 
            </a>
          </div>
          
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 img-fluid' src="./hesed/hero1.jpg" alt="image" />
        <div className="card-body">
            <br/>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
            <br/>
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 img-fluid' src="./hesed/hero1.jpg" alt="image" />
        <div className="card-body">
            <br/>
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
<br/>
          </div>
      </Carousel.Item>
     
    </Carousel>
    </div>
  );
}

export default Hero;