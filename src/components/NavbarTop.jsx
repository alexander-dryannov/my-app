import React from 'react'
import HomePage from '../pages/Home'
import PostsPage from '../pages/Posts'
import UsersPage from '../pages/Users'
import { Link, Switch, Route, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import '../assets/styles/NavbarTop.scss'
import SigninPage from '../pages/Signin';


export default function NavbarTop() {
    const {pathname} = useLocation()
    const pages = [{namePage: 'Home', link: '/'}, {namePage: 'Posts', link: '/posts'}, {namePage: 'Users', link: '/users'}]
    
    return(
        <header className="header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">My <span>App</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {pages.map((item, index) =>
                                <Nav.Link key={index} as={Link} className={pathname === item.link ? 'active' : ''} to={item.link}>{item.namePage}</Nav.Link>
                            )}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/posts">Sign Up</Nav.Link>
                            <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/posts">
                    <PostsPage />
                </Route>
                <Route exact path="/users">
                    <UsersPage />
                </Route>
                <Route exact path="/sign-in">
                    <SigninPage />
                </Route>
            </Switch>
        </header>
    )
}