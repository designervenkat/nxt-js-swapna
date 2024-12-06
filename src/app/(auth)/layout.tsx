export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen bg-red-400 grid place-content-center">
      {children}
    </div>
  );
}
