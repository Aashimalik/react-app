import React,{ Component } from 'react';
import {Http} from '../lib/Http';


class ParticularContact extends Component{
 constructor(props){
 super(props);
 this.state={
     contact:1,
 }
 this.handledeleteclick=this.handledeleteclick.bind(this);
 this.handleupdateclick=this.handleupdateclick.bind(this);
 }
 handledeleteclick() {
            const {match}=this.props;
            let id=match.params.id;
            return new Promise((resolve, reject) => {
                Http.delete(`https://zenways-contact.herokuapp.com/api/contact/${id}`,'ZENWAYS01AYESHA01')
                .then(({data}) => {
                console.log(data);
                })
                .catch((err)=>{console.log(err)})
                });
         }
           
         handleupdateclick() {
            const {match}=this.props;
            let id=match.params.id;
            return new Promise((resolve, reject) => {
                Http.put(`https://zenways-contact.herokuapp.com/api/contact${id}`,'ZENWAYS01AYESHA01')
                .then(({data}) => {
                    this.setState({
                        contact:data.contact
                          })
                })
                .catch((err)=>{console.log(err)})
                });       
        }
           


 componentDidMount() {
    const {match}=this.props;
    let id=match.params.id;
    return new Promise((resolve, reject) => {
        Http.get(`https://zenways-contact.herokuapp.com/api/contact/${id}`,'ZENWAYS01AYESHA01')
        .then(({data}) => {
            this.setState({
                contact:data.contact
                  }) 
        console.log(data.contact);
        })
        .catch((err)=>{console.log(err)})
        })
    }

    
 render(){
    const {name,phno,email,address}=this.state.contact;
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
              <button onClick={this.handleupdateclick}id="editbtn" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" ><i className="material-icons">mode_edit</i></button>
        {/* href={"/delete/"+_id} */}
    </div>
 
 
     )
 }
};

export default ParticularContact;
