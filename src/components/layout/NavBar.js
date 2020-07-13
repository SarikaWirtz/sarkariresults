import React from 'react'
// import { Link } from 'react-router-dom'
import 'materialize-css';
import { Navbar, NavItem, Icon } from 'react-materialize';
// import $ from 'jquery';


const NavBar = () => {
    return (
        <div className="navbar">
            <Navbar className="wrapper-nav container"
            alignLinks="left"
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }} >   
            
                <NavItem href="/"> Home </NavItem>
                <NavItem href="#"> Result</NavItem>
                <NavItem href="#"> Admit Card</NavItem>
                <NavItem href="#"> Latest Job</NavItem>
                <NavItem href="#"> Admission</NavItem>
                <NavItem href="#"> Syllabus</NavItem>
                <NavItem href="#"> Answer Key</NavItem>
            
            </Navbar>
        </div>
    )
}

 export default NavBar;
