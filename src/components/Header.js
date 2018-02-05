import React,{ Component } from 'react';
import {Navbar, Nav, NavItem,Button} from 'react-bootstrap';
import {delete_cookie} from '../lib/helper'

import { LinkContainer } from 'react-router-bootstrap';
class Header extends  Component{
	constructor(props){
		super(props);
		this.state={
			token:''
		}
	}
	render(){
		return(
		 <Navbar>
    		<Navbar.Header>
      			<Navbar.Brand>
        			Contact Book
      			</Navbar.Brand>
    		</Navbar.Header>
	    	<Nav>
		   <LinkContainer to="/">
		   	<NavItem eventKey={1}>Home</NavItem>
		   	</LinkContainer>
			 
			<LinkContainer to="/add">
		   	<NavItem eventKey={2} >Add Contact</NavItem>
		   	</LinkContainer>
			<LinkContainer to="/show?page=1">
		   	<NavItem eventKey={3} >Show Contact</NavItem>
		   	</LinkContainer>
			<LinkContainer to="/Counter">
			<NavItem eventKey={4} >Counter</NavItem>
		   	</LinkContainer> 
			<LinkContainer to="/logout">
			<NavItem eventKey={5} > <Button onClick={()=>{delete_cookie('token')}} bsSize="small" bsStyle="primary">Logout</Button></NavItem>
		   	</LinkContainer> 
	    		

	    	</Nav>
  		</Navbar>
		);
	}
}

export default Header;