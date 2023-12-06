//import Link from "next/link";

//import { Button } from "@/components/ui/button";

//import { CreatePost } from "@/app/_components/create-post";
//import { api } from "@/trpc/server";

export default async function Home() {
  //const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {/*<Button className='text-slate-300 cursor-pointer'>Click me</Button>*/}
    </main>
  );
}
