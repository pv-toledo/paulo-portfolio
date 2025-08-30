import { Icons } from "@/components/icons";
import { ThemeToggler } from "@/components/theme-toggler";

export default function Home() {
  return (
    <header className="flex items-center h-20 border-b border-b-foreground/10">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-10 lg:px-0">
        <div className="flex items-center gap-2.5">
          <Icons.code size={38}/>
          <span className="text-3xl font-bold">Paulo Vinícius</span>
        </div>
        <ThemeToggler />
      </div>
    </header>
  );
}
