import { useState } from "react";
import { Users } from "./users";
import TableDetails from "./TableDetails";

function People(){   
    const [query, setQuery] = useState("")
    const keys = ["first_name", "last_name", "email"]
    const search = (data) => {
        return data.filter((item) => 
                keys.some((key) => 
                    item[key].toLowerCase().includes(query)
                )
                // item.first_name.toLowerCase().includes(query) || 
                // item.last_name.toLowerCase().includes(query) || 
                // item.email.toLowerCase().includes(query)
        )
    }

    function handleDelete(){
        console.log("deleted")
    }


    return (
        <div>
            <input 
                type="text" 
                placeholder="search name..." 
                className="search"
                onChange={(e)=> setQuery(e.target.value)}
            />
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                    <TableDetails data={search(Users)} del={handleDelete}/>
                </tbody>
            </table>

        </div>
    )
}

export default People;