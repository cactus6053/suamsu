import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

const navItems = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/product', key: 'product' },
  { href: '/distribution', key: 'distribution' },
  { href: '/contact', key: 'contact' },
] as const;

export function Header() {
  const t = useTranslations('nav');
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
        </div>
      </div>
      <nav className="md:hidden border-t border-slate-100 bg-white/90">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 py-2 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="shrink-0 rounded-md px-3 py-1.5 text-slate-700 hover:bg-slate-100"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
