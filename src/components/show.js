import React,{ Component } from 'react';
import {Http} from '../lib/Http';
import {Link} from 'react-router-dom';

class ShowContact extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: [],
            isLoading:true
        };
       
    }
    
    componentDidMount(){
        return new Promise((resolve, reject) => {
            Http.get('https://zenways-contact.herokuapp.com/api/contacts','ZENWAYS01AYESHA01')
            .then(({data}) => {
                this.setState({
                    contacts:data.contacts,
                    isLoading:false
                    })  
            })
            .catch((err)=>{console.log(err)})
            });
           
    }    // axios({
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
      
    render(){
        const contacts=this.state.contacts;
        const isLoading=this.state.isLoading;
        if(isLoading){
            return(
                <div><h1>Data is loading</h1></div>
            ); 
        }
        else if(contacts.length>0){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <ul className="demo-list-two mdl-list">
                                {contacts.map((contact,i)=>
                                <li className="mdl-list__item mdl-list__item--two-line" key={i}>
                                <span className="mdl-list__item-primary-content">
                                <i className="material-icons mdl-list__item-avatar">person</i>
                                <Link to={"/particular/"+contact._id}>{contact.name}</Link>
                                <span className="mdl-list__item-sub-title"><span className="glyphicon glyphicon-earphone "></span>{contact.phno}</span>
                               
                                </span>
                                <span className="mdl-list__item-secondary-content">
                                <Link to={"/particular/"+contact._id} className="mdl-list__item-secondary-info">View</Link>
                                
                                </span>
                                </li>
                                )}
                            </ul>
                        </div>
                    </div>
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
