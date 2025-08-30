export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col">{children}</div>
    </main>
  );
}
