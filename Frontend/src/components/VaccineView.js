import React,{Component} from 'react';
import { Table, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import '../allcss/firstPage.css';
import VaccineImg from '../images/vaccineBottel.jpg';
import info from '../images/info.jpeg'
class VaccineView extends Component{
    constructor(props){
        super(props);
        this.state={
            //this will retrive id from url
            id:this.props.match.params.id,
            //this will retrive data coming from state object via Link tag
            vaccine:this.props.location.state.vaccine

        }
    }
    render(){

        return(
           
                

         
              <div className="container">
               <div align="center">
   
    <div>
        </div>
        <img src={info} alt=""/>
          </div>

              <h2>Vaccine details</h2>
              {/* <div className="card col-md-6 offset-md-2">  */}
           <div className='row'>
                
                <div className='col col-md-6'>
                    <p>
                       <label>Id   :  </label> &nbsp;&nbsp;&nbsp;
                    {this.state.vaccine.id}
                    </p>
                    <p>
                        <label> Vaccine Name  : </label>&nbsp;&nbsp;&nbsp;
                       {this.state.vaccine.name}
                       </p>
                    <p>
                        <label> Vaccine Due age  : </label>&nbsp;&nbsp;&nbsp;&nbsp;
                       {this.state.vaccine.dueAge}
                       </p>
                       <p>
                        <label> Vaccine Max age  : </label>&nbsp;&nbsp;&nbsp;&nbsp;
                       {this.state.vaccine.maxAge}
                    
                    </p>
                    <p>
                        <label> Vaccine Schedule  : </label>&nbsp;
                       {this.state.vaccine.Schedule}
                       </p>
                       <p>
                        <label> Instructions Given to Mother  : </label>&nbsp;
                       {this.state.vaccine.Instructions}
                       </p>
                   <p>
                        <label>After vaccine side effetcs  : </label>&nbsp;
                       {this.state.vaccine.SideEffects}
                       </p>
                    
                       <div>
                         <Link to="/vaccinationInformation">
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
export default VaccineView;