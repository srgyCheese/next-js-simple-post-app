import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Simple post app',
  description: 'Using next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="overflow-none flex h-screen justify-center py-10">
          <div className="flex h-full w-full flex-col border rounded-xl border-slate-400 md:max-w-2xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
