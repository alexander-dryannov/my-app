import React from 'react'
import { Card, Alert } from 'react-bootstrap'
import '../assets/styles/Posts.scss'
import { useFetch } from '../utils'

export default function PostsPage() {
    const link = 'https://jsonplaceholder.typicode.com/posts'
    const [data, error] = useFetch({link: link, limit: 10})
    return(
        <div className="container" style={{'width': '45rem'}}>
            <h1 className="text-center mt-5 mb-5">Posts page</h1>
            {error && <Alert variant="danger">{ error }</Alert>}
            {data && data.map((item, index) => 
                <Card key={index} className="mt-3 p-3">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Body>{item.body}</Card.Body>
                </Card>
                )
            }
        </div>
    )
}