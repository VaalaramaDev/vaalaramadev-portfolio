'use client';

import Link from 'next/link';
import {useState} from 'react';
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import {useTranslations} from 'next-intl';
import type {Locale} from '@/i18n';

type NavProps = {
  locale: Locale;
};

const links = ['about', 'projects', 'skills', 'contact'] as const;

export default function Nav({locale}: NavProps) {
  const t = useTranslations('nav');
  const {scrollY} = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 12);
  });

  return (
    <motion.header
      initial={{y: -20, opacity: 0}}
      animate={{
        y: 0,
        opacity: 1,
        backgroundColor: scrolled ? 'rgba(247,246,242,0.85)' : 'rgba(247,246,242,0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
        borderBottomColor: scrolled ? 'rgba(221,219,212,1)' : 'rgba(221,219,212,0)'
      }}
      transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
      className="fixed inset-x-0 top-0 z-50 border-b"
      style={{height: 56}}
    >
      <div className="page-shell flex h-full items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3 text-[13px] font-medium text-[#0f0f0d]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dddbd4] bg-[#f0efe9] text-[11px]">
            PS
          </span>
          <span>Pavel Skvortsov</span>
        </Link>

        <div className="flex items-center gap-6 text-[13px] text-[#888680]">
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a key={link} href={`/${locale}/#${link}`} className="transition-colors duration-200 hover:text-[#0f0f0d]">
                {t(link)}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1 text-[12px]">
            <Link href="/en" className={locale === 'en' ? 'text-[#0f0f0d]' : 'transition-colors hover:text-[#0f0f0d]'}>
              EN
            </Link>
            <span className="text-[#c5c2b8]">|</span>
            <Link href="/ru" className={locale === 'ru' ? 'text-[#0f0f0d]' : 'transition-colors hover:text-[#0f0f0d]'}>
              RU
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
