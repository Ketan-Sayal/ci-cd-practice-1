"use client";

import { Button } from "@workspace/ui/components/button";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function GithubButton() {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <div className="flex items-center gap-2">
      <Button variant="outline" onClick={() => signOut()}>
        {session.user?.name}
      </Button>
      <Button variant="outline" onClick={() => router.push("/dashboard")}>
        Dashboard
      </Button>
      </div>
    );
  }

  return (
    <Button onClick={() => signIn("github")}>
      Sign in
    </Button>
  );
}