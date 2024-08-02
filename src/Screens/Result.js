import React,{useState} from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import { Row,Col,Form, Button } from "react-bootstrap";
import axios from 'axios'
const Result=()=>{

    const[registerInput,setRegisterInput]=useState("")
    const[error,setError]=useState("")

    const navigate =useNavigate()
    const {id} =useParams()

    const sumbitHandler =(e)=>{
        e.preventDefault()
        if(registerInput === ''){
            setError("Please enter register ID")
        }else{
            axios.get('http://localhost:3012/Users')
            .then((Response)=>{
                console.log("res",Response.data)
                Response.data.map((data,index)=>{
                    if (data.registerId === registerInput){
                        navigate(`/resultpage/${id}`)
                    }else {setError("Invaild register ID")}
                })
             
            })
        }
    }

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
            <Form onSubmit={(e)=>sumbitHandler(e)}>
                <Form.Label>Enter Your Register No:</Form.Label><br/>
                <Form.Control type="text" placeholder="enter your register no." 
                style={{width:'70%'}} value={registerInput} onChange={(e)=>setRegisterInput(e.target.value)}/>
                {error ? <div style={{color:'red'}}>{error}</div>:''}
                <Button type="sumbit" style={{marginTop:"1rem"}}>Sumbit</Button>
                </Form>


                
            </Col>
        </Row>
        </>
    )
}
export default Result;