import {NextIntlClientProvider} from 'next-intl';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Cursor from '@/components/Cursor';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import {locales, type Locale} from '@/i18n';

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
        <div className="relative overflow-x-hidden bg-[#f7f6f2]">
          <Cursor />
          <Nav locale={locale as Locale} />
          {children}
          <Footer />
        </div>
    </NextIntlClientProvider>
  );
}
