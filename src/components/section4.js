import Button from "react-bootstrap/esm/Button";

export default function Sectionfour () {

    return (
        <div className="section-four" style={{backgroundColor:"red", borderBottomRightRadius:"80%"}}>
            <div className="section-four-container">
                <div className="section-four-left">
                    <h3>Supporting Heading</h3>
                    <h2>Highlights</h2>
                    <p>Pulvinar accumsan lacus accumsan. A expedita laudantium, 
                        habitant maiores voluptatum massa curae, senectus distinctio porro distinctio 
                        necessitatibus iste.</p>
                </div>
                <div className="section-four-right">
                    <div className="cards">
                        <div style=
                        {{backgroundColor:"white", 
                        width:"18rem", 
                        height:"18rem",
                        padding:'10px 30px', 
                        marginRight:'20px',
                        borderRadius:'10px'
                        }}>
                        <i class="bi bi-person-gear"></i>
                        <h3>Health</h3>
                        <p>Click edit button to change this text. Lorem ipsum dolor sit amet consecte.</p>
                        </div>
                        <br/>
                        <Button>Click Here</Button>
                    </div>
                    <div className="cards">
                        <div style=
                        {{backgroundColor:"white", 
                        width:"18rem", 
                        height:"18rem",
                        padding:'10px', 
                        marginRight:'20px',
                        borderRadius:'10px'
                        }}>
                        <i class="bi bi-person-gear"></i>
                        <h3>Health</h3>
                        <p>Click edit button to change this text. Lorem ipsum dolor sit amet consecte.</p>
                        </div>
                        <br/>
                        <Button>Click Here</Button>
                    </div>
                    <div className="cards">
                        <div style=
                        {{backgroundColor:"white", 
                        width:"18rem", 
                        height:"18rem",
                        padding:'10px', 
                        marginRight:'20px',
                        borderRadius:'10px'
                        }}>
                        <i class="bi bi-person-gear"></i>
                        <h3>Health</h3>
                        <p>Click edit button to change this text. Lorem ipsum dolor sit amet consecte.</p>
                        </div>
                        <br/>
                        <Button>Click Here</Button>
                    </div>
                    <div className="cards">
                        <div style=
                        {{backgroundColor:"white", 
                        width:"18rem", 
                        height:"18rem",
                        padding:'10px', 
                        marginRight:'20px',
                        borderRadius:'10px'
                        }}>
                        <i class="bi bi-person-gear"></i>
                        <h3>Health</h3>
                        <p>Click edit button to change this text. Lorem ipsum dolor sit amet consecte.</p>
                        </div>
                        <br/>
                        <Button>Click Here</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}