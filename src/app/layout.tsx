import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@styles/globals.css";
import { SidebarProvider } from "@components/ui/sidebar";
import { AppSidebar } from "@components/layout/app-sidebar";
import { AppHeader } from "@components/layout/app-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | vigilant",
  description: "Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="w-full grid h-screen grid-cols-[256px_1fr] grid-rows-[64px_1fr]">
            <AppSidebar />
            <AppHeader />

            <main className="col-start-2 row-start-2 overflow-y-auto p-4 md:p-8 bg-black text-white min-h-0">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
