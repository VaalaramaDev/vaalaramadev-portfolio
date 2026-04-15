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
  screenshots?: string[];
  details?: {
    hook: string;
    metrics: Array<{value: string; label: string}>;
    screenshots?: string[];
    pipeline: string[];
    normalizationExamples?: string[];
    featuresUser?: string[];
    featuresPlatform?: string[];
    features?: string[];
    architecture?: Array<{path: string; desc: string}>;
    normalizationNote?: string;
    highlight?: string;
    codeSnippet?: string;
    codeSnippetLang?: string;
  };
  detailsRu?: {
    hook: string;
    metrics: Array<{value: string; label: string}>;
    screenshots?: string[];
    pipeline: string[];
    normalizationExamples?: string[];
    featuresUser?: string[];
    featuresPlatform?: string[];
    features?: string[];
    architecture?: Array<{path: string; desc: string}>;
    normalizationNote?: string;
    highlight?: string;
    codeSnippet?: string;
    codeSnippetLang?: string;
  };
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
    num: '01',
    title: 'SpruBot - ASIC Mining Market',
    category: 'telegram',
    stack: [
      'Python',
      'python-telegram-bot',
      'BeautifulSoup',
      'SQLite',
      'APScheduler',
      'CryptoCloud API',
      'Docker'
    ],
    url: 'https://t.me/Sprut_mining_bot',
    description:
      'Unified marketplace aggregating ASIC hardware offers from 20+ Telegram seller channels into a single searchable database.',
    descriptionRu:
      'Единый маркетплейс, агрегирующий предложения по ASIC-оборудованию из более чем 20 Telegram-каналов продавцов в единую поисковую базу данных.',
    github: 'https://github.com/VaalaramaDev',
    details: {
      hook: 'Same device. 20 different names. One normalizer to rule them all.',
      metrics: [
        {value: '3+', label: 'months uptime'},
        {value: '2000+', label: 'offers / month'},
        {value: '20+', label: 'sources'},
        {value: '100+', label: 'users'}
      ],
      normalizationExamples: [
        'Antminer S19 Pro',
        'S19Pro 110t',
        's19 про 110',
        'АнтМайнер с19про',
        'S19PRO(110TH)',
        'antminer s19pro 110th/s'
      ],
      screenshots: ['main-menu', 'equipment-picker', 'roi-calculator'],
      pipeline: ['20+ TG Channels', 'Scraper', 'Normalizer', 'SQLite DB', 'Client Bot', 'User'],
      featuresUser: [
        'Search & filter across unified database',
        'Price alerts by model and parameters',
        'ROI calculator for 15+ manufacturers',
        'Smart equipment picker by budget or efficiency',
        'Referral program'
      ],
      featuresPlatform: [
        '3 subscription tiers (Free + 2 paid)',
        'Crypto payments via CryptoCloud',
        'Auto subscription management',
        'Per-source normalization pipelines'
      ],
      normalizationNote:
        'Multi-layer pipeline: regex + token matching + manufacturer-specific parsers. Prices normalized to USDT. Condition (new/used) and location extracted automatically. ~95% accuracy across all sources.'
    },
    detailsRu: {
      hook: 'Один девайс. 20 разных названий. Один нормализатор, чтобы управлять всеми.',
      metrics: [
        {value: '3+', label: 'месяца без сбоев'},
        {value: '2000+', label: 'офферов в месяц'},
        {value: '20+', label: 'источников'},
        {value: '100+', label: 'пользователей'}
      ],
      normalizationExamples: [
        'Antminer S19 Pro',
        'S19Pro 110t',
        's19 про 110',
        'АнтМайнер с19про',
        'S19PRO(110TH)',
        'antminer s19pro 110th/s'
      ],
      screenshots: ['main-menu', 'equipment-picker', 'roi-calculator'],
      pipeline: ['20+ TG каналов', 'Сбор', 'Нормализация', 'SQLite БД', 'Бот', 'Пользователь'],
      featuresUser: [
        'Поиск и фильтрация по единой базе данных',
        'Уведомления о ценах по модели и параметрам',
        'Калькулятор доходности для 15+ производителей',
        'Умный подбор оборудования по бюджету или эффективности',
        'Реферальная программа'
      ],
      featuresPlatform: [
        '3 уровня подписки (Free + 2 платных)',
        'Оплата криптой через CryptoCloud',
        'Автоматическое управление подписками',
        'Индивидуальные пайплайны нормализации для каждого источника'
      ],
      normalizationNote:
        'Многоуровневый пайплайн: regex + токен-матчинг + парсеры под конкретных продавцов. Цены нормализуются в USDT. Состояние (новый/б/у) и локация извлекаются автоматически. Точность ~95% по всем источникам.'
    }
  },
  {
    slug: 'tg-todo-bot',
    title: 'Telegram Todo Bot',
    description:
      'A personal async task manager bot for Telegram with daily reminders, inline keyboard UI, and per-user data isolation.',
    descriptionRu:
      'Персональный асинхронный Telegram-бот для управления задачами с ежедневными напоминаниями, интерфейсом на инлайн-кнопках и изоляцией данных по пользователям.',
    stack: ['Python', 'python-telegram-bot', 'SQLite', 'APScheduler', 'Docker'],
    github: 'https://github.com/VaalaramaDev/tg-todo-bot',
    category: 'telegram',
    num: '02',
    url: undefined,
    details: {
      hook: 'Built to practice proper project structure - not just to make it work.',
      metrics: [
        {value: 'async', label: 'python-telegram-bot 20.x'},
        {value: '100%', label: 'per-user isolation'},
        {value: 'SQLite', label: 'reminders persist across restarts'},
        {value: 'Docker', label: 'one-command deploy'}
      ],
      screenshots: ['main-menu', 'task-list', 'add-task'],
      pipeline: ['User', 'Inline Keyboard', 'Handlers', 'Database', 'APScheduler', 'Reminder'],
      features: [
        'Add, view, complete and delete tasks',
        'Daily reminders at a custom time (UTC)',
        'Inline keyboard UI - no commands to memorize',
        'Completion progress bar in /stats',
        'Per-user data isolation - each user sees only their own tasks',
        'Reminder jobs restored from SQLite on bot restart'
      ],
      architecture: [
        {path: 'bot/handlers/', desc: 'start, tasks, reminders, stats, callbacks - one file per concern'},
        {path: 'bot/database/', desc: 'connection.py + queries.py - all SQL in one place'},
        {path: 'bot/keyboards.py', desc: 'all InlineKeyboardMarkup definitions'},
        {path: 'bot/scheduler.py', desc: 'APScheduler jobs + restore on startup'},
        {path: 'main.py', desc: 'clean entry point'}
      ],
      highlight:
        'Reminder jobs are persisted in SQLite and automatically restored when the bot restarts - no reminders are lost on redeploy.'
    },
    detailsRu: {
      hook: 'Сделан для отработки правильной архитектуры проекта - а не просто чтобы работало.',
      metrics: [
        {value: 'async', label: 'python-telegram-bot 20.x'},
        {value: '100%', label: 'изоляция данных по пользователям'},
        {value: 'SQLite', label: 'напоминания сохраняются при перезапуске'},
        {value: 'Docker', label: 'деплой одной командой'}
      ],
      screenshots: ['main-menu', 'task-list', 'add-task'],
      pipeline: ['Пользователь', 'Inline клавиатура', 'Хэндлеры', 'База данных', 'APScheduler', 'Напоминание'],
      features: [
        'Добавление, просмотр, завершение и удаление задач',
        'Ежедневные напоминания в заданное время (UTC)',
        'Inline-клавиатура - не нужно запоминать команды',
        'Прогресс-бар выполнения в /stats',
        'Изоляция данных - каждый пользователь видит только свои задачи',
        'Джобы напоминаний восстанавливаются из SQLite при перезапуске бота'
      ],
      architecture: [
        {path: 'bot/handlers/', desc: 'start, tasks, reminders, stats, callbacks - по одному файлу на каждую зону'},
        {path: 'bot/database/', desc: 'connection.py + queries.py - весь SQL в одном месте'},
        {path: 'bot/keyboards.py', desc: 'все определения InlineKeyboardMarkup'},
        {path: 'bot/scheduler.py', desc: 'джобы APScheduler + восстановление при старте'},
        {path: 'main.py', desc: 'чистая точка входа'}
      ],
      highlight:
        'Джобы напоминаний сохраняются в SQLite и автоматически восстанавливаются при перезапуске бота - ни одно напоминание не теряется при редеплое.'
    }
  },
  {
    slug: 'tg-currency-bot',
    title: 'Telegram Currency Bot',
    description:
      'Exchange rate monitor with threshold-based alerts. Tracks USD/AMD, EUR/AMD, USD/EUR, USD/RUB and more - notifies only when rates move meaningfully.',
    descriptionRu:
      'Мониторинг обменных курсов с алертами по порогу. Отслеживает USD/AMD, EUR/AMD, USD/EUR, USD/RUB и другие пары - уведомляет только при действительно значимом движении курса.',
    stack: ['Python', 'REST API', 'SQLite', 'APScheduler', 'Docker'],
    github: 'https://github.com/VaalaramaDev/tg-currency-bot',
    category: 'telegram',
    num: '03',
    screenshots: ['main-menu', 'rates', 'subscriptions'],
    details: {
      hook: 'Not every tick. Only when it matters.',
      metrics: [
        {value: '5+', label: 'currency pairs'},
        {value: '15 min', label: 'check interval'},
        {value: 'threshold', label: 'alert only on meaningful change'},
        {value: 'SQLite', label: 'subscriptions persist across restarts'}
      ],
      screenshots: ['main-menu', 'rates', 'subscriptions'],
      pipeline: ['REST API', 'Rate Fetcher', 'APScheduler', 'Threshold Check', 'SQLite', 'Alert → User'],
      features: [
        'Live exchange rates: USD/AMD, EUR/AMD, USD/EUR, USD/RUB, EUR/RUB',
        'Subscribe to any pair with a custom % threshold',
        'Alert fires only when rate moves beyond the threshold - no noise',
        'Checked every 15 minutes via APScheduler',
        'Per-user subscriptions with inline keyboard management',
        'Subscriptions persist in SQLite across bot restarts'
      ],
      highlight:
        'Threshold-based alerts filter out noise - a user sets e.g. 0.2% on USD/RUB and only gets notified when the rate actually moves, not on every scheduler tick.'
    },
    detailsRu: {
      hook: 'Не каждое изменение. Только когда это важно.',
      metrics: [
        {value: '5+', label: 'валютных пар'},
        {value: '15 мин', label: 'интервал проверки'},
        {value: 'порог', label: 'алерт только при значимом изменении'},
        {value: 'SQLite', label: 'подписки сохраняются при перезапуске'}
      ],
      screenshots: ['main-menu', 'rates', 'subscriptions'],
      pipeline: ['REST API', 'Получение курсов', 'APScheduler', 'Проверка порога', 'SQLite', 'Алерт → Пользователь'],
      features: [
        'Актуальные курсы: USD/AMD, EUR/AMD, USD/EUR, USD/RUB, EUR/RUB',
        'Подписка на любую пару с настраиваемым порогом в %',
        'Алерт срабатывает только при превышении порога - никакого шума',
        'Проверка каждые 15 минут через APScheduler',
        'Управление подписками через inline-клавиатуру',
        'Подписки сохраняются в SQLite при перезапуске бота'
      ],
      highlight:
        'Алерты на основе порога отсекают лишний шум - пользователь задаёт, например, 0.2% на USD/RUB и получает уведомление только при реальном движении курса, а не при каждом тике планировщика.'
    }
  },
  {
    slug: 'discord-mod-bot',
    title: 'Discord Moderation Bot',
    description:
      'Full-featured Discord moderation bot with slash commands, warning system, auto-ban on 3rd warning, and audit logging to a dedicated channel.',
    descriptionRu:
      'Полноценный Discord-бот для модерации со слэш-командами, системой предупреждений, автобаном на третьем варне и аудит-логами в отдельный канал.',
    stack: ['discord.py', 'SQLite', 'Docker'],
    github: 'https://github.com/VaalaramaDev/discord-mod-bot',
    category: 'discord',
    num: '04',
    screenshots: ['commands'],
    details: {
      hook: 'Three warnings. Then automatic ban. No manual follow-up needed.',
      metrics: [
        {value: '8', label: 'slash commands'},
        {value: 'auto-ban', label: 'on 3rd warning'},
        {value: 'SQLite', label: 'warnings persist across restarts'},
        {value: 'embed', label: 'rich log for every action'}
      ],
      screenshots: ['commands'],
      pipeline: ['Slash Command', 'Permission Check', 'Target Guard', 'SQLite', 'Auto-ban Check', 'Log Channel'],
      features: [
        '/ban, /kick, /warn, /timeout with role-based permission checks',
        'Warning system - accumulated warnings stored per user per guild',
        'Auto-ban triggers automatically on the 3rd warning',
        'Cannot moderate admins or users with higher roles (protected targets)',
        'All actions logged to a configurable mod-log channel via rich Embeds',
        '/modlogs shows last 10 moderation actions',
        'Per-guild settings - each server has its own log channel'
      ],
      codeSnippet: `@app_commands.command(name="warn")
async def warn(self, interaction, user: discord.Member, reason: str):
    # Guard: cannot warn admins or higher roles
    if user.top_role >= interaction.user.top_role:
        return await interaction.response.send_message(
            "Cannot moderate this user.", ephemeral=True
        )

    add_warning(guild_id, user.id, mod_id, reason)
    count = get_warning_count(guild_id, user.id)

    # Auto-ban on 3rd warning
    if count >= 3:
        await user.ban(reason="Auto-ban: 3 warnings reached")
        log_action(guild_id, "AUTO-BAN", mod_id, user.id, reason)
    
    await log_to_channel(guild_id, "WARN", user, reason, count)`,
      codeSnippetLang: 'python',
      highlight:
        'Every command checks both Discord permissions and role hierarchy - a moderator cannot warn, kick or ban users with equal or higher roles, preventing privilege escalation.',
      architecture: [
        {path: 'bot/cogs/moderation.py', desc: '/ban, /kick, /warn, /timeout - moderation actions'},
        {path: 'bot/cogs/warnings.py', desc: '/warnings, /clearwarns - warning management'},
        {path: 'bot/cogs/logging.py', desc: 'auto-log every action to the mod channel'},
        {path: 'bot/database/queries.py', desc: 'all SQL - warnings, mod_logs, guild_settings'},
        {path: 'bot/utils.py', desc: 'embed helpers and permission checks'}
      ]
    },
    detailsRu: {
      hook: 'Три варна. Затем автоматический бан. Без ручного вмешательства.',
      metrics: [
        {value: '8', label: 'слэш-команд'},
        {value: 'авто-бан', label: 'на 3-м предупреждении'},
        {value: 'SQLite', label: 'варны сохраняются при перезапуске'},
        {value: 'embed', label: 'rich-лог на каждое действие'}
      ],
      screenshots: ['commands'],
      pipeline: ['Слэш-команда', 'Проверка прав', 'Защита цели', 'SQLite', 'Проверка авто-бана', 'Лог-канал'],
      features: [
        '/ban, /kick, /warn, /timeout с проверкой прав по ролям',
        'Система предупреждений - варны хранятся по пользователю и серверу',
        'Авто-бан срабатывает автоматически на 3-м предупреждении',
        'Нельзя модерировать администраторов и пользователей с более высокой ролью',
        'Все действия логируются в настраиваемый канал через rich Embeds',
        '/modlogs показывает последние 10 действий модераторов',
        'Настройки на уровне сервера - у каждого сервера свой лог-канал'
      ],
      codeSnippet: `@app_commands.command(name="warn")
async def warn(self, interaction, user: discord.Member, reason: str):
    # Защита: нельзя варнить тех, кто выше или равен по роли
    if user.top_role >= interaction.user.top_role:
        return await interaction.response.send_message(
            "Нельзя модерировать этого пользователя.", ephemeral=True
        )

    add_warning(guild_id, user.id, mod_id, reason)
    count = get_warning_count(guild_id, user.id)

    # Авто-бан на 3-м варне
    if count >= 3:
        await user.ban(reason="Авто-бан: получено 3 предупреждения")
        log_action(guild_id, "AUTO-BAN", mod_id, user.id, reason)
    
    await log_to_channel(guild_id, "WARN", user, reason, count)`,
      codeSnippetLang: 'python',
      highlight:
        'Каждая команда проверяет как права Discord, так и иерархию ролей - модератор не может варнить, кикать или банить пользователей с равной или более высокой ролью.',
      architecture: [
        {path: 'bot/cogs/moderation.py', desc: '/ban, /kick, /warn, /timeout - действия модерации'},
        {path: 'bot/cogs/warnings.py', desc: '/warnings, /clearwarns - управление предупреждениями'},
        {path: 'bot/cogs/logging.py', desc: 'авто-лог каждого действия в мод-канал'},
        {path: 'bot/database/queries.py', desc: 'весь SQL - warnings, mod_logs, guild_settings'},
        {path: 'bot/utils.py', desc: 'embed-хелперы и проверки прав'}
      ]
    }
  },
  {
    slug: 'discord-music-bot',
    title: 'Discord Music Bot',
    description:
      'Plays audio from SoundCloud in Discord voice channels with queue management, slash commands, and zero disk usage - pure streaming via FFmpeg.',
    descriptionRu:
      'Воспроизводит аудио из SoundCloud в голосовых каналах Discord с управлением очередью, слэш-командами и нулевым использованием диска - только стриминг через FFmpeg.',
    stack: ['discord.py', 'yt-dlp', 'FFmpeg', 'Docker'],
    github: 'https://github.com/VaalaramaDev/discord-music-bot',
    category: 'discord',
    num: '05',
    screenshots: ['commands'],
    details: {
      hook: 'YouTube blocked the VPS. SoundCloud did not.',
      metrics: [
        {value: '8', label: 'slash commands'},
        {value: 'zero', label: 'files stored on disk'},
        {value: 'per-guild', label: 'independent queue per server'},
        {value: 'stream', label: 'URLs resolved on-the-fly'}
      ],
      screenshots: ['commands'],
      pipeline: ['Search Query', 'yt-dlp → SoundCloud', 'Stream URL', 'FFmpeg', 'Discord Voice', 'Queue'],
      features: [
        'Play audio from SoundCloud by search query - no URL needed',
        'Per-guild queue with position tracking - each server is independent',
        'FFmpeg streams audio directly - no files written to disk',
        'Stream URLs resolved on-the-fly via yt-dlp on every play',
        'Rich Embeds with track info and thumbnails',
        '/queue, /nowplaying, /skip, /pause, /resume, /leave'
      ],
      codeSnippet: `# extractor.py - resolve SoundCloud stream on-the-fly
YDL_OPTIONS = {
    "format": "bestaudio/best",
    "quiet": True,
    "default_search": "scsearch",  # SoundCloud search
    "noplaylist": True,
}

async def extract(query: str) -> Track:
    loop = asyncio.get_event_loop()
    data = await loop.run_in_executor(
        None,
        lambda: yt_dlp.YoutubeDL(YDL_OPTIONS).extract_info(query, download=False)
    )
    entry = data["entries"][0] if "entries" in data else data
    return Track(
        title=entry["title"],
        url=entry["url"],       # direct stream URL - expires in ~6h
        thumbnail=entry.get("thumbnail"),
        duration=entry.get("duration", 0),
    )`,
      codeSnippetLang: 'python',
      highlight:
        "YouTube consistently blocks VPS IP addresses with anti-bot checks - a known issue for all self-hosted music bots. SoundCloud via yt-dlp provides reliable streaming without authentication. The Dockerfile also includes Deno for Discord's DAVE voice encryption protocol.",
      architecture: [
        {path: 'bot/cogs/music.py', desc: 'all slash commands - thin layer, delegates to player'},
        {path: 'bot/music/player.py', desc: 'GuildPlayer - per-guild playback state machine'},
        {path: 'bot/music/queue.py', desc: 'Queue + Track dataclass'},
        {path: 'bot/music/extractor.py', desc: 'yt-dlp wrapper - SoundCloud search and stream resolution'},
        {path: 'bot/utils.py', desc: 'embed helpers for now-playing and queue display'}
      ]
    },
    detailsRu: {
      hook: 'YouTube заблокировал VPS. SoundCloud - нет.',
      metrics: [
        {value: '8', label: 'слэш-команд'},
        {value: 'ноль', label: 'файлов на диске'},
        {value: 'per-guild', label: 'независимая очередь на сервер'},
        {value: 'стрим', label: 'URL резолвится на лету'}
      ],
      screenshots: ['commands'],
      pipeline: ['Поисковый запрос', 'yt-dlp → SoundCloud', 'Stream URL', 'FFmpeg', 'Discord Voice', 'Очередь'],
      features: [
        'Воспроизведение с SoundCloud по поисковому запросу - без URL',
        'Очередь на каждый сервер независимо - per-guild GuildPlayer',
        'FFmpeg стримит аудио напрямую - файлы на диск не пишутся',
        'Stream URL резолвится через yt-dlp при каждом воспроизведении',
        'Rich Embeds с инфо о треке и обложкой',
        '/queue, /nowplaying, /skip, /pause, /resume, /leave'
      ],
      codeSnippet: `# extractor.py - резолвим стрим SoundCloud на лету
YDL_OPTIONS = {
    "format": "bestaudio/best",
    "quiet": True,
    "default_search": "scsearch",  # поиск по SoundCloud
    "noplaylist": True,
}

async def extract(query: str) -> Track:
    loop = asyncio.get_event_loop()
    data = await loop.run_in_executor(
        None,
        lambda: yt_dlp.YoutubeDL(YDL_OPTIONS).extract_info(query, download=False)
    )
    entry = data["entries"][0] if "entries" in data else data
    return Track(
        title=entry["title"],
        url=entry["url"],       # прямой stream URL - живёт ~6 часов
        thumbnail=entry.get("thumbnail"),
        duration=entry.get("duration", 0),
    )`,
      codeSnippetLang: 'python',
      highlight:
        'YouTube стабильно блокирует IP-адреса VPS антибот-системой - известная проблема для всех self-hosted музыкальных ботов. SoundCloud через yt-dlp работает без авторизации. Dockerfile также включает Deno для поддержки протокола шифрования DAVE в Discord.',
      architecture: [
        {path: 'bot/cogs/music.py', desc: 'все слэш-команды - тонкий слой, делегирует в player'},
        {path: 'bot/music/player.py', desc: 'GuildPlayer - машина состояний воспроизведения на сервер'},
        {path: 'bot/music/queue.py', desc: 'Queue + Track dataclass'},
        {path: 'bot/music/extractor.py', desc: 'обёртка yt-dlp - поиск и резолв стрима SoundCloud'},
        {path: 'bot/utils.py', desc: 'embed-хелперы для now-playing и очереди'}
      ]
    }
  },
  {
    slug: 'n8n-email-assistant',
    title: 'AI Email Assistant',
    description:
      'An n8n workflow that monitors Gmail, classifies emails via GPT-4o-mini, generates a draft reply, and sends it to Telegram for one-tap human approval.',
    descriptionRu:
      'Воркфлоу n8n, который следит за Gmail, классифицирует письма через GPT-4o-mini, генерирует черновик ответа и отправляет его в Telegram для одобрения в одно нажатие.',
    stack: ['n8n', 'OpenAI', 'Gmail API', 'Telegram', 'Docker'],
    github: 'https://github.com/VaalaramaDev/n8n-email-assistant',
    category: 'ai',
    num: '06',
    url: 'https://handwash-navigator-shown.ngrok-free.dev',
    screenshots: ['workflow', 'telegram-card'],
    details: {
      hook: 'AI drafts the reply. You approve it in one tap.',
      metrics: [
        {value: '60s', label: 'Gmail polling interval'},
        {value: '6', label: 'email categories'},
        {value: '3', label: 'approval actions: Send / Edit / Reject'},
        {value: 'GPT-4o-mini', label: 'classification + draft generation'}
      ],
      screenshots: ['workflow', 'telegram-card'],
      pipeline: ['Gmail Inbox', 'noreply Filter', 'GPT-4o-mini', 'Telegram Card', 'Human Approval', 'Gmail Reply'],
      features: [
        'Gmail polling every 60 seconds - unread messages only',
        'Auto-filter: noreply / no-reply addresses are skipped',
        'GPT-4o-mini classifies email: inquiry - complaint - spam - newsletter - support - other',
        'Priority detection: high - medium - low',
        'Draft reply generated in the original language of the email',
        'Telegram card with summary, category, priority and draft text',
        'Inline buttons: Send - Edit - Reject',
        'On approval - reply sent directly into the original Gmail thread'
      ],
      codeSnippet: `// OpenAI system prompt (inside n8n HTTP Request node)
{
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "system",
      "content": "You are an email assistant. Classify the email into one of: inquiry, complaint, spam, newsletter, support, other. Write a professional draft reply in the same language as the email.\\n\\nRespond ONLY with valid JSON:\\n{\\n  \\"category\\": \\"inquiry\\",\\n  \\"priority\\": \\"high|medium|low\\",\\n  \\"summary\\": \\"2-3 sentence summary\\",\\n  \\"draft_reply\\": \\"Full draft reply text\\"\\n}"
    },
    {
      "role": "user", 
      "content": "From: {{ $json.from }}\\nSubject: {{ $json.subject }}\\n\\n{{ $json.body }}"
    }
  ]
}`,
      codeSnippetLang: 'json',
      highlight:
        'The workflow never auto-sends - every reply requires explicit human approval via Telegram inline button. This keeps AI in the loop as a drafting assistant, not an autonomous agent.',
      architecture: [
        {path: 'Gmail Trigger', desc: 'polls INBOX every 60s, unread only, no attachments'},
        {path: 'IF Filter', desc: 'drops emails where from contains noreply or no-reply'},
        {
          path: 'HTTP Request - OpenAI',
          desc: 'POST to /v1/chat/completions, returns JSON with category, priority, summary, draft'
        },
        {path: 'Code node', desc: 'parses GPT JSON response, extracts fields'},
        {path: 'Telegram Card', desc: 'sends HTML message + inline keyboard to your chat'},
        {path: 'Telegram Trigger', desc: 'webhook, listens for callback_query (button taps)'},
        {path: 'Switch - Gmail Send', desc: 'routes by callback: send - reply in thread - edit/reject - dismiss'}
      ]
    },
    detailsRu: {
      hook: 'ИИ составляет ответ. Ты одобряешь одним нажатием.',
      metrics: [
        {value: '60с', label: 'интервал проверки Gmail'},
        {value: '6', label: 'категорий писем'},
        {value: '3', label: 'действия: Отправить / Редактировать / Отклонить'},
        {value: 'GPT-4o-mini', label: 'классификация + генерация черновика'}
      ],
      screenshots: ['workflow', 'telegram-card'],
      pipeline: ['Gmail Inbox', 'Фильтр noreply', 'GPT-4o-mini', 'Telegram карточка', 'Одобрение человеком', 'Ответ в Gmail'],
      features: [
        'Проверка Gmail каждые 60 секунд - только непрочитанные',
        'Автофильтр: адреса noreply / no-reply пропускаются',
        'GPT-4o-mini классифицирует письмо: запрос - жалоба - спам - рассылка - поддержка - другое',
        'Определение приоритета: высокий - средний - низкий',
        'Черновик ответа генерируется на языке оригинального письма',
        'Telegram-карточка с резюме, категорией, приоритетом и черновиком',
        'Inline-кнопки: Отправить - Редактировать - Отклонить',
        'При одобрении - ответ отправляется прямо в оригинальный тред Gmail'
      ],
      codeSnippet: `// Системный промпт OpenAI (внутри HTTP Request ноды n8n)
{
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "system",
      "content": "You are an email assistant. Classify the email into one of: inquiry, complaint, spam, newsletter, support, other. Write a professional draft reply in the same language as the email.\\n\\nRespond ONLY with valid JSON:\\n{\\n  \\"category\\": \\"inquiry\\",\\n  \\"priority\\": \\"high|medium|low\\",\\n  \\"summary\\": \\"2-3 sentence summary\\",\\n  \\"draft_reply\\": \\"Full draft reply text\\"\\n}"
    },
    {
      "role": "user",
      "content": "From: {{ $json.from }}\\nSubject: {{ $json.subject }}\\n\\n{{ $json.body }}"
    }
  ]
}`,
      codeSnippetLang: 'json',
      highlight:
        'Воркфлоу никогда не отправляет письма автоматически - каждый ответ требует явного одобрения через кнопку в Telegram. ИИ остаётся инструментом для составления черновиков, а не автономным агентом.',
      architecture: [
        {path: 'Gmail Trigger', desc: 'опрашивает INBOX каждые 60с, только непрочитанные, без вложений'},
        {path: 'IF Filter', desc: 'отбрасывает письма, где from содержит noreply или no-reply'},
        {
          path: 'HTTP Request - OpenAI',
          desc: 'POST на /v1/chat/completions, возвращает JSON с category, priority, summary, draft'
        },
        {path: 'Code node', desc: 'парсит JSON-ответ GPT, извлекает поля'},
        {path: 'Telegram Card', desc: 'отправляет HTML-сообщение + inline-клавиатуру в твой чат'},
        {path: 'Telegram Trigger', desc: 'вебхук, слушает callback_query (нажатия кнопок)'},
        {path: 'Switch - Gmail Send', desc: 'маршрутизация: send - ответ в треде - edit/reject - dismiss'}
      ]
    }
  },
  {
    slug: 'rag-knowledge-base',
    title: 'RAG Knowledge Base',
    description:
      'A Telegram bot that turns uploaded PDFs into a searchable knowledge base. Ask questions in plain text - the bot retrieves relevant passages and generates grounded answers with source references.',
    descriptionRu:
      'Telegram-бот, который превращает загруженные PDF в поисковую базу знаний. Задавай вопросы обычным текстом - бот находит релевантные фрагменты и генерирует обоснованные ответы с указанием источников.',
    stack: ['Python', 'LangChain', 'ChromaDB', 'OpenAI', 'Docker'],
    github: 'https://github.com/VaalaramaDev/rag-knowledge-base',
    category: 'ai',
    num: '07',
    screenshots: ['demo'],
    details: {
      hook: 'Upload a PDF. Ask anything. Get answers with page references.',
      metrics: [
        {value: '1000', label: 'chars per chunk, 200 overlap'},
        {value: 'top 4', label: 'chunks retrieved per question'},
        {value: '1536-dim', label: 'embedding vector size'},
        {value: 'local', label: 'ChromaDB - no external vector DB'}
      ],
      screenshots: ['demo'],
      pipeline: ['PDF upload', 'PyMuPDF extract', 'Chunk + overlap', 'text-embedding-3-small', 'ChromaDB', 'GPT-4o-mini', 'Answer + sources'],
      features: [
        'Upload any text-based PDF directly in Telegram - no web UI needed',
        'Smart chunking with overlap - context preserved across chunk boundaries',
        'Semantic search across all indexed documents simultaneously',
        'GPT-4o-mini answers strictly from retrieved context - no hallucination from training data',
        'Every answer includes source filename and page number',
        'Multi-document support - questions span across multiple PDFs at once',
        'Duplicate detection - prevents re-indexing the same file twice',
        'Guards for scanned PDFs, oversized files (500+ pages), and non-PDF uploads',
        '/list and /clear commands for knowledge base management',
        'ChromaDB persisted via Docker volume - data survives restarts'
      ],
      codeSnippet: `# retriever.py - the full RAG pipeline in one function
def ask(question: str) -> str:
    # 1. Embed the question in the same vector space as the chunks
    docs = vectorstore.similarity_search(question, k=TOP_K)

    if not docs:
        return "No relevant documents found."

    # 2. Build context from top-4 retrieved chunks
    context = "\\n\\n".join(d.page_content for d in docs)

    # 3. GPT-4o-mini answers ONLY from context - not from training data
    response = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content":
                "Answer only using the context below. "
                "If the answer is not in the context, say so."},
            {"role": "user", "content":
                f"Context:\\n{context}\\n\\nQuestion: {question}"}
        ]
    )

    # 4. Deduplicate sources and append to answer
    sources = list({
        f"{d.metadata['source']} (page {d.metadata['page']})"
        for d in docs
    })
    return response.choices[0].message.content + "\\n\\n📎 Sources:\\n" + "\\n".join(f" • {s}" for s in sources)`,
      codeSnippetLang: 'python',
      highlight:
        'The model is explicitly instructed to answer only from retrieved context - not from its training data. This grounds every response in your documents and makes hallucination structurally impossible for out-of-context questions.',
      architecture: [
        {path: 'rag/ingest.py', desc: 'PDF → PyMuPDF → chunks → embeddings → ChromaDB'},
        {path: 'rag/retriever.py', desc: 'question → similarity search → GPT-4o-mini → answer + sources'},
        {path: 'bot/handlers.py', desc: 'Telegram handlers: /start /list /clear, PDF upload, questions'},
        {path: 'data/chroma/', desc: 'ChromaDB persistent storage - mounted as Docker volume'}
      ]
    },
    detailsRu: {
      hook: 'Загрузи PDF. Задай вопрос. Получи ответ с указанием страниц.',
      metrics: [
        {value: '1000', label: 'символов на чанк, перекрытие 200'},
        {value: 'top 4', label: 'чанка извлекается на вопрос'},
        {value: '1536-мерный', label: 'вектор эмбеддинга'},
        {value: 'локально', label: 'ChromaDB - без внешней векторной БД'}
      ],
      screenshots: ['demo'],
      pipeline: ['Загрузка PDF', 'Извлечение PyMuPDF', 'Чанкинг + перекрытие', 'text-embedding-3-small', 'ChromaDB', 'GPT-4o-mini', 'Ответ + источники'],
      features: [
        'Загрузка любого текстового PDF прямо в Telegram - без веб-интерфейса',
        'Умный чанкинг с перекрытием - контекст сохраняется на границах чанков',
        'Семантический поиск по всем проиндексированным документам одновременно',
        'GPT-4o-mini отвечает строго по извлечённому контексту - без галлюцинаций из обучающих данных',
        'Каждый ответ содержит имя файла-источника и номер страницы',
        'Поддержка нескольких документов - вопросы охватывают все PDF сразу',
        'Определение дубликатов - один и тот же файл не индексируется дважды',
        'Защита от сканов, файлов 500+ страниц и не-PDF загрузок',
        'Команды /list и /clear для управления базой знаний',
        'ChromaDB сохраняется через Docker volume - данные не теряются при перезапуске'
      ],
      codeSnippet: `# retriever.py - полный RAG-пайплайн в одной функции
def ask(question: str) -> str:
    # 1. Эмбеддинг вопроса в том же векторном пространстве что и чанки
    docs = vectorstore.similarity_search(question, k=TOP_K)

    if not docs:
        return "Релевантные документы не найдены."

    # 2. Контекст из топ-4 извлечённых чанков
    context = "\\n\\n".join(d.page_content for d in docs)

    # 3. GPT-4o-mini отвечает ТОЛЬКО по контексту - не по обучающим данным
    response = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content":
                "Отвечай только на основе контекста ниже. "
                "Если ответа нет в контексте, так и скажи."},
            {"role": "user", "content":
                f"Контекст:\\n{context}\\n\\nВопрос: {question}"}
        ]
    )

    # 4. Дедупликация источников и добавление к ответу
    sources = list({
        f"{d.metadata['source']} (стр. {d.metadata['page']})"
        for d in docs
    })
    return response.choices[0].message.content + "\\n\\n📎 Источники:\\n" + "\\n".join(f" • {s}" for s in sources)`,
      codeSnippetLang: 'python',
      highlight:
        'Модель явно инструктируется отвечать только по извлечённому контексту - не по обучающим данным. Это привязывает каждый ответ к твоим документам и делает галлюцинации структурно невозможными для вопросов вне контекста.',
      architecture: [
        {path: 'rag/ingest.py', desc: 'PDF → PyMuPDF → чанки → эмбеддинги → ChromaDB'},
        {path: 'rag/retriever.py', desc: 'вопрос → similarity search → GPT-4o-mini → ответ + источники'},
        {path: 'bot/handlers.py', desc: 'Telegram хэндлеры: /start /list /clear, загрузка PDF, вопросы'},
        {path: 'data/chroma/', desc: 'персистентное хранилище ChromaDB - монтируется как Docker volume'}
      ]
    }
  },
  {
    slug: 'ai-content-plan',
    title: 'AI Content Plan Generator',
    description:
      'A Streamlit app that generates structured blog content plans via GPT-4o-mini. Configure topic, platform, tone, frequency, and audience - get a ready-to-use weekly plan with titles, formats, tags, and briefs.',
    descriptionRu:
      'Streamlit-приложение, которое генерирует структурированные контент-планы для блога через GPT-4o-mini. Настрой тему, платформу, тон, частоту и аудиторию - и получи готовый недельный план с заголовками, форматами, тегами и брифами.',
    stack: ['Python', 'Streamlit', 'OpenAI', 'Docker'],
    github: 'https://github.com/VaalaramaDev/ai-content-plan',
    category: 'ai',
    num: '08',
    url: 'http://178.104.202.207:8501',
    screenshots: ['form', 'result', 'markdown'],
    details: {
      hook: 'From topic and audience to a full weekly content plan in seconds.',
      metrics: [
        {value: '5', label: 'platforms: Medium, Substack, Dev.to, LinkedIn, Blog'},
        {value: '5', label: 'tones: Educational, Conversational, Professional, Inspirational, Analytical'},
        {value: 'JSON', label: 'structured output via json_object response format'},
        {value: 'EN / RU', label: 'plan generation language'}
      ],
      screenshots: ['form', 'result', 'markdown'],
      pipeline: ['Form input', 'prompts.py', 'GPT-4o-mini (JSON mode)', 'Parse + group by week', 'Streamlit cards', 'Markdown export'],
      features: [
        'Configure platform, tone, period (1 week to 3 months), and posts per week',
        'Specify target audience for relevant titles and angles',
        'Posts auto-vary in format: Tutorial - Listicle - Case Study - How-To - Opinion - Review',
        'Each post includes title, format, read time, hashtags, and a 2-3 sentence brief',
        'Weekly grouped layout for easy review',
        'Export full plan as a Markdown file or copy to clipboard',
        'Generate in English or Russian',
        'Input validation - topic and audience required before generation'
      ],
      codeSnippet: `# generator.py - GPT-4o-mini in json_object mode
def generate_plan(params: dict) -> dict:
    response = openai.chat.completions.create(
        model="gpt-4o-mini",
        response_format={"type": "json_object"},  # structured output
        messages=[
            {"role": "system", "content": build_system_prompt(params)},
            {"role": "user",   "content": build_user_prompt(params)},
        ],
    )
    return json.loads(response.choices[0].message.content)

# app.py - group posts by week, render as expandable cards
plan = generate_plan(params)
weeks = group_by_week(plan["posts"])  # split by 7-day intervals

for week_num, posts in weeks.items():
    st.subheader(f"🗓 Week {week_num}")
    for post in posts:
        with st.expander(f"{post['date']} - {post['title']}"):
            col1, col2 = st.columns(2)
            col1.markdown(f"**Format:** {post['format']}")
            col2.markdown(f"**Read time:** {post['read_time']}")
            st.markdown(f"**Tags:** {' '.join(post['tags'])}")
            st.markdown(f"**Brief:** {post['brief']}")`,
      codeSnippetLang: 'python',
      highlight:
        'GPT-4o-mini is called with response_format: json_object - this forces the model to return valid JSON every time, eliminating the need for fragile regex parsing or retry logic.',
      architecture: [
        {path: 'app.py', desc: 'Streamlit UI - form, generation trigger, weekly card layout'},
        {path: 'generator.py', desc: 'OpenAI call in json_object mode, returns parsed plan dict'},
        {path: 'prompts.py', desc: 'builds system + user prompt from all form parameters'},
        {path: 'utils.py', desc: 'calculates total posts from period + frequency, converts plan to Markdown'}
      ]
    },
    detailsRu: {
      hook: 'От темы и аудитории до полного контент-плана на неделю - за секунды.',
      metrics: [
        {value: '5', label: 'платформ: Medium, Substack, Dev.to, LinkedIn, Blog'},
        {value: '5', label: 'тонов: Образовательный, Разговорный, Профессиональный, Вдохновляющий, Аналитический'},
        {value: 'JSON', label: 'структурированный вывод через json_object response format'},
        {value: 'RU / EN', label: 'язык генерации плана'}
      ],
      screenshots: ['form', 'result', 'markdown'],
      pipeline: ['Заполнение формы', 'prompts.py', 'GPT-4o-mini (JSON режим)', 'Парсинг + группировка по неделям', 'Карточки Streamlit', 'Экспорт в Markdown'],
      features: [
        'Настройка платформы, тона, периода (1 неделя - 3 месяца) и частоты постов',
        'Целевая аудитория для более релевантных тем и углов подачи',
        'Форматы постов чередуются автоматически: Tutorial - Listicle - Case Study - How-To - Opinion - Review',
        'Каждый пост: заголовок, формат, время чтения, хэштеги и бриф 2-3 предложения',
        'Группировка по неделям для удобного просмотра',
        'Экспорт полного плана в Markdown или копирование в буфер',
        'Генерация на русском или английском',
        'Валидация - тема и аудитория обязательны перед генерацией'
      ],
      codeSnippet: `# generator.py - GPT-4o-mini в режиме json_object
def generate_plan(params: dict) -> dict:
    response = openai.chat.completions.create(
        model="gpt-4o-mini",
        response_format={"type": "json_object"},  # структурированный вывод
        messages=[
            {"role": "system", "content": build_system_prompt(params)},
            {"role": "user",   "content": build_user_prompt(params)},
        ],
    )
    return json.loads(response.choices[0].message.content)

# app.py - группировка по неделям, рендер карточками
plan = generate_plan(params)
weeks = group_by_week(plan["posts"])  # разбивка по 7-дневным интервалам

for week_num, posts in weeks.items():
    st.subheader(f"🗓 Неделя {week_num}")
    for post in posts:
        with st.expander(f"{post['date']} - {post['title']}"):
            col1, col2 = st.columns(2)
            col1.markdown(f"**Формат:** {post['format']}")
            col2.markdown(f"**Время чтения:** {post['read_time']}")
            st.markdown(f"**Теги:** {' '.join(post['tags'])}")
            st.markdown(f"**Бриф:** {post['brief']}")`,
      codeSnippetLang: 'python',
      highlight:
        'GPT-4o-mini вызывается с response_format: json_object - это заставляет модель возвращать валидный JSON каждый раз, исключая необходимость в хрупком regex-парсинге или логике повторных попыток.',
      architecture: [
        {path: 'app.py', desc: 'Streamlit UI - форма, запуск генерации, карточки по неделям'},
        {path: 'generator.py', desc: 'вызов OpenAI в режиме json_object, возвращает распарсенный dict'},
        {path: 'prompts.py', desc: 'строит системный и пользовательский промпт из параметров формы'},
        {path: 'utils.py', desc: 'считает количество постов из периода + частоты, конвертирует план в Markdown'}
      ]
    }
  },
  {
    slug: 'hubspot-sheets-sync',
    title: 'HubSpot - Google Sheets Sync',
    description:
      'A FastAPI webhook service that listens to HubSpot contact events and mirrors them into Google Sheets in real time. Full CRUD with HMAC-SHA256 signature validation.',
    descriptionRu:
      'FastAPI webhook-сервис, который слушает события HubSpot по контактам и в реальном времени зеркалит их в Google Sheets. Полный CRUD с валидацией подписи HMAC-SHA256.',
    stack: ['Python', 'FastAPI', 'gspread', 'HubSpot API', 'Docker'],
    github: 'https://github.com/VaalaramaDev/hubspot-sheets-sync',
    category: 'integrations',
    num: '09',
    screenshots: [],
    details: {
      hook: 'Every HubSpot contact event - create, update, delete - reflected in Google Sheets within seconds.',
      metrics: [
        {value: 'HMAC', label: 'SHA-256 signature validation on every request'},
        {value: '3', label: 'event types: creation - propertyChange - deletion'},
        {value: 'upsert', label: 'update creates row if contact not found'},
        {value: '/docs', label: 'Swagger UI built-in'}
      ],
      screenshots: [],
      pipeline: ['HubSpot event', 'POST /webhook/hubspot', 'HMAC validation', 'Route by event type', 'HubSpot API - fetch contact', 'Google Sheets CRUD'],
      features: [
        'Accepts HubSpot contact webhooks via POST /webhook/hubspot',
        'HMAC-SHA256 signature validation - rejects unsigned requests',
        'Fetches full contact data from HubSpot API before writing to Sheets',
        'contact.creation - append row - contact.propertyChange - update row (upsert) - contact.deletion - delete row',
        'Header row auto-created on first Sheets operation',
        'simulate.py script - fires all three event types locally with correct HMAC signatures',
        '/health endpoint for uptime monitoring',
        'Service account JSON mounted read-only via Docker volume'
      ],
      codeSnippet: `# hubspot.py - HMAC-SHA256 signature validation
def validate_signature(
    secret: str,
    raw_body: bytes,
    received_signature: str,
) -> bool:
    expected = hmac.new(
        secret.encode(),
        raw_body,
        hashlib.sha256,
    ).hexdigest()
    return hmac.compare_digest(expected, received_signature)

# webhook.py - route by event type
@router.post("/webhook/hubspot")
async def hubspot_webhook(
    request: Request,
    events: List[HubSpotEvent],
):
    if settings.hubspot_client_secret:
        sig = request.headers.get("X-HubSpot-Signature", "")
        if not validate_signature(settings.hubspot_client_secret, await request.body(), sig):
            raise HTTPException(status_code=403, detail="Invalid signature")

    for event in events:
        contact = await fetch_contact(event.objectId)
        if event.subscriptionType == "contact.creation":
            await append_contact(contact)
        elif event.subscriptionType == "contact.propertyChange":
            await update_contact(contact)          # upserts if not found
        elif event.subscriptionType == "contact.deletion":
            await delete_contact(event.objectId)`,
      codeSnippetLang: 'python',
      highlight:
        'HMAC-SHA256 validation is optional but production-ready - enabled automatically when HUBSPOT_CLIENT_SECRET is set. hmac.compare_digest is used instead of == to prevent timing attacks.',
      architecture: [
        {path: 'app/webhook.py', desc: 'POST /webhook/hubspot - HMAC check, event routing'},
        {path: 'app/hubspot.py', desc: 'HMAC validation + async HubSpot API client (httpx)'},
        {path: 'app/sheets.py', desc: 'Google Sheets CRUD via gspread - append, update, delete'},
        {path: 'app/models.py', desc: 'Pydantic models: HubSpotEvent, ContactData'},
        {path: 'scripts/simulate.py', desc: 'local simulator - fires creation/update/deletion with real HMAC signatures'}
      ]
    },
    detailsRu: {
      hook: 'Каждое событие HubSpot - создание, обновление, удаление - отражается в Google Sheets за секунды.',
      metrics: [
        {value: 'HMAC', label: 'SHA-256 валидация подписи на каждый запрос'},
        {value: '3', label: 'типа событий: creation - propertyChange - deletion'},
        {value: 'upsert', label: 'обновление создаёт строку если контакт не найден'},
        {value: '/docs', label: 'встроенный Swagger UI'}
      ],
      screenshots: [],
      pipeline: ['Событие HubSpot', 'POST /webhook/hubspot', 'Валидация HMAC', 'Маршрутизация по типу', 'HubSpot API - данные контакта', 'Google Sheets CRUD'],
      features: [
        'Приём вебхуков HubSpot через POST /webhook/hubspot',
        'Валидация подписи HMAC-SHA256 - неподписанные запросы отклоняются',
        'Получение полных данных контакта из HubSpot API перед записью в Sheets',
        'contact.creation - добавить строку - contact.propertyChange - обновить (upsert) - contact.deletion - удалить',
        'Заголовок таблицы создаётся автоматически при первой операции',
        'simulate.py - запускает все три типа событий локально с реальными HMAC-подписями',
        'Эндпоинт /health для мониторинга доступности',
        'service_account.json монтируется read-only через Docker volume'
      ],
      codeSnippet: `# hubspot.py - валидация подписи HMAC-SHA256
def validate_signature(
    secret: str,
    raw_body: bytes,
    received_signature: str,
) -> bool:
    expected = hmac.new(
        secret.encode(),
        raw_body,
        hashlib.sha256,
    ).hexdigest()
    return hmac.compare_digest(expected, received_signature)

# webhook.py - маршрутизация по типу события
@router.post("/webhook/hubspot")
async def hubspot_webhook(
    request: Request,
    events: List[HubSpotEvent],
):
    if settings.hubspot_client_secret:
        sig = request.headers.get("X-HubSpot-Signature", "")
        if not validate_signature(settings.hubspot_client_secret, await request.body(), sig):
            raise HTTPException(status_code=403, detail="Неверная подпись")

    for event in events:
        contact = await fetch_contact(event.objectId)
        if event.subscriptionType == "contact.creation":
            await append_contact(contact)
        elif event.subscriptionType == "contact.propertyChange":
            await update_contact(contact)          # upsert если не найден
        elif event.subscriptionType == "contact.deletion":
            await delete_contact(event.objectId)`,
      codeSnippetLang: 'python',
      highlight:
        'Валидация HMAC-SHA256 опциональна но production-ready - включается автоматически при наличии HUBSPOT_CLIENT_SECRET. Используется hmac.compare_digest вместо == для защиты от timing-атак.',
      architecture: [
        {path: 'app/webhook.py', desc: 'POST /webhook/hubspot - проверка HMAC, маршрутизация событий'},
        {path: 'app/hubspot.py', desc: 'валидация HMAC + async клиент HubSpot API (httpx)'},
        {path: 'app/sheets.py', desc: 'CRUD Google Sheets через gspread - append, update, delete'},
        {path: 'app/models.py', desc: 'Pydantic модели: HubSpotEvent, ContactData'},
        {path: 'scripts/simulate.py', desc: 'локальный симулятор - отправляет creation/update/deletion с реальными HMAC-подписями'}
      ]
    }
  },
  {
    slug: 'mastersatoshi',
    title: 'MasterSatoshi - WordPress Agency Site',
    description:
      'A commercial ASIC mining equipment marketplace built on WordPress. Features a real-time profitability calculator via Minerstat API, smart equipment picker by budget, and SEO-optimized catalog of 100+ devices.',
    descriptionRu:
      'Коммерческий маркетплейс ASIC-оборудования, построенный на WordPress. Включает калькулятор доходности в реальном времени через Minerstat API, умный подбор оборудования по бюджету и SEO-оптимизированный каталог из 100+ устройств.',
    stack: ['WordPress', 'ACF', 'AJAX', 'PHP', 'MySQL'],
    github: 'https://github.com/VaalaramaDev',
    category: 'wordpress',
    num: '10',
    url: 'https://mastersatoshi.ru',
    screenshots: ['hero', 'catalog', 'product', 'calculator', 'picker'],
    details: {
      hook: "Not just a catalog - every device shows live daily profit calculated against your electricity rate.",
      metrics: [
        {value: '100+', label: 'ASIC devices in catalog'},
        {value: '8', label: 'years - client on market since 2017'},
        {value: 'live', label: 'profitability via Minerstat API'},
        {value: 'SEO', label: 'optimized for mining equipment queries'}
      ],
      screenshots: ['hero', 'catalog', 'product', 'calculator', 'picker'],
      pipeline: ['Minerstat API', 'PHP cron + cache', 'ACF custom fields', 'WP catalog', 'AJAX filters', 'Profitability UI'],
      features: [
        'Full ASIC catalog with hashrate, power consumption, price, and availability',
        'Live daily profit per device - fetched from Minerstat API, cached to avoid rate limits',
        'Profitability calculator: enter electricity rate - see net profit, ROI timeline, payback period',
        'Smart equipment picker - select budget, rate - get optimal device set with ROI breakdown',
        'AJAX-powered filtering - by manufacturer, algorithm, price range, availability',
        'ACF-based content management - client updates catalog without touching code',
        'SEO-optimized structure - individual pages per device model with meta, schema markup',
        'Live crypto ticker in header - prices and network stats updated in real time'
      ],
      highlight:
        "Profitability data is fetched from Minerstat API and cached server-side - product pages show real net profit at the visitor's electricity rate without hitting API limits on every page load.",
      architecture: [
        {path: 'ACF custom fields', desc: 'hashrate, power, price, availability - structured data per device'},
        {path: 'PHP + Minerstat API', desc: 'fetches mining profitability, cached via transients'},
        {path: 'Profitability calculator', desc: 'client-side JS + PHP endpoint - real-time ROI at custom electricity rate'},
        {path: 'Equipment picker', desc: 'multi-step wizard: budget - algorithm - electricity rate - optimal set'},
        {path: 'AJAX catalog', desc: 'filter by manufacturer, algorithm, price, availability without page reload'}
      ]
    },
    detailsRu: {
      hook: 'Не просто каталог - каждый аппарат показывает живую суточную прибыль с учётом вашего тарифа на электроэнергию.',
      metrics: [
        {value: '100+', label: 'ASIC-аппаратов в каталоге'},
        {value: '8', label: 'лет - клиент на рынке с 2017 года'},
        {value: 'live', label: 'доходность через Minerstat API'},
        {value: 'SEO', label: 'оптимизация под запросы по майнинг-оборудованию'}
      ],
      screenshots: ['hero', 'catalog', 'product', 'calculator', 'picker'],
      pipeline: ['Minerstat API', 'PHP cron + кэш', 'ACF custom fields', 'WP каталог', 'AJAX фильтры', 'UI доходности'],
      features: [
        'Полный каталог ASIC с хешрейтом, потреблением, ценой и наличием',
        'Живая суточная прибыль по каждому аппарату - Minerstat API с серверным кэшем',
        'Калькулятор доходности: введите тариф - получите чистую прибыль, таймлайн ROI и срок окупаемости',
        'Умный подбор оборудования - бюджет + тариф - оптимальный сетап с разбивкой по ROI',
        'AJAX-фильтрация - по производителю, алгоритму, ценовому диапазону, наличию',
        'Управление контентом через ACF - клиент обновляет каталог без правки кода',
        'SEO-оптимизированная структура - отдельные страницы на каждую модель с мета и schema markup',
        'Живой крипто-тикер в шапке - цены и статистика сети обновляются в реальном времени'
      ],
      highlight:
        'Данные о доходности получаются из Minerstat API и кэшируются на сервере - страницы товаров показывают реальную чистую прибыль по тарифу посетителя без удара по лимитам API на каждой загрузке.',
      architecture: [
        {path: 'ACF custom fields', desc: 'хешрейт, потребление, цена, наличие - структурированные данные на аппарат'},
        {path: 'PHP + Minerstat API', desc: 'получение доходности майнинга, кэш через transients'},
        {path: 'Калькулятор доходности', desc: 'клиентский JS + PHP endpoint - ROI в реальном времени по своему тарифу'},
        {path: 'Подбор оборудования', desc: 'мастер из нескольких шагов: бюджет - алгоритм - тариф - оптимальный сетап'},
        {path: 'AJAX каталог', desc: 'фильтрация по производителю, алгоритму, цене, наличию без перезагрузки'}
      ]
    }
  },
  {
    slug: 'wp-price-manager',
    title: 'WP Plugin - Quick Price Manager',
    description:
      'A custom WordPress admin plugin for bulk price management of ASIC miners. Inline editing, CSV import/export, badge management, and stale price alerts - all on one page.',
    descriptionRu:
      'Кастомный WordPress-плагин для массового управления ценами на ASIC-майнеры. Inline-редактирование, CSV импорт/экспорт, управление плашками и алерты устаревших цен - всё на одной странице.',
    stack: ['WordPress', 'PHP', 'ACF', 'MySQL'],
    github: 'https://github.com/VaalaramaDev',
    category: 'wordpress',
    num: '11',
    screenshots: ['admin'],
    details: {
      hook: 'Update prices for 100 devices without opening a single product page.',
      metrics: [
        {value: '4', label: 'hashrate variants per device (H1-H4)'},
        {value: 'AJAX', label: 'save without page reload'},
        {value: 'CSV', label: 'bulk import + export with hashrate columns'},
        {value: '7 days', label: 'stale price threshold with color alerts'}
      ],
      screenshots: ['admin'],
      pipeline: [
        'Admin page render',
        'Inline price input',
        'CSV import → fill fields',
        'AJAX POST → PHP handler',
        'update_post_meta + ACF',
        '_price_updated_at timestamp'
      ],
      features: [
        'Single admin page lists all miner products with all hashrate variants inline',
        'Inline price editing - type new price, click Save - AJAX saves without reload',
        'CSV import: upload file - fields auto-fill highlighted in yellow - review - save',
        'CSV export: downloads current prices with hashrate columns (model_name; h1_th-h4_th; h1_price-h4_price)',
        'Badge management per product - dropdown updates via separate AJAX call instantly',
        'Filter by brand and algorithm - URL-based, no JS required',
        'Stale price indicator: green < 3 days - yellow 3-7 days - red > 7 days',
        'Admin notice on product list: "N products with outdated prices - Update prices"',
        'Prices saved via update_post_meta + update_field (ACF) simultaneously for full compatibility',
        'ACF hook tracks price changes - _price_updated_at only updates when value actually changes'
      ],
      codeSnippet: `// CSV import - client-side, no server round-trip
importBtn.addEventListener('click', function () {
  var reader = new FileReader();
  reader.onload = function (e) {
    var rows = e.target.result.split(/\\r?\\n/);
    // Auto-detect separator: ; or ,
    var sep = rows[0].indexOf(';') !== -1 ? ';' : ',';
    // New format: model_name;h1_th;h2_th;h3_th;h4_th;h1_price
    // Old format: model_name;h1_price;h2_price
    var priceStart = rows[0].toLowerCase().includes('h1_th') ? 5 : 1;

    rows.slice(1).forEach(function (row) {
      var cols = row.split(sep).map(c => c.trim().replace(/^"|"$/g, ''));
      var modelName = cols[0];
      document.querySelectorAll('.ms2026-price-block').forEach(function (block) {
        if (block.dataset.model.toLowerCase() === modelName.toLowerCase()) {
          block.querySelectorAll('.ms2026-price-input').forEach(function (inp, j) {
            var newPrice = cols[priceStart + j] || '';
            if (newPrice) {
              inp.value = newPrice;
              inp.style.backgroundColor = '#fcf3cf'; // highlight changed
            }
          });
        }
      });
    });
  };
  reader.readAsText(fileInput.files[0], 'UTF-8');
});

// AJAX save - only sends fields that were actually changed
saveBtn.addEventListener('click', function () {
  var data = {};
  document.querySelectorAll('.ms2026-price-input').forEach(function (inp) {
    if (!inp.value.trim()) return; // skip unchanged
    var match = inp.name.match(/prices\\[(\\d+)\\]\\[(h\\d+_price)\\]/);
    if (match) {
      if (!data[match[1]]) data[match[1]] = {};
      data[match[1]][match[2]] = inp.value.trim();
    }
  });
  // POST to wp_ajax_ms2026_save_prices
});`,
      codeSnippetLang: 'javascript',
      highlight:
        'CSV import runs entirely client-side - the file is parsed in the browser, matching rows to product blocks by model name, and highlighting changed fields in yellow before any data is sent to the server.',
      architecture: [
        {path: 'inc/price-manager.php', desc: 'admin page render, AJAX handlers, ACF hook, stale price notice'},
        {
          path: 'ms2026_save_prices_ajax()',
          desc: 'validates nonce, updates h1_price-h4_price via post_meta + ACF, stamps _price_updated_at'
        },
        {
          path: 'ms2026_update_badge_ajax()',
          desc: 'validates badge value against ACF choices whitelist before saving'
        },
        {
          path: 'ms2026_acf_track_price_update()',
          desc: 'ACF save_post hook - compares old vs new prices, only updates timestamp on real change'
        },
        {
          path: 'ms2026_outdated_prices_notice()',
          desc: 'WP_Query finds products where _price_updated_at is older than 7 days - admin notice with link'
        }
      ]
    },
    detailsRu: {
      hook: 'Обновить цены на 100 аппаратов без открытия ни одной карточки товара.',
      metrics: [
        {value: '4', label: 'варианта хэшрейта на аппарат (H1-H4)'},
        {value: 'AJAX', label: 'сохранение без перезагрузки страницы'},
        {value: 'CSV', label: 'массовый импорт и экспорт с колонками хэшрейта'},
        {value: '7 дней', label: 'порог устаревания цены с цветовой индикацией'}
      ],
      screenshots: ['admin'],
      pipeline: [
        'Рендер страницы админки',
        'Inline ввод цены',
        'CSV импорт → заполнение полей',
        'AJAX POST → PHP handler',
        'update_post_meta + ACF',
        'Timestamp _price_updated_at'
      ],
      features: [
        'Одна страница администратора со всеми аппаратами и вариантами хэшрейта инлайн',
        'Inline редактирование цен - введи цену, нажми Сохранить - AJAX без перезагрузки',
        'CSV импорт: загрузи файл - поля автоматически заполняются, подсвечиваются жёлтым - проверь - сохрани',
        'CSV экспорт: скачивает текущие цены с колонками хэшрейта (model_name; h1_th-h4_th; h1_price-h4_price)',
        'Управление плашками товаров - выпадающий список сохраняется отдельным AJAX-запросом мгновенно',
        'Фильтрация по бренду и алгоритму - URL-параметры, без JS',
        'Индикатор устаревания: зелёный < 3 дней - жёлтый 3-7 дней - красный > 7 дней',
        'Уведомление в админке: "N товаров с устаревшими ценами - Обновить цены"',
        'Цены сохраняются через update_post_meta + update_field (ACF) одновременно для полной совместимости',
        'ACF-хук отслеживает изменения - _price_updated_at обновляется только при реальном изменении значения'
      ],
      codeSnippet: `// CSV импорт - полностью на клиенте, без обращения к серверу
importBtn.addEventListener('click', function () {
  var reader = new FileReader();
  reader.onload = function (e) {
    var rows = e.target.result.split(/\\r?\\n/);
    // Автоопределение разделителя: ; или ,
    var sep = rows[0].indexOf(';') !== -1 ? ';' : ',';
    // Новый формат: model_name;h1_th;h2_th;h3_th;h4_th;h1_price
    // Старый формат: model_name;h1_price;h2_price
    var priceStart = rows[0].toLowerCase().includes('h1_th') ? 5 : 1;

    rows.slice(1).forEach(function (row) {
      var cols = row.split(sep).map(c => c.trim().replace(/^"|"$/g, ''));
      var modelName = cols[0];
      document.querySelectorAll('.ms2026-price-block').forEach(function (block) {
        if (block.dataset.model.toLowerCase() === modelName.toLowerCase()) {
          block.querySelectorAll('.ms2026-price-input').forEach(function (inp, j) {
            var newPrice = cols[priceStart + j] || '';
            if (newPrice) {
              inp.value = newPrice;
              inp.style.backgroundColor = '#fcf3cf'; // подсветка изменений
            }
          });
        }
      });
    });
  };
  reader.readAsText(fileInput.files[0], 'UTF-8');
});

// AJAX сохранение - отправляет только изменённые поля
saveBtn.addEventListener('click', function () {
  var data = {};
  document.querySelectorAll('.ms2026-price-input').forEach(function (inp) {
    if (!inp.value.trim()) return; // пропускаем неизменённые
    var match = inp.name.match(/prices\\[(\\d+)\\]\\[(h\\d+_price)\\]/);
    if (match) {
      if (!data[match[1]]) data[match[1]] = {};
      data[match[1]][match[2]] = inp.value.trim();
    }
  });
  // POST на wp_ajax_ms2026_save_prices
});`,
      codeSnippetLang: 'javascript',
      highlight:
        'CSV импорт выполняется полностью на клиенте - файл парсится в браузере, строки сопоставляются с блоками товаров по названию модели, изменённые поля подсвечиваются жёлтым до отправки данных на сервер.',
      architecture: [
        {
          path: 'inc/price-manager.php',
          desc: 'рендер страницы, AJAX-хендлеры, ACF-хук, уведомление об устаревших ценах'
        },
        {
          path: 'ms2026_save_prices_ajax()',
          desc: 'проверяет nonce, обновляет h1_price-h4_price через post_meta + ACF, ставит _price_updated_at'
        },
        {
          path: 'ms2026_update_badge_ajax()',
          desc: 'валидирует значение плашки по whitelist из ACF choices перед сохранением'
        },
        {
          path: 'ms2026_acf_track_price_update()',
          desc: 'хук ACF save_post - сравнивает старые и новые цены, обновляет timestamp только при реальном изменении'
        },
        {
          path: 'ms2026_outdated_prices_notice()',
          desc: 'WP_Query находит товары где _price_updated_at старше 7 дней - уведомление со ссылкой'
        }
      ]
    }
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
