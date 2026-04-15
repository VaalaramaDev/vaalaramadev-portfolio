import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="section-rule py-6">
      <div className="page-shell flex flex-col justify-between gap-2 text-[11px] text-[#c5c2b8] md:flex-row">
        <div>{t('copyright')}</div>
        <div>{t('builtWith')}</div>
      </div>
    </footer>
  );
}
