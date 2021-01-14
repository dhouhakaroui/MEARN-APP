import React from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";
import photo from "../res/background.jpeg"

const BlogPage = () => {
  return (
    <MDBCard className="px-5">
      <MDBCard reverse>
        <MDBView hover cascade waves>
          <img src={photo} className="img-fluid" style={{height:"80vh"}} />
          <MDBMask overlay="white-slight" className="waves-light" />
        </MDBView>
        <MDBCardBody cascade className="text-center" >
          <h1 className="teal-text" >DEV_DIW</h1>
          <h2>social media for developers</h2>
        </MDBCardBody>
      </MDBCard>
      <MDBContainer className="text-center">
        <div style={{margin:"30px"}}>         
          <h2 className="font-weight-bold" > WELCOME </h2>
          <p className="teal-text" >
            Written by <strong className="black-text"> GO MY CODE Students</strong>, 
            {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}
          </p>
        </div>  
      </MDBContainer>
    </MDBCard>
  );
}

export default BlogPage;
