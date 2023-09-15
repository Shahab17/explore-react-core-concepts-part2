import { useEffect, useState } from "react"
import './Friends.css'

export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=> setUsers(data))


    }, []);


    return (
        <div className="box1">
            <h3>Users: {users.length} </h3>
        </div>
    )
}


/**
 * 1. declare a state to hold the data 
 *  2. useEffect with call back and dependency array
 * 3. 
 */
 