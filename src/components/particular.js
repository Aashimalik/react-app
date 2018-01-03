import React,{ Component } from 'react';
import {Http} from '../lib/Http';
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';


class ParticularContact extends Component{
 constructor(props){
 super(props);
 this.state={
     contact:{},
 }
 this.handledeleteclick=this.handledeleteclick.bind(this);
 
 }
 handledeleteclick() {
            const {match}=this.props;
            let id=match.params.id;
            const {history}=this.props;
        Http.delete(`https://zenways-contact.herokuapp.com/api/contact/${id}`,'ZENWAYS01ABHISHEK01')
        .then(({data}) => {
            history.push('/show')
        })
        .catch((err)=>{console.log(err)})
        }
                    

 componentDidMount() {
     const {match}=this.props;
         let id=match.params.id;
        Http.get(`/contact/${id}`)
        .then((data) => {
         this.setState({
            contact:data.contact
           })
        })
        .catch((err)=>{console.log(err)})
    }

    
 render(){
    const {_id,name,phno,email,address}=this.state.contact;
     return(
    <div className="container">
    <div className="row">
    <div className="col-sm-4 col-sm-offset-1">
               
                <h1 className="h">{name}</h1>
                <p className="pr"><b>Phone no :</b>{phno}<br/>
            <b> Email : </b>{email}<br/>
        <b>Address: </b>{address}</p>
             
            </div>
        </div>
        <button onClick={this.handledeleteclick} id="delbtn" className=" mdl-button show-modal mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                <i className="material-icons">delete</i>
              </button>
              {/* <a href={'/edit/'+_id}> */}
        <LinkContainer to={"/edit/"+_id}>
        <button  id="editbtn" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" ><i className="material-icons">mode_edit</i></button>
        </LinkContainer>
       
        {/* href={"/delete/"+_id} */}
    </div>
 
 
     )
 }
};

export default ParticularContact;
