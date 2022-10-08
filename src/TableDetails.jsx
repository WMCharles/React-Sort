import React from 'react'

const TableDetails = ({data, del}) => {
  
  return (
    <>
    {data.map((item) => 
        <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}@gmail.com</td>
            <td>{item.gender}</td>
            <td><button onClick={del}>Delete</button></td>
        </tr>
    )}
    </>
  )
}

export default TableDetails