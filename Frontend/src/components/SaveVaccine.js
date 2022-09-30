import React ,{ Component } from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap';
import VaccineService from "../services/VaccineService";

class SaveVaccine extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            dose:"",
            minDays:"",
            maxDays:"",
            route:"",
            site:""
        }
    }
    componentDidMount(){
        VaccineService.saveVaccine(this.state).then((response)=>{
            console.log(response.data);
        let vaccineObj=response.data[0];
        this.setState({name:vaccineObj.name,
                       dose:vaccineObj.dose,
                       minDays:vaccineObj.minDays,
                       maxDays:vaccineObj.maxDays,
                       route:vaccineObj.route,
                       site:vaccineObj.site
        });
        console.log(this.state);
        })
    }
    render(){
        return(
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="vName">
                    <Form.Label column sm={4}>Vaccine Name:</Form.Label>
                    <Col sm={4}>
                    <Form.Control type="text" placeholder=" enter vaccine name" 
                        value={this.state.name}
                        onChange={(event)=>this.setState({name:event.target.value})}
                    />
                    </Col>
                </Form.Group> 
                <Form.Group  as={Row} className="mb-3" controlId="dose">
                    <Form.Label column sm={4}>Dose :</Form.Label>
                    <Col sm={4}>
                    <Form.Control type="text" placeholder="enter dose" 
                        value={this.state.dose}
                        onChange={(event)=>this.setState({dose:event.target.value})}
                    /></Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="minDays">
                    <Form.Label column sm={4}>Minimum start Days :</Form.Label>
                    <Col sm={4}>
                    <Form.Control type="text" placeholder="enter start days"
                     value={this.state.minDays}
                        onChange={(event)=>this.setState({minDays:event.target.value})}
                     /></Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="maxDays">
                    <Form.Label column sm={4}>Maximum days</Form.Label>
                    <Col sm={4}>
                    <Form.Control type="text" placeholder="enter last days"
                     value={this.state.maxDays}
                        onChange={(event)=>this.setState({maxDays:event.target.value})}
                     /></Col>
                </Form.Group>
  
         {/*}       <Button variant="primary" type="submit" onClick={this.addorupdate}>
                    Add or Update Product
                </Button>&emsp;
                <Button variant="primary" type="submit" onClick={this.backtomain}>
                    Back
        </Button>        */}

    </Form>
        )
    }
}
export default SaveVaccine;