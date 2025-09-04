import { Icons } from "./icons";
import { ThemeToggler } from "./theme-toggler";

export function Header() {
  return (
    <header className="flex items-center h-20 border-b border-b-foreground/10">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-10 lg:px-0">
        <div className="flex items-end gap-1.5 lg:gap-2.5">
          <Icons.code  strokeWidth={3} className="mb-0.5 w-5 h-5 lg:w-9 lg:h-9" />
          <span className="text-xl font-heading leading-none lg:text-3xl">
            Paulo Vinícius
          </span>
        </div>
        <ThemeToggler />
      </div>
    </header>
  );
}
