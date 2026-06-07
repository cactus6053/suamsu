import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Logo } from './Logo';

const navItems = [
  { href: '/about', key: 'about' },
  { href: '/product', key: 'product' },
  { href: '/distribution', key: 'distribution' },
  { href: '/contact', key: 'contact' },
] as const;

export function Footer() {
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');
  const tContact = useTranslations('contact');
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-slate-600">{tFooter('tagline')}</p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {tFooter('navTitle')}
          </h4>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-slate-700 hover:text-brand-700"
                >
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {tFooter('contactTitle')}
          </h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>{tContact('emailValue')}</li>
            <li>{tContact('phoneValue')}</li>
            <li className="text-slate-500">{tContact('addressValue')}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-slate-500">
          {tFooter('rights')}
        </div>
      </div>
    </footer>
  );
}
