import { useEffect, useState } from "react";
import axios from "axios";
import React,{ Component } from 'react'
import '../allcss/HeaderCss.css'
import {  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FindVaccine() {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    axios
      .get("./vaccines.json")
      .then((res) => setVaccines(res.data))
      .catch((err) => console.log(err));
  }, []);

   return (
     <div>
    <div className="menuBar">
    <ul>
        <li class="active"><a href="/">Back</a></li>
    </ul>
   
</div>

    
        
       
      <table class="table table-hover">
          <thead className="thead-dark">
            <tr>
            <th scope="col">Vaccine</th>
            <th scope="col">Action</th>
            
          </tr>
          
          </thead>
          <tbody>
          {vaccines.map((vaccine,index) => (
          <tr key={index}>
             <td>{vaccine.name}</td>
             <Link to={{ pathname: `/vaccine/${vaccine.id}`, state: { vaccine: vaccine } }}>
            <button type="button" className="btn btn-primary" >view</button>
             </Link>
          </tr>
          ))}
          </tbody>
      </table>
    </div>
  );
}

export default FindVaccine;