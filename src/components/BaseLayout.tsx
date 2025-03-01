import {clsx} from 'clsx';
import { Inter as FontSans } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { TailwindIndicator } from "@/components/ui/TailwindIndicator";
import { cn } from "@/libs/utils";
import "@/styles/globals.css";
import "@/styles/loading.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({children, locale}: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body 
      suppressHydrationWarning
      className={cn(
        "h-full flex flex-col bg-background font-sans antialiased",
        fontSans.variable
      )}>
      <ThemeProvider
          attribute="class"
          defaultTheme={'light'}
          enableSystem
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex flex-col items-center">{children}</main>
            <Footer />
            <TailwindIndicator />
          </NextIntlClientProvider>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
