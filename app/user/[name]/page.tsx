

export default async function user({params}:{params:Promise<{name:string}>}){
    let {name} = await params

    return (
        <div>
            <h1>HEY {name} hope you are doing greate</h1>
        </div>
    )

}   