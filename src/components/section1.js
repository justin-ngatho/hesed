
export default function SectionOne () {
    const myStyle = {
        backgroundImage: "url(/section1.jpg)",
        height: "auto",
        // marginTop: "-70px",
        // fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color:"white"
    };
    return ( 
        <header className="section-one" style={myStyle}>
            <div className="section-one-caption">
            <h5>A calling to serve</h5>
            <h1>A Society with Access To All Basic Rights</h1>
            <br/><br/><br/>
            <p>Voice of Reconciliation and Pacification works mainly with the most vulnerable members 
                of the society to equip them with vital skills and knowledge and link these with existing 
                resources and opportunities identified in order to put them on the path towards 
                self – reliance.</p>
                <br/> <br/> <br/>
            <a href="">Learn More</a>
            </div>
        
        </header>
    )
} 