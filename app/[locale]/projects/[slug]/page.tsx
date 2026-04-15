import Image from 'next/image';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {projects} from '@/data/projects';
import {locales, type Locale} from '@/i18n';

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({locale, slug: project.slug})));
}

export default function ProjectPage({
  params
}: {
  params: {slug: string; locale: Locale};
}) {
  const project = projects.find((entry) => entry.slug === params.slug);

  if (!project) {
    notFound();
  }

  const isRu = params.locale === 'ru';
  const d = isRu && project.detailsRu ? project.detailsRu : project.details;
  const openLabel = isRu
    ? project.category === 'wordpress'
      ? 'Открыть сайт ↗'
      : project.stack.includes('n8n')
      ? 'Открыть n8n ↗'
      : project.category === 'discord'
        ? 'Открыть бота ↗'
        : 'Открыть бота ↗'
    : project.category === 'wordpress'
      ? 'Visit Site ↗'
      : project.stack.includes('n8n')
      ? 'Open n8n ↗'
      : project.category === 'discord'
        ? 'Open Bot ↗'
        : 'Open Bot ↗';
  const t = {
    back: isRu ? '← Назад' : '← Back',
    allProjects: isRu ? '← Все проекты' : '← All projects',
    howItWorks: isRu ? 'Как это работает' : 'How it works',
    normalizationChallenge: isRu ? 'Проблема нормализации' : 'The Normalization Challenge',
    sameDevice: isRu ? 'Один девайс. 6 разных объявлений:' : 'Same device. 6 different listings:',
    screenshots: isRu ? 'Скриншоты' : 'Screenshots',
    forUsers: isRu ? 'Для пользователей' : 'For Users',
    platform: isRu ? 'Платформа' : 'Platform',
    features: isRu ? 'Функции' : 'Features',
    projectStructure: isRu ? 'Структура проекта' : 'Project Structure',
    notableDetail: isRu ? 'Важная деталь' : 'Notable detail',
    code: isRu ? 'Код' : 'Code',
    openBot: openLabel
  };

  return (
    <main className="page-shell py-32">
      <Link
        href={`/${params.locale}#projects`}
        className="mb-12 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.08em] text-[#888680] transition-colors hover:text-[#0f0f0d]"
      >
        {t.back}
      </Link>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 text-[11px] uppercase tracking-[0.1em] text-[#b5b2a6]">{project.num}</div>
          <h1 className="text-[32px] font-medium leading-tight text-[#0f0f0d] md:text-[48px]">{project.title}</h1>
          {project.description ? (
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#888680]">
              {isRu ? project.descriptionRu : project.description}
            </p>
          ) : null}
        </div>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 shrink-0 self-start rounded-[4px] border border-[#0f0f0d] px-5 py-2.5 text-[13px] text-[#0f0f0d] transition-colors duration-200 hover:bg-[#0f0f0d] hover:text-[#f7f6f2]"
          >
            {t.openBot}
          </a>
        ) : null}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[#e0ddd6] px-3 py-1 text-[11px] text-[#888680]"
          >
            {tech}
          </span>
        ))}
      </div>

      {d ? (
        <>
          <div className="my-12 border-t border-[#e8e6df]" />

          <p className="text-[20px] font-medium italic text-[#0f0f0d] md:text-[26px]">"{d.hook}"</p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {d.metrics.map((m) => (
              <div key={m.label} className="rounded-[8px] bg-[#f0efe9] p-5">
                <div className="text-[28px] font-semibold text-[#0f0f0d]">{m.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.06em] text-[#b5b2a6]">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="mb-4 text-[11px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t.howItWorks}</div>
            <div className="flex flex-wrap items-center gap-2">
              {d.pipeline.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-[6px] bg-[#f0efe9] px-3 py-2 text-[13px] text-[#0f0f0d]">{step}</span>
                  {i < d.pipeline.length - 1 ? <span className="text-[#c5c2b8]">→</span> : null}
                </div>
              ))}
            </div>
          </div>

          {d.architecture ? (
            <div className="mt-12">
              <div className="mb-4 text-[11px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t.projectStructure}</div>
              <div className="space-y-3 rounded-[10px] bg-[#f0efe9] p-6">
                {d.architecture.map((item) => (
                  <div key={item.path} className="flex flex-col gap-1 md:flex-row md:gap-4">
                    <code className="w-48 shrink-0 font-mono text-[12px] text-[#0f0f0d]">{item.path}</code>
                    <span className="text-[13px] text-[#888680]">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {d.highlight ? (
            <div className="mt-6 rounded-[10px] border border-[#e0ddd6] p-5">
              <div className="mb-1 text-[11px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t.notableDetail}</div>
              <p className="text-[13px] leading-relaxed text-[#5a5850]">{d.highlight}</p>
            </div>
          ) : null}

          {d.codeSnippet ? (
            <div className="mt-12">
              <div className="mb-4 text-[11px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t.code}</div>
              <div className="overflow-x-auto rounded-[10px] bg-[#1a1a18] p-6">
                <pre className="text-[12px] leading-relaxed text-[#c8c5bb]">
                  <code>{d.codeSnippet}</code>
                </pre>
              </div>
            </div>
          ) : null}

          {d.normalizationExamples ? (
            <div className="mt-12">
              <div className="mb-4 text-[11px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t.normalizationChallenge}</div>
              <div className="rounded-[10px] bg-[#f0efe9] p-6">
                <div className="mb-4 text-[13px] text-[#888680]">{t.sameDevice}</div>
                <div className="flex flex-wrap gap-2">
                  {d.normalizationExamples.map((ex) => (
                    <code
                      key={ex}
                      className="rounded-[4px] bg-[#e8e6df] px-2 py-1 font-mono text-[12px] text-[#0f0f0d]"
                    >
                      {ex}
                    </code>
                  ))}
                </div>
                {d.normalizationNote ? (
                  <p className="mt-5 text-[13px] leading-relaxed text-[#888680]">{d.normalizationNote}</p>
                ) : null}
              </div>
            </div>
          ) : null}

          {d.screenshots && d.screenshots.length > 0 ? (
            <div className="mt-12">
              <div className="mb-4 text-[11px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t.screenshots}</div>
              <div className={`grid gap-4 ${d.screenshots.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                {d.screenshots.map((name) => (
                  <div key={name} className="overflow-hidden rounded-[10px] bg-[#f0efe9]">
                    <Image
                      src={`/projects/${project.slug}/${name}.png`}
                      alt={name}
                      width={400}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {d.features && !d.featuresUser ? (
            <div className="mt-12 rounded-[10px] bg-[#f0efe9] p-6">
              <div className="mb-4 text-[11px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t.features}</div>
              <ul className="space-y-2">
                {d.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-[#5a5850]">
                    <span className="mt-[2px] text-[#b5b2a6]">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {d.featuresUser && d.featuresPlatform ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-[10px] bg-[#f0efe9] p-6">
                <div className="mb-4 text-[11px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t.forUsers}</div>
                <ul className="space-y-2">
                  {d.featuresUser.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[#5a5850]">
                      <span className="mt-[2px] text-[#b5b2a6]">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[10px] bg-[#f0efe9] p-6">
                <div className="mb-4 text-[11px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t.platform}</div>
                <ul className="space-y-2">
                  {d.featuresPlatform.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[#5a5850]">
                      <span className="mt-[2px] text-[#b5b2a6]">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <div className="mt-12 rounded-[10px] bg-[#f0efe9] p-6 text-[13px] leading-relaxed text-[#888680]">
          {isRu
            ? 'Подробное описание для этого проекта скоро появится.'
            : 'A detailed case study for this project is coming soon.'}
        </div>
      )}

      <div className="mt-16 border-t border-[#e8e6df] pt-8">
        <Link
          href={`/${params.locale}#projects`}
          className="text-[12px] uppercase tracking-[0.08em] text-[#888680] transition-colors hover:text-[#0f0f0d]"
        >
          {t.allProjects}
        </Link>
      </div>
    </main>
  );
}
