import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard de Planos",
  description: "Exemplo de planos e layout global no Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100`}
        suppressHydrationWarning
      >
        <nav className="border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <div className="mx-auto flex h-16 max-w-6xl items-center px-6">
            <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Assinaturas Pro
            </span>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
