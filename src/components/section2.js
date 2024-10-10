import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function SectionTwo() {

     // State to keep track of which item is clicked (null means no item is expanded)
  const [expandedItem, setExpandedItem] = useState(null);

  // Function to toggle the expanded state of the clicked item
  const toggleItem = (itemId) => {
    if (expandedItem === itemId) {
      // If the same item is clicked, close it
      setExpandedItem(null);
    } else {
      // Otherwise, set the clicked item as expanded
      setExpandedItem(itemId);
    }
  };



  return (
    <header className="section-two">
      <div className="section-two-content">
        <Card style={{ width: "80vw", backgroundColor: "red", borderColor: "white"}}>
          <ListGroup variant="flush" style={{backgroundColor: "red" }}>
            <ListGroup.Item onClick={() => toggleItem(1)} style={{ backgroundColor: 'red', borderWidth: '1px', 
            padding:'20px', textTransform:'uppercase', color:'white', fontWeight:'bolder',cursor: 'pointer' }}>
               <i className="bi bi-plus-lg"></i> Cras justo odio</ListGroup.Item>
                {expandedItem === 1 && (
          <div style={{ padding: '30px', backgroundColor: 'red', color: 'white',borderStyle:'solid',
                         borderWidth:'1px'
           }}>
            Additional information for "Cras justo odio".
          </div>
        )}
            <ListGroup.Item onClick={() => toggleItem(2)} style={{ backgroundColor: 'red', borderWidth: '1px',
                padding:'20px', textTransform:'uppercase', color:'white', fontWeight:'bolder',cursor: 'pointer'
             }}> <i class="bi bi-plus-lg"></i>
                Dapibus ac facilisis in</ListGroup.Item>
                {expandedItem === 2 && (
          <div style={{ padding: '30px', backgroundColor: 'red',borderWidth: '1px',
          padding:'20px', textTransform:'uppercase', color:'white', fontWeight:'bolder',cursor: 'pointer'
           }}>
            Additional information for "Dapibus ac facilisis in".
          </div>
        )}
            <ListGroup.Item onClick={() => toggleItem(3)} style={{ backgroundColor: 'red',borderWidth: '1px',
                padding:'20px', textTransform:'uppercase', color:'white', fontWeight:'bolder',cursor: 'pointer'
             }}> <i class="bi bi-plus-lg"></i>
                Vestibulum at eros</ListGroup.Item>
                {expandedItem === 3 && (
          <div style={{ padding: '30px', backgroundColor: 'red',borderWidth: '1px'}}>
            Additional information for "Dapibus ac facilisis in".
          </div>

        )}
        <ListGroup.Item onClick={() => toggleItem(4)} style={{ backgroundColor: 'red', borderWidth: '1px',
            padding:'20px', textTransform:'uppercase', color:'white', fontWeight:'bolder',cursor: 'pointer'
         }}> <i class="bi bi-plus-lg"></i>
                Cras justo odio</ListGroup.Item>
                {expandedItem === 4 && (
          <div style={{ padding: '30px', backgroundColor: 'red', color: 'white',borderStyle:'solid',
                         borderWidth:'1px',
           }}>
            Additional information for "Cras justo odio".
          </div>
        )}
          </ListGroup>
        </Card>
      </div>
      <br/>
      <div className='section-two-two' style={{textAlign:'center'}}>
        <h1 style={{color:'black', fontWeight:'bolder' }}>Our Key Plillars</h1>
        <p style={{padding:'10px 20%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

        <div className='section-two-two-content' style={{display:'flex', padding: '10px 10%'}}>
            <div style={{padding: '10px 30px'}}>
                <img src='./hesed/service-thumb-1.jpg' style={{width:'100px', height:'100px'}}/>
                 <h2>Stop GBV</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>

            <div style={{padding: '10px 30px'}}>
                <img src='./hesed/service-thumb-1.jpg' style={{width:'100px', height:'100px'}}/>
                 <h2>Stop GBV</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>

            <div style={{padding: '10px 30px'}}>
                <img src='./hesed/service-thumb-1.jpg' style={{width:'100px', height:'100px'}}/>
                 <h2>Stop GBV</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            
        </div>    
        
      </div>
    </header>
  );
}
