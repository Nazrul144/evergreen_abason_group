import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import AllProjectsProvider from "@/providers/AllProjectsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evergreen Abason Group" || "Home",
  description:
    "Evergreen Abason Group is a leading real estate and development company dedicated to building sustainable, modern, and affordable living spaces. With a focus on quality craftsmanship and customer satisfaction, we strive to create communities that inspire and thrive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900 bg-white`}>
        <div className="px-2">
          <ThemeProvider>
            <AllProjectsProvider>{children}</AllProjectsProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
