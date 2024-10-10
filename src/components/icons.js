
import { useState } from "react";
import { BarChartLineFill } from "react-bootstrap-icons";
import { Facebook } from "react-bootstrap-icons";


export default function Icons () {

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
       
      <div className="container-icons">
        
        <a className="navbar-brand" href="#"><i class="bi bi-facebook"></i></a>
        <a className="navbar-brand" href="#"><i class="bi bi-twitter"></i></a>
        <a className="navbar-brand" href="#"><i class="bi bi-instagram"></i></a>
        <a className="navbar-brand" href="#"><i class="bi bi-search"></i></a>
      </div>
    </nav>

    )
}