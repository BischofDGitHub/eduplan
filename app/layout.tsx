import Menu from "@/components/molecules/Menu";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Menu>
          <div className="p-8 border border-black bg-amber-500">skibidi</div>
          {children}
        </Menu>
      </body>
    </html>
  );
}
