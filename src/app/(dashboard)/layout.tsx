export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen bg-green-900 flex items-start justify-start">
      
      <div className="flex items-center justify-center">
        <h2>Sidebar</h2>
      </div>
      <div className="flex  items-center justify-center flex-1 bg-slate-900">
        {children}
      </div>
      
    </div>
  );
}
