
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Hero() {
  
  

  return (
    <div className='container-carousel'>
    <Carousel style={{}} interval={null} >
      
      <Carousel.Item>
        <img className="d-block w-100 img-fluid" src="./hesed/hero1.jpg" alt="image" />
        
          <div className="card-body">
            <br/>
            <h5 className="card-title">A Society With Access To All Basic Rights</h5>
            <p className="card-text">
            HESED Africa works mainly with the most vulnerable members of the society to equip them with vital skills and knowledge and link these with existing
             resources and opportunities identified in order to put them on the path towards self – reliance
                      
            </p>
            <a href="#" className="btn btn-primary" style={{marginBottom:"20px", backgroundColor:"red"}}>
              Read More
            </a>
          </div>
          
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 img-fluid' src="./hesed/hero1.jpg" alt="image" />
        <div className="card-body">
            <br/>
            <h5 className="card-title">Donate Towards A Worthy Cause</h5>
            <p className="card-text">
            Any contribution will bring an impact in the lives of those intended. 
            The project managers will provide regular updates on sponsored projects.
            </p>
            <a href="#" className="btn btn-primary" style={{marginBottom:"20px", backgroundColor:"red"}}>
              Make a Donation </a>
            <br/>
          </div>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100 img-fluid' src="./hesed/hero1.jpg" alt="image" />
        <div className="card-body">
            <br/>
            <h5 className="card-title">Impactful Partnerships</h5>
            <p className="card-text">
            Our programs are based on well researched community development 
            proposals that ensure achievement of global millennium goals and poverty reduction.
            </p>
            <a href="#" className="btn btn-primary" style={{marginBottom:"20px", backgroundColor:"red"}}>
              Patner With Us
            </a>
<br/>
          </div>
      </Carousel.Item>
     
    </Carousel>
    </div>
  );
}

export default Hero;