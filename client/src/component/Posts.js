import {React , useState }from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Spinner from './Spinner'


function Posts() {
    const posts=useSelector(state=>state.postReducer.posts)
    return (
        <div className="App">
            {posts?
            posts.map(el=>
            <div>
            <h1>{el.name}</h1> 
            <p>{el.text}</p>
            </div>) :<Spinner/>
            }
        </div>
    )
}

export default Posts
