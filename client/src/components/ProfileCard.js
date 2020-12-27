import React from 'react'
import {Card,Container,Row ,Col,Image,ListGroup,ListGroupItem} from 'react-bootstrap'

function ProfileCard({auth}) {
    return (
        <Card >
            <div style={{display:"flex"}}>
                <div>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                        <Image src="avatar.jpg " style={{width:"10rem"}}  roundedCircle />
                        </Col>
                    </Row>
                </Container>
                </div>
                <div>
                <Card.Body>
                <Card.Title>{auth.user.firstName +' ' +auth.user.lastName}</Card.Title>
                <Card.Text>
                    hi, i'm a user....
                </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>age : {auth.user.age}</ListGroupItem>
                    <ListGroupItem>email :{auth.user.email}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link className="teal-text" to="/Editprofile" href="#">Edit Profile</Card.Link>
                </Card.Body>
                </div>
            </div>
        </Card>          
    )
}

export default ProfileCard
