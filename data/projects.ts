export type ProjectCategory = 'telegram' | 'discord' | 'ai' | 'integrations' | 'wordpress';

export type Project = {
  slug: string;
  title: string;
  description: string;
  descriptionRu: string;
  stack: string[];
  github: string;
  category: ProjectCategory;
  num: string;
  url?: string;
};

export const categoryOrder: Array<ProjectCategory | 'all'> = [
  'all',
  'telegram',
  'discord',
  'ai',
  'integrations',
  'wordpress'
];

export const projects: Project[] = [
  {
    slug: 'sprubot',
    title: 'SpruBot - ASIC Price Scraper',
    description: 'Telegram bot that scrapes ASIC miner price lists, normalizes data and manages a structured database',
    descriptionRu: 'Telegram-бот для скрапинга прайсов ASIC-майнеров, нормализации данных и ведения структурированной базы',
    stack: ['Python', 'BeautifulSoup', 'SQLite', 'Telegram Bot API', 'Docker'],
    github: 'https://github.com/VaalaramaDev',
    category: 'telegram',
    num: '01'
  },
  {
    slug: 'tg-todo-bot',
    title: 'Telegram Todo Bot',
    description: 'Task management bot with reminders, inline keyboards and SQLite storage',
    descriptionRu: 'Бот для управления задачами с напоминаниями, инлайн-клавиатурами и хранилищем SQLite',
    stack: ['Python', 'python-telegram-bot', 'SQLite', 'APScheduler', 'Docker'],
    github: 'https://github.com/VaalaramaDev/tg-todo-bot',
    category: 'telegram',
    num: '02'
  },
  {
    slug: 'tg-currency-bot',
    title: 'Telegram Currency Bot',
    description: 'Real-time currency monitoring with rate alerts and SQLite cache',
    descriptionRu: 'Мониторинг курсов валют в реальном времени с алертами и кешем SQLite',
    stack: ['Python', 'REST API', 'SQLite', 'APScheduler', 'Docker'],
    github: 'https://github.com/VaalaramaDev/tg-currency-bot',
    category: 'telegram',
    num: '03'
  },
  {
    slug: 'discord-mod-bot',
    title: 'Discord Moderation Bot',
    description: 'Auto-moderation with slash commands, warnings, auto-ban on 3 warns and audit log channel',
    descriptionRu: 'Автомодерация со слэш-командами, предупреждениями, автобаном на 3-м варне и каналом аудита',
    stack: ['discord.py', 'SQLite', 'Docker'],
    github: 'https://github.com/VaalaramaDev/discord-mod-bot',
    category: 'discord',
    num: '04'
  },
  {
    slug: 'discord-music-bot',
    title: 'Discord Music Bot',
    description: 'Music playback from SoundCloud with queue management, FFmpeg and PyNaCl',
    descriptionRu: 'Воспроизведение музыки из SoundCloud с управлением очередью, FFmpeg и PyNaCl',
    stack: ['discord.py', 'yt-dlp', 'FFmpeg', 'Docker'],
    github: 'https://github.com/VaalaramaDev/discord-music-bot',
    category: 'discord',
    num: '05'
  },
  {
    slug: 'n8n-email-assistant',
    title: 'AI Email Assistant',
    description: 'n8n workflow that classifies emails via GPT-4o-mini and sends draft replies to Telegram for approval',
    descriptionRu: 'Воркфлоу n8n, классифицирующий письма через GPT-4o-mini и отправляющий черновики ответов в Telegram на согласование',
    stack: ['n8n', 'OpenAI', 'Gmail API', 'Telegram', 'Docker'],
    github: 'https://github.com/VaalaramaDev/n8n-email-assistant',
    category: 'ai',
    num: '06'
  },
  {
    slug: 'rag-knowledge-base',
    title: 'RAG Knowledge Base',
    description: 'Telegram bot that answers questions about uploaded PDF documents using LangChain and ChromaDB',
    descriptionRu: 'Telegram-бот, отвечающий на вопросы по загруженным PDF-документам с помощью LangChain и ChromaDB',
    stack: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'Docker'],
    github: 'https://github.com/VaalaramaDev/rag-knowledge-base',
    category: 'ai',
    num: '07'
  },
  {
    slug: 'ai-content-plan',
    title: 'AI Content Plan Generator',
    description: 'Streamlit app that generates structured blog content plans via GPT-4o-mini with Markdown export',
    descriptionRu: 'Streamlit-приложение для генерации структурированных контент-планов блога через GPT-4o-mini с экспортом в Markdown',
    stack: ['Python', 'Streamlit', 'OpenAI', 'Docker'],
    github: 'https://github.com/VaalaramaDev/ai-content-plan',
    category: 'ai',
    num: '08'
  },
  {
    slug: 'hubspot-sheets-sync',
    title: 'HubSpot - Google Sheets Sync',
    description: 'Webhook service that mirrors HubSpot contacts to Google Sheets in real time with full CRUD',
    descriptionRu: 'Webhook-сервис синхронизации контактов HubSpot с Google Sheets в реальном времени с полным CRUD',
    stack: ['Python', 'FastAPI', 'gspread', 'HubSpot API', 'Docker'],
    github: 'https://github.com/VaalaramaDev/hubspot-sheets-sync',
    category: 'integrations',
    num: '09'
  },
  {
    slug: 'mastersatoshi',
    title: 'MasterSatoshi - WordPress ASIC seller site',
    description: 'Full WordPress site for a crypto mining agency with ACF, custom post types and AJAX filtering',
    descriptionRu: 'Полноценный WordPress-сайт для агентства по крипто-майнингу с ACF, с автоматической генерацией СЕО-контента и AJAX-фильтрацией',
    stack: ['WordPress', 'ACF', 'AJAX', 'PHP', 'MySQL'],
    github: 'https://github.com/VaalaramaDev',
    category: 'wordpress',
    num: '10',
    url: 'https://mastersatoshi.ru'
  },
  {
    slug: 'wp-price-manager',
    title: 'WP Plugin - Quick Price Manager',
    description: 'WordPress plugin for bulk price editing via admin panel with Telegram bot notifications on changes',
    descriptionRu: 'Плагин WordPress для массового редактирования цен через панель администратора с уведомлениями через Telegram-бот',
    stack: ['WordPress', 'PHP', 'Telegram Bot API', 'MySQL'],
    github: 'https://github.com/VaalaramaDev',
    category: 'wordpress',
    num: '11'
  },
  {
    slug: 'wp-ai-seo',
    title: 'WP Plugin - AI SEO Generator',
    description: 'WordPress plugin that auto-generates SEO meta titles and descriptions for posts using OpenAI',
    descriptionRu: 'Плагин WordPress для автоматической генерации SEO-заголовков и описаний к записям с помощью OpenAI',
    stack: ['WordPress', 'PHP', 'OpenAI API'],
    github: 'https://github.com/VaalaramaDev',
    category: 'wordpress',
    num: '12'
  },
  {
    slug: 'wp-hot-offers',
    title: 'WP Block - Hot Offers',
    description: 'Gutenberg block that pulls latest posts from a Telegram channel and displays them as hot offers',
    descriptionRu: 'Блок Gutenberg, подгружающий последние посты из Telegram-канала и отображающий их как горячие предложения',
    stack: ['WordPress', 'Gutenberg', 'React', 'Telegram API', 'PHP'],
    github: 'https://github.com/VaalaramaDev',
    category: 'wordpress',
    num: '13'
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(category: ProjectCategory, slug: string) {
  return projects.filter((project) => project.category === category && project.slug !== slug).slice(0, 2);
}
