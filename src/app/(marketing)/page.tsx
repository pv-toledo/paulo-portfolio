import { Header } from "@/components/header";
import { Icons } from "@/components/icons";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center w-full max-w-7xl mx-auto px-10 lg:px-0">
        <div className="flex flex-col items-center gap-2 mt-20 lg:gap-7.5 lg:mt-40">

          <h1 className="text-4xl font-heading lg:text-8xl">Paulo Vinícius Toledo</h1>
          <h3 className="text-xl text-zinc-400 font-medium lg:text-2xl">Software Developer</h3>


          <div className="flex flex-col gap-5 mt-4 lg:flex-row lg:gap-10 lg:mt-0">
            <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full bg-muted">
                <Icons.location className="w-4 h-4 lg:w-6 lg:h-6"/>
                <span className="text-sm font-medium lg:text-lg">Rio de Janeiro, Brazil</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full bg-muted">
                <Icons.engineering className="w-4 h-4 lg:w-6 lg:h-6"/>
                <span className="text-sm font-medium lg:text-lg">Master in Engineering</span>
            </div>
          </div>
        </div>


      </section>
    </>
  );
}
