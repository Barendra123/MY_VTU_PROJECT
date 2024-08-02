import React from "react";
import { Link } from "react-router-dom";
import { Row,Col,Form, Button } from "react-bootstrap";
const Result=()=>{

    return(
        <>
        <Link to='/' className="btn btn-dark" style={{marginTop:'1rem'}}>Go Back</Link>
        
        <Row className="text-center">
            <Col>
                <h3>Check Your Result here...</h3>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col style={{marginLeft:'25rem'}}>
            <Form>
                <Form.Label>Enter Your Register No:</Form.Label><br/>
                <Form.Control type="text" placeholder="enter your register no." style={{width:'70%'}}/>
                </Form><br/>
                <Button>Sumbit</Button>
            </Col>
        </Row>
        </>
    )
}
export default Result;