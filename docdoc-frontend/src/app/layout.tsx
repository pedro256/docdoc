import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lato} from 'next/font/google';
import "./globals.css";
import { Tooltip } from "react-tooltip";
import TooltipHandler from "@/components/tooltip-handler/TooltipHandler";

const lato = Lato({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
})


export const metadata: Metadata = {
  title: "Doc Doc",
  description: "App documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${lato.className}  antialiased`}
      >
        {children}
        <TooltipHandler/>
      </body>
    </html>
  );
}
