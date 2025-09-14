import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner"; // Import the Toaster component
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Armor Path - Coming Soon",
  description:
    "Forge your path and crush the convoy in Armor Path, the new tower defense game. Sign up to get notified on launch!",
  icons: {
    icon: "/armorpath.png", // <-- public/ not included
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 text-slate-300 selection:bg-lime-500 selection:text-slate-900`}
      >
        {children}
        {/* Add the Toaster here. It will be available on every page. */}
        <Toaster richColors theme="dark" position="top-center" />
      </body>
    </html>
  );
}
