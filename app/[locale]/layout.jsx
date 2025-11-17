import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ChatBot from '@/components/ChatBot';

export const metadata = {
  title: 'Nexolve – Implementation, Automation, Results',
  description: 'AI, automation, apps and digital implementation services delivering measurable ROI.'
};

const locales = ['en', 'zh', 'es'];

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        {/* 浮动装饰色块 - 增加页面层次感 */}
        <div className="floating-blob-lg bg-accent" style={{ top: '10%', left: '5%' }}></div>
        <div className="floating-blob-md bg-brand" style={{ top: '40%', right: '8%' }}></div>
        <div className="floating-blob-sm bg-accent" style={{ bottom: '20%', left: '15%' }}></div>
        <div className="floating-blob-md bg-brand" style={{ top: '70%', right: '20%' }}></div>

        <NextIntlClientProvider messages={messages}>
          <header className="sticky top-0 z-50 bg-gradient-to-r from-brand via-brand-light to-brand backdrop-blur-md bg-opacity-95 shadow-lg border-b border-white/10">
            {/* 装饰性顶部线条 */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

            <div className="container flex items-center justify-between py-4">
              <Link href={`/${locale}`} className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-lg blur-md group-hover:bg-accent/30 transition-all"></div>
                  <img src="/logo.png" alt="Nexolve" className="h-8 w-8 rounded relative"/>
                </div>
                <span className="font-bold text-xl text-white">Nexolve</span>
              </Link>

              <nav className="flex items-center gap-6 text-sm">
                <Link href={`/${locale}/services`} className="text-gray-200 hover:text-accent transition-colors relative group">
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href={`/${locale}/stories`} className="text-gray-200 hover:text-accent transition-colors relative group">
                  Stories
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href={`/${locale}/use-cases`} className="text-gray-200 hover:text-accent transition-colors relative group">
                  Use Cases
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href={`/${locale}/playbooks`} className="text-gray-200 hover:text-accent transition-colors relative group">
                  Playbooks
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href={`/${locale}/impact`} className="text-gray-200 hover:text-accent transition-colors relative group">
                  Impact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href={`/${locale}/about`} className="text-gray-200 hover:text-accent transition-colors relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                </Link>
                <LanguageSwitcher />
                <Link href={`/${locale}/contact`} className="btn btn-primary shadow-glow">Get a Quote</Link>
              </nav>
            </div>

            {/* 装饰性底部渐变 */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
          </header>
          <main className="relative z-10">{children}</main>
          <footer className="relative z-10 mt-20 bg-gradient-to-br from-brand via-brand-light to-brand-dark text-gray-200 py-12 overflow-hidden">
            {/* 装饰性背景 */}
            <div className="absolute inset-0 pattern-dots opacity-10"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>

            {/* 装饰性色块 */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

            <div className="container relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="font-semibold text-white mb-2">© 2025 Nexolve</p>
                  <p className="text-sm text-gray-300">Implementation • Automation • Results</p>
                </div>

                <div className="flex gap-8 items-center">
                  <Link href={`/${locale}/legal/privacy`} className="text-sm hover:text-accent transition-colors">
                    Privacy
                  </Link>
                  <Link href={`/${locale}/legal/terms`} className="text-sm hover:text-accent transition-colors">
                    Terms
                  </Link>
                  <a href="mailto:hello@nexolve.ai" className="text-sm hover:text-accent transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@nexolve.ai
                  </a>
                  <Link href={`/${locale}/admin/login`} className="text-xs px-3 py-1 rounded bg-brand-dark/50 hover:bg-brand-dark border border-gray-600/30 hover:border-accent/50 transition-all flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Admin
                  </Link>
                </div>
              </div>
            </div>
          </footer>
          <ChatBot />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
