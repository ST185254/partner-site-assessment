import React from "react";
import PackageList from './components/PackageList';

import {allPackages} from './packageOfferings';
function HelpPage() {
    return (
        <div>
            <div className="container">
            <div className="col-lg-9 jumbotron">
                <h1>FAQ</h1>
            </div>
            
        </div>
        <div className="container">
        <p>
            <b>Question</b> Where can I find Aloha Online Version?
        </p>
        <p>
            <b>Ans</b> Navigate to XYZ location to check the version number.
        </p>
    </div>
    <PackageList recommendedPackages={allPackages}/>
        </div>
        
    );
  }
  
  export default HelpPage;