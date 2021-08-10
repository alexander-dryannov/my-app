import React from 'react'
import { Card, Alert } from 'react-bootstrap'
import '../assets/styles/Users.scss'
import { useFetch } from '../utils'

export default function UsersPage() {
    const link = 'https://jsonplaceholder.typicode.com/users'
    const [data, error] = useFetch({link: link, limit: 8})

    return(
        <div className="container" style={{'width': '45rem'}}>
            <h1 className="text-center mt-5 mb-5">Users page</h1>
            {error && <Alert variant="danger">{ error }</Alert>}
            {data && data.map((item, index) => 
                <Card key={index} className="mt-3 p-3">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Body>{item.email}</Card.Body>
                </Card>
                )
            }
        </div>
    )
}