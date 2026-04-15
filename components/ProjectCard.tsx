'use client';

import Link from 'next/link';
import {motion} from 'framer-motion';
import type {Project} from '@/data/projects';
import type {Locale} from '@/i18n';

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  index: number;
};

function getTagTone(tag: string) {
  const value = tag.toLowerCase();

  if (value.includes('openai') || value.includes('langchain') || value.includes('rag') || value.includes('ai')) {
    return 'bg-[#eeedfa] text-[#5a4e8a]';
  }

  if (value.includes('telegram') || value.includes('discord') || value.includes('bot')) {
    return 'bg-[#eef4ee] text-[#3a6a5a]';
  }

  if (value.includes('api') || value.includes('webhook') || value.includes('google') || value.includes('n8n')) {
    return 'bg-[#f5ede5] text-[#7a5030]';
  }

  return 'bg-[#eeedea] text-[#7a7870]';
}

export default function ProjectCard({project, locale, index}: ProjectCardProps) {
  return (
    <motion.div
      initial={{y: 200, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      viewport={{once: true, amount: 0.15}}
      transition={{duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1]}}
    >
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="group grid gap-5 border-b border-[#dddbd4] px-0 py-5 transition-colors duration-200 hover:bg-[rgba(15,15,13,0.02)] md:grid-cols-[48px_1fr_auto] md:items-start md:gap-6"
      >
        <div className="font-mono text-[11px] text-[#c5c2b8]">#{project.num || String(index + 1).padStart(2, '0')}</div>
        <div>
          <div className="text-[15px] font-medium tracking-[-0.01em] text-[#0f0f0d]">{project.title}</div>
          <div className="mt-1 text-[12px] text-[#888680]">{locale === 'ru' ? project.descriptionRu : project.description}</div>
          <div className="mt-2.5 flex flex-wrap gap-1">
            {project.stack.map((tag) => (
              <span key={tag} className={`rounded-[2px] px-[7px] py-[2px] text-[10px] ${getTagTone(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-[14px] text-[#c5c2b8] transition-colors duration-200 group-hover:text-[#0f0f0d]">↗</div>
      </Link>
    </motion.div>
  );
}
