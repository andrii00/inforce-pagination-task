import {ListGroup} from "react-bootstrap";

export default function postItem({post}) {
    return (
        <ListGroup>
            <ListGroup.Item className="mb-2 w-50 m-auto "><h5 className='text-primary'>{post.id} - {post.title}</h5>
                <hr/>
                <h6 className='text-secondary'>Body</h6>
                <p className='text-secondary'>{post.body}</p>
            </ListGroup.Item>
        </ListGroup>
    )
}