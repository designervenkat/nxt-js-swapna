import Link from "next/link";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen bg-green-900 grid place-content-center">
      <header>
        <ul className="flex items-center justify-between gap-x-5">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <Link href="/products">Dashboard</Link>
        </ul>
      </header>
      {children}
      <footer className="text-center">
        Copyright @someone.com
      </footer>
    </div>
  );
}
