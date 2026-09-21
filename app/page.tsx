"use client"
import { Send } from "lucide-react"
import { useState } from "react";
import geminiCall from "@/app/actions/genai/page";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  role : "user" | "assistant";
  content:string;
}
export default function Home(){
  let [prompt,setPrompt] = useState<string>("")
  const [messages,setMessage] = useState<Message[]>([])
  const [loading,setLoading] = useState<boolean>(false)


  
  async function makeGeminiCall(){
    if(!prompt.trim() || loading) return;
    const userMessage :Message  = {role : "user" , content : prompt};
    setMessage((prev) => [...prev, userMessage]);
    setPrompt("") 
    setLoading(true);

   try{
    const res =  await geminiCall({prompt})
    const botMessage:Message = { role: "assistant" , content:res};
    setMessage((prev) => [...prev,botMessage])
   }catch(error){
    console.error("Failed to fetch response:",error);
    
   }finally{
    setLoading(false)
   }



  }


  return (
    <div className="flex flex-col min-h-screen pb-24 max-w-3xl mx-auto p-4">
      {/* Message History Container */}
      <div className="flex-1 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
              }`}
            >
              {msg.role === "user" ? (
                msg.content
              ) : (
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {msg.content}
                </ReactMarkdown>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-gray-500">
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="w-full fixed bottom-6 left-0 right-0 flex justify-center items-center px-4">
        <div className="w-full max-w-2xl flex items-center relative">
          <input
            type="text"
            value={prompt}
            placeholder="Type your message..."
            className="w-full border outline-none rounded-lg p-4 pr-12 shadow-md dark:bg-gray-900"
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && makeGeminiCall()}
          />
          <Send
            size={24}
            className={`absolute right-4 cursor-pointer text-gray-500 hover:text-blue-500 transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={makeGeminiCall}
          />
        </div>
      </div>
    </div>
  )
}