import React from "react";
import { MDBBox, MDBContainer, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
    return (
        <div style={{margin:10}}>
            <MDBFooter  className="default-color font-small  mt-4">
                <MDBContainer fluid  className="p-4">
                    <MDBBox display="flex" justifyContent="center">
                        <MDBIcon fab icon="github" className="white-text mr-4"  />
                        <MDBIcon fab icon="google" className="white-text mr-4" /> 
                        <MDBIcon fab icon="linkedin" className="white-text mr-4" /> 
                        <MDBIcon fab icon="twitter" className="white-text mr-4" />
                        <MDBIcon fab icon="instagram" className="white-text mr-4" />
                        <MDBIcon fab icon="facebook" className="white-text mr-4" />
                    </MDBBox> 
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid> &copy; {new Date().getFullYear()} Copyright
                        <p> DEV_DIW  by  GO MY CODE Students...</p>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;