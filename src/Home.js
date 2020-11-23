import React from "react";
import { Link } from "react-router-dom";


function HomePage() {
    return (
        <div>
            <div className="container">
            <div>
                <h1>Partner Site Assessment</h1>
            </div>
            
        </div>
        <div className="container">
        <p>
        This tool is build for customers interested in leveraging one or more partnerships. This tool collects both technical system data as well as their staffs skills as it relates to the activities needed to complete the activation. The tool would 
        
        </p>
        <ol>
            <li>
            ensure minimum requirements for technical specifications to determine what if any gaps exist. 
            </li>
            <li>
            With a skills assessment, measure the risk associated with a self-activation.. 
        
            </li>
        </ol>
    </div>

    <div className="container">
       
        <Link to="/survey">  <button className= "btn btn-primary btn-lg btn-block">
            Start Survey </button>
        </Link>
        
    </div>
        </div>
        
    );
  }
  
  export default HomePage;