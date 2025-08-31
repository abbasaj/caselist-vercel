import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = { title: 'Caselist' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-900 text-white">
        <nav className="bg-slate-800/60 border-b border-slate-700 sticky top-0">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
            <Link href="/" className="font-bold text-lg">Caselist</Link>
            <div className="ml-auto space-x-3">
              <Link href="/auth/signin" className="px-4 py-2 bg-primary rounded-2xl text-black">Sign in</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
