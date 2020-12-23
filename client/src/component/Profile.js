import {React ,useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loadUser} from '../actions/authActions'
import SpinnerPage from './Spinner'
import {Card,Container,Row ,Col,Image,ListGroup,ListGroupItem} from 'react-bootstrap'
import NewPost from './newPost'
function Profile() {
    const dispatch=useDispatch()
    const auth=useSelector(state=>state.authReducer)
    useEffect(() => {dispatch(loadUser())}, [])
    return (
        <div>
            {!auth?
            <SpinnerPage/>:
        <div>{auth.user&& 
            <div>
                <Card  style={{ width: '30rem' }}>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                            <Image src="avatar.jpg" style={{width:180}}  roundedCircle />
                            </Col>
                        </Row>
                    </Container>
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
                        <Card.Link href="#">Edit Profile</Card.Link>
                        <Card.Link href="#">New Post</Card.Link>
                    </Card.Body>
                </Card>  
                <div>
                   <NewPost user={auth.user}/> 
                </div>              
            </div>
        }</div>}
        </div>
    )
}

export default Profile
