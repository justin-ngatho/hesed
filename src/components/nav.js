import { useState } from "react";
import { BarChartLineFill } from "react-bootstrap-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#" style={{paddingRight:'20px'}}>
          <img style={{width:'100px'}} src="./hesed/logo2.jpeg"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleButton}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div class="dropdown">
                <button class="dropbtn">Know us <i class="bi bi-chevron-down"></i></button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
            <div class="dropdown">
                <button class="dropbtn">What We Do <i class="bi bi-chevron-down"></i></button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
            <div class="dropdown">
                <button class="dropbtn">Our Impact</button>
              </div>
            </li>
            <li className="nav-item">
            <div class="dropdown">
                <button class="dropbtn">Contact </button>
              </div>
            </li>
            <li>
            <div class="dropdown">
                <button class="dropbtn">Get Involved <i class="bi bi-chevron-down"></i></button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </li>
            <li>
            <button class="dropbtn">Contact</button>
            </li>
            <li>
            <button style={{backgroundColor:'red', borderRadius:'20px', padding:'10px 50px',}} class="dropbtn">Donate</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
