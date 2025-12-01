import HomePage from "@/components/Home/HomePage";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Suspense fallback="Loading...">
        <HomePage />
      </Suspense>
    </div>
  );
}
