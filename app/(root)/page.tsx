import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col justify-between">
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
