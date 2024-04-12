import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FibraMap",
  description: "Encontra tu solucion",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-gray-300 dark:bg-gray-900 ">
        <NavBar />
        {children}
        <script id="dsq-count-scr" src="//fibramap.disqus.com/count.js" async></script>
      </body>
    </html>
  );
}
