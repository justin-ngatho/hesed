
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SectionThree () {

    return (
      <div
        style={{
         
          
          color: "white",
        }}
      >
        <header
          className="section-three"
          style={{
            borderBottomStyle: "solid",
            borderBottomColor: "white",
          }}
        >
          <div className="section-three-content">
            <i class="bi bi-quote"></i>
            <h2>Calls on us to Take action right NOW!</h2>
            <p>
              From Saying NO to Gender Based Violence, keeping young girls in
              school by providing menstrual kits, to advocating for a society
              with access to all basic rights
            </p>
          </div>
        </header>
        <div className='section-three-container'style={{display: "flex", backgroundImage: "url(./hesed/hero3.jpg)",backgroundSize: "cover",
          backgroundRepeat: "no-repeat",}}>
          <header className='section three-blackie'
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "auto",
              justifyContent: "center",
              paddingTop: "35%",
              textAlign: "center",
              marginRight:"2rem",
              paddingBottom:"10%"
            }}
          >
            <div className="section-three-black" style={{}}>
              <h2>Success Stories</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </header>
          <header className='section-three-left' style={{width:"100%", }}>
            <div className='cards-section-three' style={{ backgroundColor:"black", height:'auto',padding:"50px",marginTop:'150px', borderRightColor:'white',borderRightStyle:'solid',  }}>
            <img src='./hesed/section3.jpg' style={{width:"100%", height:'150px'}} className='w-100 img-fluid'/>
            <br/>
            <h2>Suitable Heading</h2>
            <br/><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <br/>
            <Button>Read More</Button>
            </div>
            
          </header>
          <header className = 'section-three-left' style={{width:'100%'}}>
            <div style={{marginTop:'150px', backgroundColor:"black", height:'auto',
                padding:"50px", borderRightColor:'white',borderRightStyle:'solid',  }}>
            <img src='./hesed/section3.jpg' style={{width:"100%", height:'150px'}} className='w-100 img-fluid'/>
            <br/>
            <h2>Suitable Heading</h2> <br/><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <br/>
            <Button>Read More</Button>
            
            </div>
            
          </header>
          <header className='section-three-left' style={{width:"100%"}}>
            <div style={{ backgroundColor:"black", height:'auto',
                padding:"50px",marginTop:'150px' }}>
            <img src='./hesed/section3.jpg' style={{width:"100%", height:'150px',}}/>
            <br/>
            <h2>Suitable Heading</h2> <br/><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p><br/>
            <Button>Read More</Button>
            </div>
            
          </header>
        </div>
      </div>
    );
}