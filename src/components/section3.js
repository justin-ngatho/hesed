
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SectionThree () {

    return (
      <div
        style={{
          backgroundImage: "url(./hesed/hero3.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
        <div style={{display: "flex"}}>
          <header
            style={{
              backgroundColor: "black",
              width: "40%",
              height: "140vh",
              justifyContent: "center",
              paddingTop: "35%",
              textAlign: "center",
              marginRight:"2rem"
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
          <header>
            <div style={{width:"18rem", backgroundColor:"black", marginTop:'150%', height:'74vh',padding:"10px", borderRightColor:'white',borderRightStyle:'solid',  }}>
            <img src='./hesed/section3.jpg' style={{width:"100%", height:'150px'}}/>
            <br/>
            <h2>Suitable Heading</h2>
            <br/><br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <br/>
            <Button>Read More</Button>
            </div>
            
          </header>
          <header>
            <div style={{width:"18rem", backgroundColor:"black", marginTop:'150%', height:'74vh',
                padding:"10px", borderRightColor:'white',borderRightStyle:'solid',  }}>
            <img src='./hesed/section3.jpg' style={{width:"100%", height:'150px'}}/>
            <h2>Suitable Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <Button>Read More</Button>
            </div>
            
          </header>
          <header>
            <div style={{width:"18rem", backgroundColor:"black", marginTop:'150%', height:'74vh',
                padding:"10px", }}>
            <img src='./hesed/section3.jpg' style={{width:"100%", height:'150px',}}/>
            <h2>Suitable Heading</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <Button>Read More</Button>
            </div>
            
          </header>
        </div>
      </div>
    );
}