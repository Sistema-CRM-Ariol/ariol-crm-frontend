import "@/styles/globals.css";
import { Gilroy } from "@/config";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${Gilroy.className} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
