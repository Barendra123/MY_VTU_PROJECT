import React,{useState,useEffect} from "react";
import { Row,Col,Form } from "react-bootstrap";
import TableData from "./TableData";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResultPage=()=>{

    const[studentDetails,setStudentDetails]= useState([])
        const {id} =useParams()

    useEffect(()=>{
        axios.get('http://localhost:3011/studentInfo')
        .then((Response)=> {
            Response.data.map((data)=>{
                if(data.registerId === id){
                    setStudentDetails(data)
                }
            })
        }).catch((error)=> console.log(error))

    },[])
    console.log("sata",studentDetails)
    return(
        <>
           <Row className="justify-content-center my-5">
                <Col sm={12} md={6}>
                    <h4>Vivsevaraya Technological University,Belagaum</h4>
                    <h6 style={{marginLeft:'4rem'}}>VII - Semester B.E Examination Result,Nov/Dec-2024</h6>
                </Col>
            </Row> 

            <Row>
                <Col sm={12} md={6}>
                <Form.Group>
                <Form.Label>Student Name:</Form.Label>
                <Form.Label style={{marginLeft:'5rem'}}>{studentDetails.studentName}</Form.Label><br/>
                <Form.Label>Father's/Mother's Name:</Form.Label>
                <Form.Label style={{marginLeft:'.7rem'}}>{studentDetails.FatherName}</Form.Label><br/>
                <Form.Label>College Name:</Form.Label>
                <Form.Label style={{marginLeft:'5rem'}}>{studentDetails.collegeName}</Form.Label>
                </Form.Group>
                </Col> 
 
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label style={{float:'right'}}>Register ID: {studentDetails.registerId}</Form.Label>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <TableData  studentId={studentDetails.registerId}/>
            </Row>
        </>
    )
}
export default ResultPage;