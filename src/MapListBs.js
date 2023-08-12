import React from 'react'
import { Table } from 'react-bootstrap'

function MapListBs() {
    const student = [
        {
            name: "Sakshi Rahangdale", email: "sakshi123@gmail.com", rollNo: 11,contacts: [
                { mobileNo: 1111, parentNo: 2222, telphoneNo: 3333 }
            ]
        },
        {
            name: "Mukesh Pimpalkar", email: "mukesh123@gmail.com", rollNo: 12,contacts: [
                { mobileNo: 4444, parentNo: 5555, telphoneNo: 6666 }
            ]
        },
        {
            name: "Gayatri Sathawane", email: "gayatri123@gmail.com", rollNo: 13, contacts: [
                { mobileNo: 7777, parentNo: 8888, telphoneNo: 9999 }
            ]
        },
        {
            name: "Atul Rahangdale", email: "atul123@gmail.com", rollNo: 14,contacts: [
                { mobileNo: 1234, parentNo: 5678, telphoneNo: 9123 }
            ]
        },
        {
            name: "Muskan Patle", email: "muskan123@gmail.com", rollNo: 15,contacts: [
                { mobileNo: 1122, parentNo: 3344, telphoneNo: 5566 }
            ]
        }
    ]
    return (
        <div>
            <h2>List with Bootstrap Table</h2>
            <Table striped  hover variant='primary'>
                <tbody>
                    <tr>
                        <td>Sr.No.</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Roll No.</td>
                        <td>Contact</td>
                    </tr>

                    {
                        student.map((item, i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.rollNo}</td>
                                <td>
                                    <Table striped variant='danger'>
                                        <tbody>
                                            <tr>
                                                <td>Mobile No.</td>
                                                <td>Parent No.</td>
                                                <td>Telphone No.</td>
                                            </tr>
                                            {
                                                item.contacts.map((result) =>
                                                    <tr key={i}>
                                                        <td>{result.mobileNo}</td>
                                                        <td>{result.parentNo}</td>
                                                        <td>{result.telphoneNo}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default MapListBs