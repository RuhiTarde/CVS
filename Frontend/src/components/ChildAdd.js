import React, { Component } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import ChildService from "../services/ChildService";

class ChildAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            fname: "",
            mname: "",
            lname: "",
            dob: "",
            gender: "",
            email: "",
            address: "",

            op: this.props.match.params.id
        }
       
    }

    componentDidMount() {
        console.log("In product add compound did mount");
        if (this.state.op === '/add') {
            console.log("in add product");
            return;
        }
        /* else{
            ChildService.getById(this.state.op).then((response)=>{
            console.log(response.data);
            let childob=response.data[0];
            this.setState({name:childob.name,fname:childob.fname,mname:childob.mname,lname:childob.lname,
                            dob:childob.dob,gender:childob.gender,email:childob.email,address:childob.address});
            console.log(this.state);    
            })
        } */
    }
  

    addorupdate = (event) => {
        event.preventDefault();
        let child = {
            name: this.state.name, fname: this.state.fname, mname: this.state.mname, lname: this.state.lname,
            dob: this.state.dob, gender: this.state.gender, email: this.state.email, address: this.state.address
        };
        ChildService.addChild(child).then((result) => {
            this.props.history.push("/hospital/service");
        })

        /*  if(this.state.op==='add'){
 
 })
}
else{
 /* //ChildService.updateChild(child).then((response)=>{
   //  console.log(response.data)
   //  this.props.history.push("/");
// })
//.catch((err)=>{
     console.log("Error Occured",err);
// }) */


    }
    backtomain = (event) => {
        this.props.history.push("/hospital/service");
    }

    render() {
        return (
            <Form>
                <div align='center'>
                <Form.Group as={Row} className="mb-3" controlId="name">
                    <Form.Label column sm={4}>First Name :</Form.Label>
                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter name"
                            value={this.state.name}
                            onChange={(event) => this.setState({ name: event.target.value })}
                        required
                       />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="fname">
                    <Form.Label column sm={4}>Father Name :</Form.Label>
                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter father name"
                            value={this.state.fname}
                            onChange={(event) => this.setState({ fname: event.target.value })}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="mname">
                    <Form.Label column sm={4}>Mother Name :</Form.Label>
                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter mother name"
                            value={this.state.mname}
                            onChange={(event) => this.setState({ mname: event.target.value })}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="lname">
                    <Form.Label column sm={4}>Last Name :</Form.Label>
                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter last name"
                            value={this.state.lname}
                            onChange={(event) => this.setState({ lname: event.target.value })}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="dob">
                    <Form.Label column sm={4}>Date of Birth:</Form.Label>
                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter birthdate (yyyy-MM-dd)"
                            value={this.state.dob}
                            onChange={(event) => this.setState({ dob: event.target.value })}
                        /></Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="gender">
                    <Form.Label column sm={4}>Gender :</Form.Label>
                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter gender "
                            value={this.state.gender}
                            onChange={(event) => this.setState({ gender: event.target.value })}
                        /></Col>
                </Form.Group> 


{/* <Form.Group as={Row} className="mb-3" controlId="gender">
                    <Form.Label column sm={4}>Gender :</Form.Label>
                    <Col sm={4}>
                    <div onChange={(event) => this.setState({ gender: event.target.value })}>
                        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
                           
                        
                        </div>
                        </Col>
                </Form.Group>
 */}


                <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm={4}>Email  :</Form.Label>
                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter email "
                            value={this.state.email}
                            onChange={(event) => this.setState({ email: event.target.value })}
                        /></Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="address">
                    <Form.Label column sm={4}>Address :</Form.Label>
                    <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter address "
                            value={this.state.address}
                            onChange={(event) => this.setState({ address: event.target.value })}
                        /></Col>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={this.addorupdate}>
                    <h4>Save</h4>
                </Button>&emsp;
                <Button variant="primary" type="submit" onClick={this.backtomain}>
                    <h4>Back</h4>
                </Button>
                       </div>
            </Form>
        )
    }
}


export default ChildAdd;