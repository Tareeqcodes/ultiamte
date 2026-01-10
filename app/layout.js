import "../assets/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>

          {children}
        </main>
      </body>
    </html>
  );
}
