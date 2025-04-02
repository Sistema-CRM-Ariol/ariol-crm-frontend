import "@/styles/globals.css";
import { Gilroy } from "@/config";
import { Quicksand } from 'next/font/google'
import Providers from "@/components/Providers";
const roboto = Quicksand({ subsets: ['latin'], weight: ["300", "400", "500", "700"] })


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
