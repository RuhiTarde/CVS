import { useEffect, useState } from "react";
import axios from "axios";
import React,{ Component } from 'react'
import '../allcss/HeaderCss.css'
import jsPDF from 'jspdf'
import logo from '../images/Vaccinelist.JPG';
import {Button} from 'react-bootstrap'
import { render } from "@testing-library/react";



class Data extends Component{
    pdfGenerate=()=>{
    
      var doc=new jsPDF('landscape','px','a4','false');
      doc.addImage(logo,'JPG',65,20,500,400)
      doc.save('a.pdf')
    }
     render() {
      return(
        <>
            <div style={{textAlign:'center'}}><br/>
            <div>
            <img src={logo} alt=""/>
            </div>
                       <Button onClick= {this.pdfGenerate}>Download</Button>
            </div>
        </>
      )
      }
}


 export default Data;



  