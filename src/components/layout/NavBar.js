import React, { Component } from 'react'
import 'materialize-css';
import { SideNav, Navbar, NavItem, Dropdown, Icon, Divider } from 'react-materialize';
// import $ from 'jquery';


const NavBar = () => {
    return (
        <Navbar className="navbar"
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
        
            <NavItem href="#"> Home </NavItem>
            <NavItem href="#"> Result</NavItem>
            <NavItem href="#"> Admit Card</NavItem>
            <NavItem href="#"> Latest Job</NavItem>
            <NavItem href="#"> Admission</NavItem>
            <NavItem href="#"> Syllabus</NavItem>
            <NavItem href="#"> Answer Key</NavItem>
        
        </Navbar>
    )
}

 export default NavBar;
