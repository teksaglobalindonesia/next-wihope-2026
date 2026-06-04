import { Toaster } from '@/components/ui/sonner';
import { Roboto, Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import 'animate.css/animate.compat.css';
import { ReactQueryClientProvider } from '@/providers/ReactQueryClientProvider';

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto'
});

const interFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
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
        className={`${robotoFont.variable} ${interFont.variable}`}
        suppressHydrationWarning={true}
      >
        <body className={interFont.className}>
          <NextTopLoader showSpinner={false} height={4} />
          <Toaster 
            position="top-right" 
            closeButton 
            toastOptions={{
              classNames: {
                toast: '!pr-[50px]',
                closeButton: '!right-4 !left-auto !translate-x-0 !top-1/2 !-translate-y-1/2',
              },
            }}
          />
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
