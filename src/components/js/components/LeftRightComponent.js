import React from "react";
import Logo from "./Logo";


function LeftRightComponent() {
    return (
        <div className="left-right-content-component">
            <div className="left-content">
                <Logo />
                Left Side Content
            </div>
            <div className="right-content">
                Right Side Content
            </div>
        </div>
    );
}
  
export default LeftRightComponent;