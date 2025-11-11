import './globals.css';
import Link from 'next/link';
import MobileNav from './MobileNav';

export const metadata = {
  title: 'Nexolve – Implementation, Automation, Results',
  description: 'AI, automation, apps and digital implementation services delivering measurable ROI.'
};

export default function RootLayout({ children }){
  return (
    <html lang="en"><body>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-400 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <img src="/logo.png" alt="Nexolve" className="h-10 w-10 rounded-xl relative z-10 transform group-hover:scale-105 transition-transform"/>
              </div>
              <span className="font-display font-bold text-xl text-brand-900">Nexolve</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/services" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors">
                Services
              </Link>
              <Link href="/stories" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors">
                Stories
              </Link>
              <Link href="/use-cases" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors">
                Use Cases
              </Link>
              <Link href="/playbooks" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors">
                Playbooks
              </Link>
              <Link href="/impact" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors">
                Impact
              </Link>
              <Link href="/about" className="text-sm font-medium text-neutral-700 hover:text-brand-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="btn btn-primary text-sm">
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <MobileNav />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gradient-to-br from-brand-950 to-brand-900 text-brand-100 pt-16 pb-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Nexolve" className="h-10 w-10 rounded-xl"/>
                <span className="font-display font-bold text-2xl text-white">Nexolve</span>
              </div>
              <p className="text-brand-200 leading-relaxed mb-6 max-w-md">
                Implementation, Automation, Results. We transform organizations with AI-powered solutions and intelligent workflows.
              </p>
              <a href="mailto:hello@nexolve.ai" className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 font-medium transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@nexolve.ai
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-semibold text-white mb-4">Services</h3>
              <div className="space-y-3">
                <Link href="/services/ai-automation" className="block text-brand-200 hover:text-accent-400 transition-colors">
                  AI & Automation
                </Link>
                <Link href="/services/website-digital-growth" className="block text-brand-200 hover:text-accent-400 transition-colors">
                  Digital Growth
                </Link>
                <Link href="/services/custom-apps" className="block text-brand-200 hover:text-accent-400 transition-colors">
                  Custom Apps
                </Link>
                <Link href="/services/blockchain-compliance" className="block text-brand-200 hover:text-accent-400 transition-colors">
                  Blockchain
                </Link>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-display font-semibold text-white mb-4">Company</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-brand-200 hover:text-accent-400 transition-colors">
                  About
                </Link>
                <Link href="/stories" className="block text-brand-200 hover:text-accent-400 transition-colors">
                  Stories
                </Link>
                <Link href="/impact" className="block text-brand-200 hover:text-accent-400 transition-colors">
                  Impact
                </Link>
                <Link href="/contact" className="block text-brand-200 hover:text-accent-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-brand-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-brand-300">
              <p>© 2025 Nexolve. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/legal/privacy" className="hover:text-accent-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/legal/terms" className="hover:text-accent-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </body></html>
  );
}