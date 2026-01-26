import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'BadgeMint - Soulbound Achievement Minter',
    description: 'Mint soulbound achievement badges on Base and Stacks',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col">
                    <header className="border-b">
                        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                            <h1 className="text-xl font-bold tracking-tight">BadgeMint</h1>
                            <nav className="flex gap-4">
                                {/* Connect Wallet Buttons will go here */}
                            </nav>
                        </div>
                    </header>
                    <main className="flex-1 container mx-auto px-4 py-8">
                        {children}
                    </main>
                    <footer className="border-t py-6">
                        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                            © 2026 BadgeMint. Built for Base and Stacks.
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    )
}
