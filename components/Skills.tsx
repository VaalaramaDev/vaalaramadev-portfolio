'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import {useLocale} from 'next-intl';

type Icon =
  | {name: string; class: string; letter?: never; svgPath?: never}
  | {name: string; class: null; letter: string; svgPath?: never}
  | {name: string; class: null; letter?: never; svgPath: string};

type SkillGroup = {
  label: string;
  labelRu: string;
  items: string[];
  icons: Icon[];
};

const skillGroups = [
  {
    label: 'Languages',
    labelRu: 'Языки',
    items: ['Python', 'JavaScript', 'PHP'],
    icons: [
      {name: 'Python', class: 'devicon-python-plain'},
      {name: 'JavaScript', class: 'devicon-javascript-plain'},
      {name: 'PHP', class: 'devicon-php-plain'}
    ]
  },
  {
    label: 'Backend',
    labelRu: 'Бэкенд',
    items: ['FastAPI', 'Node.js', 'REST API', 'Webhooks'],
    icons: [
      {name: 'FastAPI', class: 'devicon-fastapi-plain'},
      {name: 'Node.js', class: 'devicon-nodejs-plain'}
    ]
  },
  {
    label: 'Frontend',
    labelRu: 'Фронтенд',
    items: ['React', 'Next.js', 'Tailwind CSS'],
    icons: [
      {name: 'React', class: 'devicon-react-original'},
      {name: 'Next.js', class: 'devicon-nextjs-plain'},
      {name: 'Tailwind', class: 'devicon-tailwindcss-plain'}
    ]
  },
  {
    label: 'Databases',
    labelRu: 'Базы данных',
    items: ['SQLite', 'ChromaDB', 'Google Sheets'],
    icons: [
      {name: 'SQLite', class: 'devicon-sqlite-plain'},
      {name: 'ChromaDB', class: null, letter: 'C'},
      {name: 'Sheets', class: null, letter: 'S'}
    ]
  },
  {
    label: 'AI / ML',
    labelRu: 'ИИ / МО',
    items: ['OpenAI API', 'LangChain', 'GPT-4o-mini', 'ChromaDB'],
    icons: [
      {name: 'OpenAI', class: null, letter: 'AI'},
      {name: 'LangChain', class: null, letter: 'LC'}
    ]
  },
  {
    label: 'Bots & Automation',
    labelRu: 'Боты и автоматизация',
    items: ['Telegram Bot API', 'discord.py', 'n8n', 'BeautifulSoup'],
    icons: [
      {
        name: 'Telegram',
        class: null,
        svgPath:
          'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'
      },
      {
        name: 'Discord',
        class: null,
        svgPath:
          'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.133 18.114a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z'
      },
      {name: 'n8n', class: null, letter: 'n8n'}
    ]
  },
  {
    label: 'DevOps',
    labelRu: 'DevOps',
    items: ['Docker', 'VPS', 'Git', 'GitHub'],
    icons: [
      {name: 'Docker', class: 'devicon-docker-plain'},
      {name: 'Git', class: 'devicon-git-plain'},
      {name: 'GitHub', class: 'devicon-github-plain'}
    ]
  },
  {
    label: 'CMS',
    labelRu: 'CMS',
    items: ['WordPress', 'ACF', 'Gutenberg', 'WooCommerce'],
    icons: [
      {name: 'WordPress', class: 'devicon-wordpress-plain'},
      {name: 'WooCommerce', class: 'devicon-woocommerce-plain'},
      {name: 'Gutenberg', class: null, letter: 'GB'}
    ]
  }
] as const satisfies readonly SkillGroup[];

function SkillCard({group, index, isRu}: {group: SkillGroup; index: number; isRu: boolean}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{scale: 0.96, opacity: 0}}
      whileInView={{scale: 1, opacity: 1}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.4, delay: index * 0.05}}
      className="relative min-h-[80px] overflow-hidden rounded-[8px] bg-[#f0efe9] p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          opacity: hovered ? 0 : 1,
          y: hovered ? -4 : 0
        }}
        transition={{duration: 0.2, ease: 'easeOut'}}
      >
        <div className="mb-2 text-[10px] uppercase tracking-[0.08em] text-[#b5b2a6]">
          {isRu ? group.labelRu : group.label}
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[#5a5850]">
          {group.items.map((item, itemIndex) => (
            <span key={item} className="inline-flex items-center gap-2">
              <span>{item}</span>
              {itemIndex < group.items.length - 1 ? <span className="text-[#c5c2b8]">/</span> : null}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          y: hovered ? 0 : 8
        }}
        transition={{duration: 0.25, delay: 0.05, ease: 'easeOut'}}
        className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-3 px-4 py-3"
      >
        {group.icons.map((icon) => (
          <div key={icon.name} className="flex flex-col items-center">
            {icon.svgPath ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                style={{filter: 'grayscale(1) brightness(0.3)', color: '#0f0f0d'}}
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={icon.svgPath} />
              </svg>
            ) : icon.class ? (
              <i
                className={icon.class}
                style={{fontSize: 22, filter: 'grayscale(1) brightness(0.3)'}}
                aria-hidden="true"
              />
            ) : (
              <div
                style={{
                  width: 22,
                  height: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '7px',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  fontFamily: 'monospace',
                  color: '#0f0f0d',
                  border: '1.5px solid #0f0f0d',
                  borderRadius: '4px',
                  filter: 'grayscale(1) brightness(0.3)',
                  lineHeight: 1
                }}
              >
                {icon.letter}
              </div>
            )}
            <div className="mt-[3px] whitespace-nowrap text-[9px] text-[#b5b2a6]">{icon.name}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const locale = useLocale();
  const isRu = locale === 'ru';

  return (
    <section id="skills" className="section-rule py-20">
      <div className="page-shell">
        <div className="section-label">{isRu ? 'Навыки' : 'Skills'}</div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.label} group={group} index={index} isRu={isRu} />
          ))}
        </div>
      </div>
    </section>
  );
}
