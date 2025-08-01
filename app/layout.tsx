import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lennert Pfundtner",
  description:
    "Web Developer from Germany. Studiyng Computer Science at IU Internationale Hochschule.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <body className={outfit.className}>
          <div className="relative min-h-screen">
            <Header />
            <div className="pb-[155px]">{children}</div>
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
