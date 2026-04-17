import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  title: 'จัดให้ JADHAI | Auspicious Ceremonies & Offerings',
  description: 'Premium platform for organizing ceremonies, acquiring offering sets, and booking officiants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
