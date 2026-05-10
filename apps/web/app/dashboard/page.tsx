
import DashboardMain from "@/components/Dashboard";
import { auth } from "@/lib/auth";
import axios from "axios";

export default async function Dashboard() {
  const session = await auth();
  const backendUrl = process.env.BACKEND_URL ?? process.env.NEXT_PUBLIC_BACKEND_URL;
  const todos = (await axios.get(`${backendUrl}/todos/${session?.user?.email}`)).data.todos;
  
  return (
    <DashboardMain my_todos={todos} email={session?.user?.email || ""}/>
  );
}