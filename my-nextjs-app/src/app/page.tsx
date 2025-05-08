import Image from "next/image";
import NavBar from "../components/organisms/NavBar";

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
          <p className="text-sm mb-2">
            Welcome to my personal homepage.
          </p>
        </header>
        </main>
      {/* </footer> */}
    </div>
  );
}
