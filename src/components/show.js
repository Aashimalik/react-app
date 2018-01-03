import React,{ Component } from 'react';
import {Http} from '../lib/Http';
import {Link} from 'react-router-dom';
import PaginationList from './Pagination';
import { Table,Modal,Button,Alert} from 'react-bootstrap';
import ShowPopup from './ShowPopup';
import ShowRow from './ShowRow';

class ShowContact extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: [],
            isLoading:true,
            activePage:1,
            pageCount:0,
            smShow: false,
            user:{},
        };
        this.handleClick=this.handleClick.bind(this);
        
        this.handledeleteclick=this.handledeleteclick.bind(this);
    }

    handledeleteclick() {
        let id=this.state.user._id;
        Http.delete(`/contact/${id}`)
        .then((data) => {
            this.setState({
               smShow:false
            })
            this.componentDidMount()
           
        })
        .catch((err)=>{console.log(err)})
    }
     
     
    handleClick(event) {
        this.setState({
            activePage:event
        })
        
            this.httphandle(event)
    }

    searchParam(event){
        this.setState({
           activePage:event 
        })
       const {history}=this.props;
       history.push({search:`?page=${event}`})
    }
         
    httphandle(event){
       this.searchParam(event);
        return new Promise((resolve, reject) => {
            Http.get(`api/contacts?page=${event}`)
            .then((data) => {
                this.setState({
                    contacts:data.contacts,
                    pageCount:data.pageCount,
                    isLoading:false,
                })  

            })
            .catch((err)=>{console.log(err)})
            });
    }

    componentDidMount(){
                       const {history}=this.props
        let p=this.props.history.location.search
        var urlParts = p.split('=');
        var k=parseInt(urlParts[1]);
        if(Number.isNaN(k)){
            history.push("/show?page=1")
            this.httphandle(1);
        }
         else{
            this.searchParam(k);
            this.httphandle(k);
        }
    }   
      
    render(){
       
        const {contacts,pageCount}=this.state;
        const isLoading=this.state.isLoading;
        const activePage=this.state.activePage;
      let smClose = () => this.setState({ smShow: false });
        if(isLoading){
            return(
                <div><h1>Data is loading</h1></div>
            ); 
        }
        else if(contacts.length>0){
            return(
                <div className="container">
                 <Table bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Phone No</th>
                            <th>Email</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((user,index)=>{
                            return (
                                <tr key={index}>
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
                              <Button bsStyle="primary"   onClick={() => this.setState({ smShow: true,user:user})}>
          Delete
        </Button>
                                    </td>
                                </tr>

                            );
                        })}
                    </tbody>
                </Table>
                <PaginationList items={pageCount} activePage={activePage} onSelect={this.handleClick}/> 
               <ShowPopup show={this.state.smShow} onHide={smClose} handledeleteclick={this.handledeleteclick}/>
                </div>           
            );
        }
        else if(contacts.length===0){
            return(
                <div><h1>No record found</h1></div>
            );
        }
    }   
}


export default ShowContact;
