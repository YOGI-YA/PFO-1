"use client"
import { Send } from "lucide-react"
import { useState } from "react";
import geminiCall from "@/app/actions/genai/page";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function Home(){
  let [prompt,setPrompt] = useState<string>("")
  let [response,setResponse] = useState<string>("")
  
  async function makeGeminiCall(){
    if(!prompt.trim()) return
    let res  = await geminiCall({prompt})

    setResponse(response)

   



  }


  return (
    <div>
      <div>
        <div>{prompt}</div>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {response}
          </ReactMarkdown>
          </div> 
      </div>
      <div className="w-full  rounded-md fixed bottom-10 flex justify-center items-center">
        <input type="text" className="w-1/3 border outline-none rounded-md p-4" onChange={(e) => setPrompt(e.target.value)} />
        
        <Send size={30} className="animate-bounce relative   right-10" onClick={() => makeGeminiCall()}/>
        
      </div>
    </div>
  )
}