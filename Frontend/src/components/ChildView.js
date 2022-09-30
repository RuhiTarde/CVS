
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class ChildView extends Component{
    constructor(props){
        super(props);
        this.state={
            //this will retrive id from url
            id:this.props.match.params.id,
            //this will retrive data coming from state object via Link tag
            child:this.props.location.state.child

        }
    }
    render(){

        return(
          <div>
              <div className="card col-md-6 offset-md-2">
                <h2>Child details</h2>
                <div className="card-body">
                    <div className="row">
                       <label> Id   : </label>
                       <div>{this.state.child.id}</div>
                    </div>
                    <div className="row">
                        <label> Name  : </label>
                       <div>{this.state.child.name}</div>
                    </div>
                    <div className="row">
                         <label>Father Name  : </label>
                       <div>{this.state.child.fname}</div>
                    </div>
                    <div className="row">
                         <label>Mother Name  : </label>
                       <div>{this.state.child.mname}</div>
                    </div>
                    <div className="row">
                         <label>Last Name  : </label>
                       <div>{this.state.child.lname}</div>
                    </div>
                    <div className="row">
                         <label>Date Of Birth  : </label>
                       <div>{this.state.child.dob}</div>
                    </div>
                    <div className="row">
                         <label>Gender  : </label>
                       <div>{this.state.child.gender}</div>
                    </div>
                    <div className="row">
                         <label>Email  : </label>
                       <div>{this.state.child.email}</div>
                    </div>
                    <div className="row">
                         <label>Address  : </label>
                       <div>{this.state.child.address}</div>
                    </div>
                    <div className="row">
                         <Link to="/hospital/service">
                            <button type="button" name="btn"
                            className="btn btn-success">Back</button>
                         </Link>
                    </div>
                </div>
              </div>
          </div>
        );
    }
}
export default ChildView;