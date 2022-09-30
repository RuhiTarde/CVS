
import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import ChildService from "../services/ChildService";


class VaccineSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            op: this.props.match.params.id,

        }

    }
    componentDidMount() {
        ChildService.getById(this.state.op).then((response) => {
            console.log(response.data);
            let vaccineObj = response.data;
            let dobirth = vaccineObj.dob;
            var newDate = new Date(dobirth);
            // console.warn(newDate);
            document.getElementById("nm").innerHTML = vaccineObj.name + "  " + vaccineObj.fname + "  " + vaccineObj.lname;

            let dob = new Date(dobirth);
            document.getElementById("dob").innerHTML = dob.toDateString();

            let date1 = new Date(dobirth);
            date1.setDate(date1.getDate() + 1);
            document.getElementById("bcg").innerHTML = date1.toDateString();

            let date2 = new Date(dobirth);
            date2.setDate(date2.getDate() + 42);
            document.getElementById("6week").innerHTML = date2.toDateString();

            let date3 = new Date(dobirth);
            date3.setDate(date3.getDate() + 70);
            document.getElementById("10week").innerHTML = date3.toDateString();

            let date4 = new Date(dobirth);
            date4.setDate(date4.getDate() + 84);
            document.getElementById("14week").innerHTML = date4.toDateString();

            let date5 = new Date(dobirth);
            date5.setMonth(date5.getMonth() + 6);
            document.getElementById("6month").innerHTML = date5.toDateString();

            let date6 = new Date(dobirth);
            date6.setMonth(date6.getMonth() + 9);
            document.getElementById("9month").innerHTML = date6.toDateString();

            let date7 = new Date(dobirth);
            date7.setMonth(date7.getMonth() + 15);
            document.getElementById("15month").innerHTML = date7.toDateString();

            let date8 = new Date(dobirth);
            date8.setMonth(date7.getMonth() + 18);
            document.getElementById("18month").innerHTML = date8.toDateString();

            let date9 = new Date(dobirth);
            date9.setFullYear(date7.getFullYear() + 2);
            document.getElementById("2year").innerHTML = date9.toDateString();

            let date10 = new Date(dobirth);
            date10.setFullYear(date10.getFullYear() + 5);
            document.getElementById("5year").innerHTML = date10.toDateString();

            let date11 = new Date(dobirth);
            date11.setFullYear(date7.getFullYear() + 10);
            document.getElementById("10year").innerHTML = date11.toDateString();



        })

    }
    backtomain = (event) => {
        this.props.history.push("/hospital/service");
    }
    render() {
        return (
            <>
                <div>
                    <button type="button" class="btn btn-success" onClick={this.backtomain}>
                        Back
                    </button>

                </div>
                <div>
                    Name : <p style={{ color: 'green' }} id="nm"></p>
                    Date Of Birth : <p style={{ color: 'green' }} id="dob"></p>
                </div>


                <Table striped bordered hover size="sm">
                    <thead>
                        <th>Timing</th>
                        <th>Immunization Due</th>
                        <th>Date Due</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>At birth(within 24 hours)</td>
                            <td>BCG,Hepatitis B,OPV 0</td>
                            <td id="bcg"></td>
                        </tr>
                        <tr>
                            <td>6 week</td>
                            <td>DPT
                                OPV
                                HiB
                                Hepatitis B</td>
                            <td id="6week"></td>
                        </tr>
                        <tr>
                            <td>10 weeks</td>
                            <td>DPT
                                OPV
                                HiB</td>
                            <td id="10week"></td>
                        </tr>
                        <tr>
                            <td>14 Weeks</td>
                            <td>DPT
                                OPV
                                HiB</td>
                            <td id="14week"></td>
                        </tr>
                        <tr>
                            <td>6 Months</td>
                            <td>Hepatitis B</td>
                            <td id="6month"></td>
                        </tr>
                        <tr>
                            <td>9 Months</td>
                            <td>Measles</td>
                            <td id="9month"></td>
                        </tr>
                        <tr>
                            <td>15 Months</td>
                            <td> MMR</td>
                            <td id="15month"></td>
                        </tr>
                        <tr>
                            <td>18 Months</td>
                            <td>DPT
                                OPV
                                HiB</td>
                            <td id="18month"></td>
                        </tr>
                        <tr>
                            <td>2 Years</td>
                            <td> Typhoid</td>
                            <td id="2year"></td>
                        </tr>
                        <tr>
                            <td>5 to 6 Years</td>
                            <td> DPT Booster-2</td>
                            <td id="5year"></td>
                        </tr>
                        <tr>
                            <td>10 Years</td>
                            <td> TT</td>
                            <td id="10year"></td>
                        </tr>


                    </tbody>

                </Table>
                <div>
                    <p style={{ color: 'red' }}>Optional Vaccines : Above 2 years of age</p>
                    <p>
                        Chicken Pox (Single dose)</p>
                    <p>Hepatitis A (2 doses 6 months apart)</p>


                    <p style={{ color: 'red' }}>GLOSSARY</p>
                    <p>BCG - Bacillus Calmette Guerin - Protects against Tuberculosis.</p>
                    <p>OPV - Oral Polio Vaccine - Protects against Polio.</p>
                    <p>DPT - Protects against three diseases : Diphtheria, Pertusis, Tetanus.</p>
                    <p>HiB - Haemophilus Influenza type B - Protects against Brain Fever.
                    </p>
                    <p>MMR - Protects against three diseases : Measles, Mumps, Rubella.
                    </p>
                    <p>TT - Tetanus Toxoid - Protects against Tetanus.
                    </p>

                </div>

            </>
        )
    }
}


export default VaccineSchedule; 