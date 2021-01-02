import React from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";

const BlogPage = () => {
  return (
    <MDBCard className="px-5">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                  alt=""
                  className="img-fluid"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center" >
                <h2 className="font-weight-bold" > WELCOME </h2>
                <p>
                  Written by <strong> GO MY CODE Students</strong>, 19/12/2020
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
