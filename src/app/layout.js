import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/shared/Header";
import GlobalProvider from "./provider/globalProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vita soft task",
  description: "vita soft task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <Header />
          {children}
        </GlobalProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
