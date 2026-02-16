import { Inter, Space_Grotesk } from "next/font/google"; // Changed from Outfit
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor"; // Optional: user likes premium feel

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk", // Changed variable name
  display: "swap",
});

export const metadata = {
  title: "Dev Community | Premium Developer Network",
  description: "A curated network for elite developers to connect, learn, and grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#FDFBF7] text-[#111111]`}>
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
