"use client"
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Poppins } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base } from 'wagmi/chains';
import '@coinbase/onchainkit/styles.css'; 
import WagmiProviderWrapper from '@/components/global/WagmiProvider';
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen max-w-full overflow-x-hidden bg-background text-foreground antialiased',
          poppins.className
        )}
      >
        <OnchainKitProvider
          apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
          chain={base}
          config={{
            appearance: {
              name: 'AlgoVerse',        // Displayed in modal header
              logo: 'https://your-logo.com',// Displayed in modal header
              mode: 'auto',                 // 'light' | 'dark' | 'auto'
              theme: 'default',             // 'default' or custom theme
            },
            wallet: { 
              display: 'modal', 
              termsUrl: 'https://...', 
              privacyUrl: 'https://...', 
            },
          }} 
        >
          <WagmiProviderWrapper>
          <ClerkProvider appearance={{ baseTheme: dark }}>
            {children}
          </ClerkProvider>
          </WagmiProviderWrapper>
        </OnchainKitProvider>
      </body>
    </html>
  );
}
