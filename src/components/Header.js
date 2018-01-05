import React,{ Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends  Component{
	render(){
		return(
		 <Navbar>
    		<Navbar.Header>
      			<Navbar.Brand>
        			Contact Book
      			</Navbar.Brand>
    		</Navbar.Header>
	    	<Nav>
	    		<NavItem eventKey={1} href="/">Home</NavItem>
	      		<NavItem eventKey={2} href="/add">Add Contact</NavItem>
	      		<NavItem eventKey={3} href='/show?page=1'>Show Contact</NavItem>
	      		<NavItem eventKey={4} href='/counter'>Counter</NavItem>
	      		<NavItem eventKey={4} href='/xyz'>xyz</NavItem>

	    	</Nav>
  		</Navbar>
		);
	}
}

export default Header;