import React from 'react'
import { Table } from 'react-bootstrap'
const TableData=()=>{

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
                <tr>
                    <td>1</td>
                    <td>CSE001</td>
                    <td>JAVA</td>
                    <td>100</td>
                    <td>35</td>
                    <td>65</td>
                    <td>PASS</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>CSE001</td>
                    <td>JAVA</td>
                    <td>100</td>
                    <td>35</td>
                    <td>65</td>
                    <td>PASS</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>CSE001</td>
                    <td>JAVA</td>
                    <td>100</td>
                    <td>35</td>
                    <td>65</td>
                    <td>PASS</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>CSE001</td>
                    <td>JAVA</td>
                    <td>100</td>
                    <td>35</td>
                    <td>65</td>
                    <td>PASS</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan={3} style={{textAlign:'center'}}>Grand Total</th>
                    <td>400</td>
                    <td>140</td>
                    <td>260</td>
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