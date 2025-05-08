import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/organisms/navbar";
import Button from "@/components/atoms/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <main className="flex flex-col items-center justify-center gap-[32px] row-start-2 w-full">
      <Image
            src="/selflogo.svg"
            alt="Logo"
            width={192}
            height={192}
            className="cursor-pointer mb-4 rounded-lg glow-animation color-change rotate-hover"
          />
        <header className="text-center">
          <h1 className="text-xl font-bold mb-2">Rachel Mancini</h1>
          <h2 className="text-lg mb-4">Software Engineer</h2>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/therachelmancini" passHref>
              <Button label="LinkedIn" className="bg-blue-700 hover:bg-blue-800" />
            </Link>
            <Link href="https://github.com/therachelmancini" passHref>
              <Button label="GitHub" className="bg-gray-700 hover:bg-gray-800" />
            </Link>
            <Link href="https://www.hackerrank.com/profile/rachel_mancini92" passHref>
              <Button label="HackerRank" className="bg-green-700 hover:bg-green-800" />
            </Link>
          </div>
        </header>
      </main>
    </div>
  );
}
