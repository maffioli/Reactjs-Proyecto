import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TaskProvider } from "@tasks/context/TaskContext";
import { UserAvatar } from "@/shared/atoms/Image";
import { UnifrakturMaguntia  } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unifrakturMaguntia = UnifrakturMaguntia({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Tareas | TaskFlow',
  description: 'Gestiona tus tareas',
  openGraph: {
    title: 'Tareas | TaskFlow',
    description: 'Gestiona tus tareas',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
          style={{ minHeight: "100vh", backgroundColor: "#f8fafc", color: "#22223b" }}
          className={unifrakturMaguntia.className}>
        <header
          style={{
            backgroundColor: "#e2e8f0",
            color: "#22223b",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "20px" }}>TaskFlow</h1>
          
          <UserAvatar src="/avatar.jpg" name="Usuario" />

          <nav style={{ display: "flex", gap: "16px" }}>
            <span>Dashboard</span>
            <span>Tareas</span>
            <span>Proyectos</span>
          </nav>
        </header>
        <TaskProvider>
          <main style={{ maxWidth: "960px", margin: "0 auto", padding: "24px" }}>
            {children}
          </main>
        </TaskProvider>
      </body>
    </html>
  );
}
