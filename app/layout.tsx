import { Toaster } from '@/components/ui/sonner';
import {
  Roboto, Inter
} from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
// TypeScript may complain about side-effect CSS imports in some setups; ignore the type error here
// @ts-ignore
import './globals.css';
// TypeScript may complain about side-effect CSS imports in some setups; ignore the type error here
// @ts-ignore
import "animate.css/animate.compat.css";
import { ReactQueryClientProvider } from '@/providers/ReactQueryClientProvider';

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto'
});

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
        className={`${robotoFont.variable} ${interFont.variable}`}
        suppressHydrationWarning={true}
      >
        <body>
          <NextTopLoader showSpinner={false} height={4} />
          <Toaster />
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
