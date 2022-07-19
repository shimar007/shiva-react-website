import React from "react";
import LeftRightComponent from "../components/LeftRightComponent";
import BodyWrapper from "./BodyWrapper";
import Footer from "./Footer";

function Body() {
    return (
        <BodyWrapper>
            <LeftRightComponent />
            <Footer />
        </BodyWrapper>
    );
}
  
export default Body;