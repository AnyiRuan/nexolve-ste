import './globals.css';
import Link from 'next/link';
export const metadata = {
  title: 'Nexolve – Implementation, Automation, Results',
  description: 'AI, automation, apps and digital implementation services delivering measurable ROI.'
};
export default function RootLayout({ children }){
  return (
    <html lang="en"><body>
      <header className="border-b border-gray-100">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Nexolve" className="h-8 w-8 rounded"/>
            <span className="font-semibold">Nexolve</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/services">Services</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/use-cases">Use Cases</Link>
            <Link href="/playbooks">Playbooks</Link>
            <Link href="/impact">Impact</Link>
            <Link href="/about">About</Link>
            <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-20 border-t border-gray-100 py-10 text-sm">
        <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p>© 2025 Nexolve – Implementation • Automation • Results</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/terms">Terms</Link>
            <a href="mailto:hello@nexolve.ai">hello@nexolve.ai</a>
          </div>
        </div>
      </footer>
    </body></html>
  );
}