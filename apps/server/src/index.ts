import express from "express";
import {prisma} from "@workspace/db/client";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/todos/:email", async(req, res)=>{
    try {
        const email = req.params.email;
        const user = await prisma.user.findFirst({
            where:{
                email
            }
        });
        const todos = await prisma.todo.findMany({
            where:{
                authorId:user?.id
            }
        });
        res.status(200).json({todos, message:"User todos sent successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({todos:[], message:"Something went wrong"});
    }
});

app.post("/todo/:email", async(req, res)=>{
    try {
        const email = req.params.email;
        const {content} = req.body;
        const user = await prisma.user.findFirst({
            where:{
                email
            }
        });
        if(!content || !user){
            return res.status(500).json({todo:{}, message:"Invalid user or no content found"});
        }
        const todo = await prisma.todo.create({
            data:{
                authorId: user!.id,
                content
            }
        });
        return res.status(200).json({todo, message:"Todo created successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({todo:{}, message:"Something went wrong"});
    }
});

app.listen(3001, "0.0.0.0", ()=>{
    console.log("Server is running on port 3001");
});