import React,{ Component } from 'react';
import {Http} from '../lib/Http';

import PaginationList from './Pagination';
import { Table } from 'react-bootstrap';
import ShowPopup from './ShowPopup';
import ShowRow from './ShowRow';

class xyz extends Component{
	render(){
		return (<Abc name='from parent' />);

	}
}

class Abc extends Component{
 render(){
 	// const {name}=this.props;
 	const k=this.props.name;
		return (<h1 >{k}</h1>);

	}
}

export default xyz;