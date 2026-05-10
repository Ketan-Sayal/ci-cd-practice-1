"use client";
import GithubButton from "@/components/GithubButton";
import { Button } from "@workspace/ui/components/button";
import axios from "axios";
import { useState } from "react";


interface Todo{
  id: number;
  aurthorId: number;
  content: string;
}

interface IDashboard{
  my_todos:Todo[];
  email:string
}

const DashboardMain = ({my_todos, email}:IDashboard) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(my_todos);
  const addTodo = async()=>{
    try {
      const my_todo = (await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todo/${email}`, {content:todo})).data.todo;
      setTodos([...todos, my_todo]);
      setTodo("");
    } catch (error) {
      console.log(error);   
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Tasks</h1>
        <div className="flex items-center gap-4">
         <GithubButton/>
        </div>
      </div>  
      <div className="flex gap-2 mb-6">
        <input
          placeholder="Add a new task..."
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
          className="flex-1 p-3 rounded-lg bg-white/10 outline-none placeholder-gray-400"
        />
        <Button 
        onClick={addTodo}
        className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition">
          Add
        </Button>
      </div>
      <div className="space-y-3">
        {todos && todos.length>0 && todos.map((todo:Todo)=>(
          <div key={todo.id}>
            <div className="flex justify-between items-center p-4 rounded-lg bg-white/5 border border-white/10">
          <div className="cursor-pointer">
            {todo.content}
          </div>
        </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardMain
