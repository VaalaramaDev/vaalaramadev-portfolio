'use client';

import {useEffect, useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import ProjectCard from '@/components/ProjectCard';
import {categoryOrder, projects} from '@/data/projects';
import type {Locale} from '@/i18n';

type ProjectsProps = {
  locale: Locale;
};

export default function Projects({locale}: ProjectsProps) {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState<(typeof categoryOrder)[number]>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 5);

  const labels = {
    all: t('filter_all'),
    telegram: t('filter_telegram'),
    discord: t('filter_discord'),
    ai: t('filter_ai'),
    integrations: t('filter_integrations'),
    wordpress: t('filter_wordpress')
  };

  return (
    <section id="projects" className="section-rule py-20">
      <div className="page-shell">
        <div className="flex items-end justify-between">
          <div className="section-label">{t('title')}</div>
          <div className="text-[11px] uppercase tracking-[0.1em] text-[#c5c2b8]">
            {projects.length} total
          </div>
        </div>

        <div className="mt-6 mb-6 flex flex-wrap gap-2">
          {categoryOrder.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-3 py-2 text-[12px] transition-colors duration-200 ${
                activeFilter === category
                  ? 'bg-[#0f0f0d] text-[#f7f6f2]'
                  : 'border border-[#dddbd4] text-[#888680]'
              }`}
            >
              {labels[category]}
            </button>
          ))}
        </div>

        <div className="border-t border-[#dddbd4]">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} locale={locale} index={index} />
          ))}
        </div>

        {filteredProjects.length > 5 ? (
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="w-full border-y border-[#dddbd4] bg-transparent px-4 py-[14px] text-center text-[12px] text-[#888680] transition-all duration-200 hover:bg-[rgba(15,15,13,0.02)] hover:text-[#0f0f0d]"
          >
            {showAll
              ? locale === 'ru'
                ? 'Свернуть'
                : 'Show less'
              : locale === 'ru'
                ? `Показать ещё (${filteredProjects.length - 5})`
                : `Show more (${filteredProjects.length - 5} more)`}
          </button>
        ) : null}
      </div>
    </section>
  );
}
