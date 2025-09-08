import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: '700', // You can specify specific weights
  subsets: ['latin'], 
  variable: '--font-poppins' 
});
export const metadata: Metadata = {
  title: "Kakooza Harunah",
  description: "A software Developer",
   icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
