import React,{useEffect, useState} from 'react'
import { listTimeSheetChangeRequests } from '../services/TimeSheetChangeRequest'

const ListTimeSheetChangeRequest = () => {

    const [timesheetrequests, setTimesheetrequests] = useState([])
    
    useEffect( ()=> {

     listTimeSheetChangeRequests().then((Response) => {
        setTimesheetrequests(Response.data);
     }).catch(error => {
        console.error(error);
     })   

    }, [])
    
    const dummyData = [
        {
            "id": 1,
            "firstName": "Talha",
            "lastName": "Syed",
            "email": "talhasyed.hussain89@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Zeeshan",
            "lastName": "Nazakat",
            "email": "zeeshan@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Muhammad",
            "lastName": "Hassan",
            "email": "muhammad.hassan@gmail.com"
        }
    ]




  return (
<div class='container'>
    <h2>List of Time Change Requests</h2>
    <table class='table table-striped table-bordered table-hover'>
        <thead>
            <tr>
                {/*<th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>*/}

                <th>Time Sheet Id</th>
                <th>User Id</th>
                <th>Status Id</th>
                <th>Status Id</th>

            </tr>
        </thead>

        <tbody>
            {
                /*dummyData.map(employee=>
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                </tr>
                )*/

                timesheetrequests.map(timesheetreq=>
                    <tr key={timesheetreq.id}>
                        <td>{timesheetreq.id}</td>
                        <td>{timesheetreq.userId}</td>
                        <td>{timesheetreq.statusId}</td>
                        <td>{timesheetreq.statusId}</td>
                    </tr>
                    )
            }
        </tbody>
    </table>
</div> 
 )
}

export default ListTimeSheetChangeRequest