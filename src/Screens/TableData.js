import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'
const TableData=({studentId})=>{

    const[result,setResult]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3011/studentInfo')
        .then((Response)=> {
            console.log(Response.data)
            let temp =[]
            temp = Response.data.filter((d) => d.registerId=== studentId)
            setResult(temp)
        })
        .catch((error)=> console.log(error))
        
    },[studentId])
    console.log("State2",result)
    const getTotalMarks =(value)=>{
        console.log(value)
        let sum=0
        result.map((d)=>{
            sum += parseInt(d[value])
        })
        return sum
    }
    return(
        <>
        <Table className='my-5' responsive bordered>
            <thead>
                <tr>
                <th rowSpan={2} style={{textAlign:'center'}}>Sl No</th>
                <th colSpan={2} style={{textAlign:'center'}}>Subject</th>
                <th colSpan={3} style={{textAlign:'center'}}>Examination Marks obtained</th>
                <th rowSpan={2} style={{textAlign:'center'}}>Subject Result</th>
                </tr>
                <tr>
                    <th style={{textAlign:'center'}}>Code</th>
                    <th style={{textAlign:'center'}}>Subject</th>
                    <th style={{textAlign:'center'}}>Max</th>
                    <th style={{textAlign:'center'}}>Min</th>
                    <th style={{textAlign:'center'}}>Obtained</th>
                </tr>
            </thead>
            <tbody>
                    {
                        result.map((data,index)=>(
                             <tr key={index}>
                                <td>{index+1}</td>
                                <td>{data.code}</td>
                                <td>{data.subject}</td>
                                <td>{data.max_marks}</td>
                                <td>{data.min_marks}</td>
                                <td>{data.obtained_marks}</td>
                                <td>{data.result}</td>
                             </tr>
                        ))
                    }
            </tbody>
            <thead>
                <tr>
                    <th colSpan={3} style={{textAlign:'center'}}>Grand Total</th>
                    <td>{getTotalMarks('max_marks')}</td>
                    <td>{getTotalMarks('min_marks')}</td>
                    <td>{getTotalMarks('obtained_marks')}</td>
                    <td>Grade c+</td>
                </tr>

            </thead>
        </Table>
        <div>
        <p><b>Total Marks obtained[in Words]</b>:
            Two Hundred and Sixty Only
        </p>
        <p><b>Result of Semester</b>:PASS</p>
        <p><b>Percentage</b>:65%</p>
        <p><b>Date</b>:01 AUG    2024</p>
        </div>
        </>
    )
}
export default TableData