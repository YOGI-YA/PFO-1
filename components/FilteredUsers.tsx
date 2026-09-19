"use client"
import { useState } from "react"

type User = {
    id:number,
    name:string,
    username:string,
    email:string
}
export default function FilterUsers({users}:{users:User[]}){
    let [searchUser,setSearchUser] = useState("")
    
    let filterUsers = users.filter(User => {
        return User.name.toLocaleLowerCase().includes(searchUser.toLocaleLowerCase())
    })


    return (
        <div>
            <input type="text"
            placeholder="Search for user" 
            onChange={(e)=> setSearchUser(e.target.value)}/>

            <ul>
                {filterUsers.map( (user:User) =>(
                    <li key={user.id}>{user.name}  - {user.username} - {user.email}</li>
                ))}
            </ul>
        </div>
    )

}