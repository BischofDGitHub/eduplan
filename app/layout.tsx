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
        <Menu />
        {children}
      </body>
    </html>
  );
}
