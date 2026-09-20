export default async function age({params}:{params:Promise<{name:string,age:number}>}) {
    let {name,age} = await params

    return (
        <div>
            <h2> HEY {name} you turned {age} this year </h2>
        </div>
    )
}