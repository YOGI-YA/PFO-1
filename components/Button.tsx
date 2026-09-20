import someAction from "@/app/actions/someaction/page"
export default function Button({text}:{text:string}){
    return (
        <button onClick={() =>someAction()  }>
            {text}
        </button>
    )   
}