import React,{ Component } from 'react';
import {Http} from '../lib/Http';

class ShowContact extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: []
          };
    }
    
    componentDidMount() {
        return new Promise((resolve, reject) => {
            Http.get('https://zenways-contact.herokuapp.com/api/contacts','ZENWAYS01AYESHA01')
            .then(({data}) => {
                this.setState({
                contacts:data.contacts
                  })  
                  console.log(data.contacts);
            })
            .catch((err)=>{console.log(err)})
            });
        // axios({
        //     url: 'https://zenways-contact.herokuapp.com/api/contacts',
        //     method: 'get',
        //     headers: {
        //         'key': 'ZENWAYS01AYESHA01',
        //         'Content-Type': 'application/json'
        //     }
        //  })
        //  .then(data => {
        //     this.setState({
        //         contacts:data.data.contacts
        //       })
        //     console.log(data.data.contacts)
        //  }) 
        //  .catch(err => {
        //     console.log(err);
        //  });
      }
    render(){
       const contacts=this.state.contacts;
        return(
            <div className="container">
            <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
        <ul className="demo-list-two mdl-list">
        {contacts.map((contact)=>
            <li className="mdl-list__item mdl-list__item--two-line">
          <span className="mdl-list__item-primary-content">
            <i className="material-icons mdl-list__item-avatar">person</i>
            <a href={"/particular/"+contact._id}><span>{contact.name}</span>
            <span className="mdl-list__item-sub-title"><span className="glyphicon glyphicon-earphone "></span>{contact.phno}</span>
            </a>
          </span>
          <span className="mdl-list__item-secondary-content">
            <span className="mdl-list__item-secondary-info">View</span>
            <a className="mdl-list__item-secondary-action" href={"/particular/"+contact._id} ><i className="material-icons">star</i></a>
          </span>
        </li>
        
        )}
        </ul>
        </div>
        </div>
        </div>
        );
    }
}

export default ShowContact;
