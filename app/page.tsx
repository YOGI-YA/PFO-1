"use client"
import { Send } from "lucide-react"
import { useState } from "react"
export default function Home(){
  let [prompt,setPrompt] = useState<String>("")
  return (
    <div>
      <div>
        <div>{prompt}</div>
        <div></div>
      </div>
      <div className="w-full  rounded-md fixed bottom-10 flex justify-center items-center">
        <input type="text" className="w-1/3 border outline-none rounded-md p-4" onChange={(e) => setPrompt(e.target.value)} />
        
        <Send size={30} className="animate-bounce  absolute relative right-10" onClick={() => alert(prompt)}/>
        
      </div>
    </div>
  )
}