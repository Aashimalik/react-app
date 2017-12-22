import React,{ Component } from 'react';
import {Http} from '../lib/Http';

class ShowContact extends Component{

    render(){
        return(
            <div className="container">
            <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
        <ul className="demo-list-two mdl-list" ng-repeat="contact in contacts  | filter:searchText |orderBy:'name' ">
                <li className="mdl-list__item mdl-list__item--two-line">
                  <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item-avatar">person</i>
                    <a><span>{name}</span>
                    <span className="mdl-list__item-sub-title"><span className="glyphicon glyphicon-earphone "></span>{phno}</span>
                    </a>
                  </span>
                  <span className="mdl-list__item-secondary-content">
                    <span className="mdl-list__item-secondary-info">View</span>
                    <a className="mdl-list__item-secondary-action" href="#!/particular/{{contact._id}}"><i className="material-icons">star</i></a>
                  </span>
                </li>
              </ul>
        </div>
            </div>
        </div>
        );
    }
}

export default ShowContact;
