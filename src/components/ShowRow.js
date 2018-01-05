import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import { Button} from 'react-bootstrap';
class ShowRow extends Component{

    render(){
    	const {user,smShow,smSet,handledeleteclick}=this.props;
    	      return(

             <tr>
                                    <td>{user.name}</td>
                                    <td>{user.phno}</td>
                                    <td>{user.email}</td>
                                    <td>
                                    <Link to={"/particular/"+user._id}><Button bsStyle="success">View</Button></Link>
                                    </td>
                                    <td>
                                <Link to={"/edit/"+user._id}><Button bsStyle="primary" >Edit</Button></Link>
                                    </td>
                                    <td>
                              <Button bsStyle="primary"  onClick={()=>handledeleteclick(user)}>Delete</Button>
                                    </td>
                                </tr>
        );
    }
}
export default ShowRow;