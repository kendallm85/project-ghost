import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Project GHOST | Echoes of the Past', description: 'A local-first AI memory experience' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
