'use client';

import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="section-rule py-20">
      <div className="page-shell grid gap-10 md:grid-cols-[60%_40%]">
        <motion.div
          initial={{x: -80, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{once: true, amount: 0.1}}
          transition={{duration: 0.7, delay: 0.1, ease}}
        >
          <div className="section-label">{t('title')}</div>
          <p className="mt-8 max-w-[480px] text-[15px] leading-[1.8] text-[#444442]">{t('bio')}</p>
        </motion.div>

        <motion.div
          initial={{x: 80, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{once: true, amount: 0.1}}
          transition={{duration: 0.7, delay: 0.1, ease}}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-2 rounded-[8px] bg-[#f0efe9] px-4 py-3 text-[13px] text-[#888680]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="7" cy="5.5" r="2" />
              <path d="M7 14C7 14 2 9 2 5.5a5 5 0 0 1 10 0C12 9 7 14 7 14z" />
            </svg>
            <span>{t('location')}</span>
          </div>
          <div className="flex items-center gap-2 rounded-[8px] bg-[#f0efe9] px-4 py-3 text-[13px] text-[#888680]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="5.5" />
              <path d="M7 4v3l2 1.5" />
            </svg>
            <span>{t('timezone')}</span>
          </div>
          <div className="flex items-center gap-2 rounded-[8px] bg-[#f0efe9] px-4 py-3 text-[13px] text-[#888680]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="5.5" />
              <path d="M4.5 7l2 2 3-3" />
            </svg>
            <span>{t('availability')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
