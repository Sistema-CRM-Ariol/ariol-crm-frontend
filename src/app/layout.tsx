import "@/styles/globals.css";
import {  Red_Hat_Display } from 'next/font/google'
import Providers from "@/components/Providers";
const roboto = Red_Hat_Display({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800", '900'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${ roboto.className } antialiased relative`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
