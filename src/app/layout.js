import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "STS Safety Stock Monitor",
  description: "Developed by STS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
          <div className="mx-20">
            <AntdRegistry>
              {children}
            </AntdRegistry>
          </div>
        <Footer />
      </body>
    </html>
  );
}
