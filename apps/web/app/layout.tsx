import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Side Questing', description: 'Executive progression for daily execution.' };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
