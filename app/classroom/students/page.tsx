import FilterUsers from "@/components/FilteredUsers"

type stuents = {
    id :number,
    name:string,
    username:string,
    email:string,

}

export default async function Stuents(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const result  = await response.json()

    return (
        <div>
            <FilterUsers users={result}/>
        </div>
    )

}