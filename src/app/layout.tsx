import "@/styles/globals.css";
import { Gilroy } from "@/config";
import Providers from "@/components/Providers";


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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
