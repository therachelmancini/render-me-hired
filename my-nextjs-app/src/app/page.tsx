import NavBar from "@/components/organisms/navbar";
import Image from "next/image";
import Header from "@/components/molecules/header";
import Footer from "@/components/atoms/footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <NavBar />
      <main className="flex flex-col items-center justify-center gap-[32px] row-start-2 w-full">
        <header className="text-center">
          <h1 className="text-2xl font-bold mb-2">
            Welcome!
            </h1>
          <p>
            I&apos;m Rachel Mancini, a Software Engineer passionate about
            building clean, efficient, and impactful solutions. <br /> Explore
            my work, experience, and projects — let&apos;s create something
            great together.
          </p>
        </header>
        <Image
          src="/selflogo.svg"
          alt="Logo"
          width={768}
          height={768}
          className="cursor-pointer mb-4 rounded-2xl glow-animation color-change rotate-hover"
        />
        <Footer />
      </main>
    </div>
  );
}
