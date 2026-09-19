export default function Button({text}:{text:string}){
    return (
        <button onClick={() =>alert("hola amigos kese ho thik ho")}>
            {text}
        </button>
    )
}