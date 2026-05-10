import { prisma } from "@workspace/db/client";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
 
export const config = NextAuth({
  providers: [GitHub],
  callbacks:{
    async signIn({user}){
      try {
        const username = user.name;
        if(!user.email || !username) return false;
        await prisma.user.upsert({
          where:{
            email:user.email,
          },
          update:{
            name:username,
            email:user?.email,
          },
          create:{
            email:user?.email,
            name:username
          }
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
});

export const handlers = config.handlers;
export const auth:any = config.auth;