import React from 'react'
import { MockData } from './MOCK_DATA'
import { useState } from 'react'
export default function Sort() {
    const [data, setData] = useState(MockData)
    const [order, setOrder] = useState("ASC")
    const sorting = (col) =>{
        if(order === "ASC"){
            const sorted = [...data].sort((a,b) => 
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            console.log(sorted)
            setData(sorted)
            setOrder("DSC")
        }
        if(order === "DSC"){
            const sorted = [...data].sort((a,b) => 
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted)
            setOrder("ASC")
        }
    }

    console.log(data[0])
    
    return (
        <div>
            <table>
                <thead>
                    <td onClick={() => sorting("first_name")}>First Name</td>
                    <td onClick={() => sorting("last_name")}>Last Name</td>
                    <td onClick={() => sorting("email")}>Email</td>
                    <td onClick={() => sorting("gender")}>Gender</td>
                </thead>
                <tbody>
                    {data.map((person) => 
                        <tr key={person.id}>
                            <td>{person.first_name}</td>
                            <td>{person.last_name}</td>
                            <td>{person.email}</td>
                            <td>{person.gender}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
