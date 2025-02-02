import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Container from '@/components/global/Container';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Store',
  description: 'A nifty store build with next.js',
};
import { ClerkProvider } from '@clerk/nextjs';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <Container className=' py-20'>{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
