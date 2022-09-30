import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChildService from "../services/ChildService";
class ChildrenList extends Component {
    constructor(props) {
        super(props);
        //state is object
        this.state = {
            childarr: [],
            flag: false
        }
    }
    //componentDidMount() it is a lifecycle method which is called as soon as component mounted on html
    //page.this method is called automatically....change in the state will call this method
    componentDidMount() {
        //getChildren is an asynch fun...so call back needed or promise needeed....then() dose promise
        //this method will give data from node service and assingning data to childarr
        ChildService.getChildren().then((response) => {
            this.setState({ childarr: response.data })
        }).catch((err) => {
            console.log("Error Occured !!")
        })
    }
    deleteChild = (id) => {
        alert("Please confirm !!");
        ChildService.deleteChild(id).then((response) => {
            console.log("In delete function resp=" + response.data);
            this.setState({ flag: true });
            //window.location.reload(false); this automatically refresh the page after deletion
            window.location.reload(false);
            this.props.history.push("/hospital/childList")
        });
    }

    editChild = (childId) => {
        this.props.history.push(`/update/:${childId}`);
    }
    generateCalender = (childId) => {
        this.props.history.push(`/calender/:${childId}`);
    }

    render() {
        console.log("In Children List render");
        return (
            <div>
                <div className="menuBar">
                    <ul>
                        <li><a href="/hospital/addChild">Enroll New Child</a></li>
                        <li><a href="/">back</a></li>
                        <li><a href="/">Logout</a></li>
                    </ul>
                </div>
                <hr></hr>
                <div className="row">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.childarr.map((child, index) =>
                                    <tr key={index}>
                                        <td>{child.id}</td>
                                        <td>{child.name}</td>
                                        <td>
                                            {/* <button className="btn btn-success" type="button" onClick={()=>this.editChild(child.id)}>
                                        edit</button> */}
                                            <Link to={{ pathname: `/update/${child.id}` }}>
                                                <button className="btn btn-success" type="button" onClick={() => this.editChild(child.id)}>
                                                    edit</button>
                                            </Link>
                                            <button className="btn btn-danger" type="button" onClick={() => this.deleteChild(child.id)}>delete</button>
                                            <Link to={{ pathname: `/view/${child.id}`, state: { child: child } }}>
                                                <button type="button" className="btn btn-primary" >view</button>
                                            </Link>
                                            <Link to={{ pathname: `/calender/${child.id}` }}>
                                                <button type="button" className="btn btn-secondary" onClick={() => this.generateCalender(child.id)}>calender</button>
                                          </Link>

                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </Table>

                </div>
            </div>
        )

    }

}

export default ChildrenList;