import React from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";
import photo from "../res/background.jpeg"

const BlogPage = () => {
  return (
    <MDBCard className="px-5">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src={photo}
                  alt=""
                  className="img-fluid"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center" >
                <h2 className="font-weight-bold teal-text" > WELCOME </h2>
                <p className="teal-text" >
                  Written by <strong className="black-text"> GO MY CODE Students</strong>, 
                  {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()}
                </p>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <p>
              Blogs are a special type of website that can be presented as a kind of private diary published on the Web, and accessible to Internet users around the world. This is a simplified version of a website, offered turnkey to Internet users, and technically managed by a publisher.
              </p>
              <p>
              Concretely, the blog therefore allows certain Internet users, bloggers, to share their opinions, comments, moods, points of view on the news, by writing articles, posting photos, etc.
              </p>
            </MDBContainer>
    </MDBCard>
  );
}

export default BlogPage;
