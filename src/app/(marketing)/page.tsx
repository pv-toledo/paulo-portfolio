import { Header } from "@/components/header";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center w-full max-w-7xl mx-auto px-10 lg:px-0">
        <div className="flex flex-col items-center gap-2 mt-20 lg:gap-7.5 lg:mt-40">
          <h1 className="text-4xl font-heading lg:text-8xl">
            Paulo Vinícius Toledo
          </h1>
          <h3 className="text-xl text-zinc-400 font-medium lg:text-2xl">
            Software Developer
          </h3>

          <div className="flex flex-col gap-5 mt-4 lg:flex-row lg:gap-10 lg:mt-0">
            <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full bg-muted">
              <Icons.location className="w-4 h-4 lg:w-6 lg:h-6" />
              <span className="text-sm font-medium lg:text-lg">
                Rio de Janeiro, Brazil
              </span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full bg-muted">
              <Icons.engineering className="w-4 h-4 lg:w-6 lg:h-6" />
              <span className="text-sm font-medium lg:text-lg">
                Master in Engineering
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-4 lg:flex-row lg:gap-10 lg:mt-0">
            <Link
              href="https://drive.google.com/file/d/1DUATIqPK77oxY9ZmJrB_No4gfF1Y7FvC/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2.5 cursor-pointer">
                <Icons.download className="!w-4 !h-4 lg:!w-6 lg:!h-6" />
                <span className="text-sm lg:text-lg">Download resume</span>
              </Button>
            </Link>

            <Button size="lg" className="bg-foreground gap-2.5 px-4 py-2.5">
              <Icons.download className="!w-4 !h-4 lg:!w-6 lg:!h-6" />
              <span className="text-sm lg:text-lg">Download resume</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
