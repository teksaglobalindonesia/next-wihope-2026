import { Toaster } from '@/components/ui/sonner';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import { ReactQueryClientProvider } from '@/providers/ReactQueryClientProvider';
import Header from '@/components/custom/header';
import Footer from '@/components/custom/footer';

const interFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter'
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryClientProvider>
      <html
        lang="en"
        className={`${interFont.variable}`}
        suppressHydrationWarning={true}
      >
        <body>
          <NextTopLoader showSpinner={false} height={4} />
          <Toaster />
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
