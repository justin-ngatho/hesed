
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export default function SectionThreeThree() {

    // State to track visibility of each section
  const [openStates, setOpenStates] = useState(null);

  // Function to toggle the visibility of a specific section
  const toggleFade = (index) => {
    
    setOpenStates(openStates === index ? null : index);

  };
    return (
        <header className='section-two'>
            <div className='section-two-content'>
        <Card style={{ width: '80vw', width: "80vw", backgroundColor: "red", borderColor: "white" }}>
      <ListGroup variant="flush">
        <ListGroup.Item style={{ backgroundColor: 'red', borderWidth: '1px', 
             textTransform:'uppercase', color:'white', fontWeight:'bolder',cursor: 'pointer' }}>
                <Button
        onClick={() => toggleFade(0)}
       aria-controls="fade-text-1"
          aria-expanded={openStates === 0}
           style={{backgroundColor:'red',borderColor:'red', width:'75vw', height:'100%', textAlign:'left',
        textTransform:'none', color:'white',
        fontWeight:'bolder',}}
      >
       <i className="bi bi-plus-lg" style={{width:'50px', color:'white', fontWeight:'bolder'}}></i> 
       MISSION
      </Button>
      
      <Collapse in={openStates === 0} >
        <div id="example-collapse-text" style={{paddingBottom:'15px'}}> <br/>
        To enhance livelihoods of vulnerable communities through development of health, 
        social and economic capacities.
        </div>
      </Collapse></ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: 'red', borderWidth: '1px', 
             textTransform:'none', color:'white', fontWeight:'bolder',cursor: 'pointer'  }}>
            <Button
        onClick= {() => toggleFade(1)}
       aria-controls="fade-text-1"
          aria-expanded={openStates === 0}
        style={{backgroundColor:'red',borderColor:'red', width:'75vw', height:'100%', textAlign:'left',
         color:'white', 
        fontWeight:'bolder',}}
      >
        <i class="bi bi-plus-lg"></i>VISION
      </Button>
      <br/>
      <Collapse in={openStates === 1}>
      <div id="example-collapse-text"style={{paddingBottom:'15px',textTransform:'none'}} >
      <br/> Vorps vision is to contribute to “A society with access to all basic rights”
        </div>      
      </Collapse></ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: 'red', borderWidth: '1px', 
              color:'white', fontWeight:'bolder',cursor: 'pointer' ,textTransform:'none', }}>
            <Button
        onClick= {() => toggleFade(2)}
       aria-controls="fade-text-1"
          aria-expanded={openStates === 0}
        style={{backgroundColor:'red',borderColor:'red', width:'75vw', height:'100%', textAlign:'left',
         color:'white', 
        fontWeight:'bolder',}}
      >
        <i class="bi bi-plus-lg"></i>OBJECTIVES
      </Button>
      <br/>
      <Collapse in={openStates === 2}>
      <div id="example-collapse-text"style={{paddingBottom:'15px', textTransform:'none'}} >
      <br/>Main Objective <br/><br/>
To alleviate poverty, promote access to healthcare services and improve the socioeconomic welfare of the most vulnerable communities including refugees. 
<br/><br/>Specific Objectives <br/> <br/>
           
1.	To promote economic empowerment through entrepreneurship support, income generating activities, job training and access to financial resources.<br/>

2.	Improve access to healthcare services, including sexual reproductive health and mental health support. <br/>

3.	To establish meaningful relationships, address negative thoughts, improve relationship skills, and create awareness for persons seeking psychosocial support.<br/> 

4.	To offer safe house shelter to provide protection and recovery to unaccompanied or separated refugee girls and children.<br/>

5.	To provide HIV Counselling and testing services, TB screening in some cases mobile, for the most vulnerable communities.<br/>

6.	To establish social relationships, identify goals, provide guidance and support to mentees to achieve their life goals<br/>

        </div> 
       
      </Collapse></ListGroup.Item>
      <ListGroup.Item style={{ backgroundColor: 'red', borderWidth: '1px', 
             textTransform:'uppercase', color:'white', fontWeight:'bolder',cursor: 'pointer'  }}>
            <Button
        onClick= {() => toggleFade(3)}
       aria-controls="fade-text-1"
          aria-expanded={openStates === 0}
        style={{backgroundColor:'red',borderColor:'red', width:'75vw', height:'100%', textAlign:'left',
         color:'white', 
        fontWeight:'bolder',}}
      >
        <i class="bi bi-plus-lg"></i>CORE VALUES
      </Button>
      <br/>
      <Collapse in={openStates === 3}>
      <div id="example-collapse-text"style={{paddingBottom:'15px'}} >
      <br/>Respect for all people and their dignity: <br/>
      Vorps Africa shares the dogma that a people are in charge of their own destiny.
      Promotion of community owned initiatives<br/>
        Transparency and accountability
        </div> 
       
      </Collapse></ListGroup.Item>
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
    )
}