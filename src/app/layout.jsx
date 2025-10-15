import { Inter } from "next/font/google";
import "../assets/styles/globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RentEase App | Book a House",
  description: "Book a house or convernece room for your team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
