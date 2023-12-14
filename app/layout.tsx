import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Topnav from "./ui/topnav/Topnav";
import Footer from "./ui/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task list next 14",
  description: "Task list next 14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Topnav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
