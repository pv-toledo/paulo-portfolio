import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

export function About() {
  return (
    <section className="grid lg:grid-cols-2 gap-7.5 w-full max-w-7xl mx-auto px-10 mt-20 xl:px-0 lg:mt-40">
      <div className="flex flex-col w-full gap-7.5 lg:gap-10">
        <h4 className="text-2xl font-heading lg:text-4xl">
          Devolping efficient and modern applications
        </h4>
        <p className="lg:text-lg text-justify font-medium">
          Full Stack Developer building high-quality applications with React,
          Next.js, and Node.js, with real-world experience taking freelance
          projects from concept to client delivery. Focused on solving problems
          by engineering robust solutions, applying the structured
          problem-solving skills from my background as a Master in Metallurgical
          Engineering to provide a smooth and captivating user experience within
          the modern TypeScript ecosystem.
        </p>
      </div>

      <AspectRatio ratio={16 / 9}>
        <Image
          src="/profile-picture.jpg"
          fill
          alt=""
          className="object-cover rounded-xl"
        />
      </AspectRatio>
    </section>
  );
}
