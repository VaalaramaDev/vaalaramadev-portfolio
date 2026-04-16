'use client';

import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const t = useTranslations('hero');
  const lines = [t('lineOne'), t('lineTwo'), t('lineThree')];

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <section className="page-shell flex min-h-[calc(100svh-56px)] flex-col justify-center py-24 md:min-h-screen md:pt-20 md:pb-0">
      <motion.div
        initial={{opacity: 0, y: 60}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.7, delay: 0.1, ease}}
        className="inline-flex w-fit items-center gap-2 rounded-[20px] border border-[#c5d9c5] bg-[#eef4ee] px-3 py-2 text-[11px] text-[#5a7a5a]"
      >
        <span className="h-2 w-2 rounded-full bg-[#5a7a5a]" style={{animation: 'pulse 2s infinite'}} />
        <span>{t('status')}</span>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 60}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.7, delay: 0.2, ease}}
        className="section-label mt-10"
      >
        {t('eyebrow')}
      </motion.div>

      <div className="mt-8 space-y-1">
        {lines.map((line, index) => (
          <div key={line} className="overflow-hidden">
            <motion.h1
              initial={{y: 80, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.8, delay: 0.3 + index * 0.1, ease}}
              className={`text-[clamp(52px,8vw,96px)] font-medium leading-none tracking-[-0.04em] ${
                index === 1 ? 'text-[#c5c2b8]' : 'text-[#0f0f0d]'
              }`}
              style={{lineHeight: 1.1}}
            >
              {line}
            </motion.h1>
          </div>
        ))}
      </div>

      <motion.div
        initial={{opacity: 0, y: 60}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.7, delay: 0.8, ease}}
        className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <p className="max-w-[340px] text-[13px] leading-[1.7] text-[#888680]">{t('description')}</p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="rounded-[4px] border-[1.5px] border-[#0f0f0d] bg-transparent px-5 py-2.5 text-[13px] text-[#0f0f0d] transition-all duration-200 hover:bg-[#0f0f0d] hover:text-[#f7f6f2]"
          >
            {t('viewProjects')}
          </button>
          <a
            href="https://github.com/VaalaramaDev"
            target="_blank"
            rel="noreferrer"
            className="rounded-[4px] border border-[#dddbd4] px-5 py-2.5 text-[13px] text-[#888680] transition-colors duration-200 hover:border-[#0f0f0d] hover:text-[#0f0f0d]"
          >
            {t('github')} ↗
          </a>
        </div>
      </motion.div>
    </section>
  );
}
