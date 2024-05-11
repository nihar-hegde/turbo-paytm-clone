"use client";
import { Button } from "@repo/ui/components/ui/button";
import prisma from "@repo/database";
import { useBalance } from "@repo/store/useBalance";

export default function Page() {
  const balance = useBalance();
  return (
    <main>
      <div>
        <h1 className="flex items-center text-5xl font-bold">
          Hello world from user app
        </h1>
        <Button variant={"destructive"}> Text</Button>
      </div>
    </main>
  );
}
