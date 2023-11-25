import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "StudentHubConnect",
  description: "StudentHub Connect offers a seamless student experience with features like an affordable textbook rental marketplace, easy hostel finding with virtual tours, interactive maps, community forums, timely notifications, a resource center, exclusive local business partnerships, and convenient mobile app access.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
