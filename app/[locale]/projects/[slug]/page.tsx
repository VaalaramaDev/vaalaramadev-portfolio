import Link from 'next/link';
import {notFound} from 'next/navigation';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import PageReveal from '@/components/PageReveal';
import ProjectCard from '@/components/ProjectCard';
import {getProjectBySlug, getRelatedProjects, projects} from '@/data/projects';
import {locales, type Locale} from '@/i18n';

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({locale, slug: project.slug})));
}

export default async function ProjectDetailPage({
  params
}: {
  params: {locale: Locale; slug: string};
}) {
  const {locale, slug} = params;
  unstable_setRequestLocale(locale);

  const t = await getTranslations('projects');
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.category, project.slug);
  const projectIndex = projects.findIndex((entry) => entry.slug === project.slug);

  return (
    <PageReveal>
      <main className="mx-auto w-full max-w-[720px] px-8 py-[120px]">
        <Link
          href={`/${locale}/#projects`}
          className="mb-10 inline-flex text-[12px] text-[#888680]"
        >
          ← {t('back')}
        </Link>

        <div className="font-mono text-[11px] text-[#c5c2b8]">#{project.num || String(projectIndex + 1).padStart(2, '0')}</div>
        <h1 className="mt-4 text-[48px] font-medium tracking-[-0.03em] text-[#0f0f0d]">{project.title}</h1>
        <p className="mt-4 text-[15px] leading-[1.7] text-[#888680]">
          {locale === 'ru' ? project.descriptionRu : project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((tag) => (
            <span key={tag} className="rounded-[2px] bg-[#eeedea] px-2 py-1 text-[10px] text-[#7a7870]">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-[4px] bg-[#0f0f0d] px-5 py-2.5 text-[13px] text-[#f7f6f2]"
        >
          GitHub
        </a>

        <div className="my-10 border-t border-[#dddbd4]" />

        <div className="flex h-[320px] items-center justify-center rounded-[8px] bg-[#f0efe9] text-[13px] text-[#c5c2b8]">
          {t('screenshots')}
        </div>

        {relatedProjects.length > 0 ? (
          <section className="mt-10">
            <h3 className="text-[20px] font-medium tracking-[-0.02em] text-[#0f0f0d]">{t('related')}</h3>
            <div className="mt-4 border-t border-[#dddbd4]">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard
                  key={relatedProject.slug}
                  project={relatedProject}
                  locale={locale}
                  index={projects.findIndex((entry) => entry.slug === relatedProject.slug)}
                />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </PageReveal>
  );
}
