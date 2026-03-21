import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <div className="min-h-screen bg-gray-100 flex justify-center">
          <div className="w-[360px] bg-white shadow-lg">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}