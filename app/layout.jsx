import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/app/providers/LanguageProvider';

export const metadata = {
  title: 'Anoma Academy',
  description: 'Anoma Academy',
  icons: { icon: '/icons/anoma-logo.svg' }
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {/* Sayfa yüksekliğini ekran boyuna eşitle, içerik alanını esnet, footer’ı alta sabitle */}
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
