import React from "react";
import { Row,Col,Form } from "react-bootstrap";
import TableData from "./TableData";

const ResultPage=()=>{

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
                <Form.Label style={{marginLeft:'5rem'}}>Barendra Biswal</Form.Label><br/>
                <Form.Label>Father's/Mother's Name:</Form.Label>
                <Form.Label style={{marginLeft:'.7rem'}}>Ramesh Biswal</Form.Label><br/>
                <Form.Label>College Name:</Form.Label>
                <Form.Label style={{marginLeft:'5rem'}}>Oxford University</Form.Label>
                </Form.Group>
                </Col>

                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label style={{float:'right'}}>RegisterNo: 1ST19CS221</Form.Label>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <TableData />
            </Row>
        </>
    )
}
export default ResultPage;