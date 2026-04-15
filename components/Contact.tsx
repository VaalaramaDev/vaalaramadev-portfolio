'use client';

import {FormEvent, useState} from 'react';
import {useTranslations} from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      });

      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const buttonLabel =
    status === 'sending'
      ? 'Sending'
      : status === 'sent'
        ? 'Sent ✓'
        : status === 'error'
          ? 'Error. Try again'
          : t('send');

  return (
    <section id="contact" className="section-rule py-20">
      <div className="page-shell">
        <div className="section-label">{t('title')}</div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          <div className="rounded-[8px] bg-[#f0efe9] p-4">
            <div className="text-[10px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t('github')}</div>
            <div className="mt-2 text-[15px] text-[#0f0f0d]">VaalaramaDev</div>
            <a
              href="https://github.com/VaalaramaDev"
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-[12px] text-[#888680]"
            >
              github.com/VaalaramaDev
            </a>
          </div>

          <div className="rounded-[8px] bg-[#f0efe9] p-4">
            <div className="text-[10px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t('telegram')}</div>
            <div className="mt-2 text-[15px] text-[#0f0f0d]">@Vaalarama</div>
            <a href="https://t.me/Vaalarama" target="_blank" rel="noreferrer" className="mt-1 block text-[12px] text-[#888680]">
              Direct message
            </a>
          </div>

          <div className="rounded-[8px] bg-[#f0efe9] p-4">
            <div className="text-[10px] uppercase tracking-[0.08em] text-[#b5b2a6]">{t('location')}</div>
            <div className="mt-2 text-[15px] text-[#0f0f0d]">Yerevan, Armenia</div>
            <div className="mt-1 text-[12px] text-[#888680]">UTC+4</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid gap-2 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder={t('name')}
              required
              value={form.name}
              onChange={(event) => setForm((current) => ({...current, name: event.target.value}))}
              className="w-full rounded-[4px] border border-[#dddbd4] bg-[#f0efe9] px-3 py-2.5 text-[13px] text-[#0f0f0d] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder={t('email')}
              required
              value={form.email}
              onChange={(event) => setForm((current) => ({...current, email: event.target.value}))}
              className="w-full rounded-[4px] border border-[#dddbd4] bg-[#f0efe9] px-3 py-2.5 text-[13px] text-[#0f0f0d] outline-none"
            />
          </div>
          <textarea
            name="message"
            placeholder={t('message')}
            required
            value={form.message}
            onChange={(event) => setForm((current) => ({...current, message: event.target.value}))}
            className="mt-2 h-[88px] w-full rounded-[4px] border border-[#dddbd4] bg-[#f0efe9] px-3 py-2.5 text-[13px] text-[#0f0f0d] outline-none"
          />
          <button
            type="submit"
            disabled={status === 'sending' || status === 'sent'}
            className={`mt-3 rounded-[4px] px-5 py-2.5 text-[13px] ${
              status === 'sent'
                ? 'bg-transparent text-[#5a7a5a]'
                : status === 'error'
                  ? 'bg-transparent text-[#a33a3a]'
                  : 'bg-[#0f0f0d] text-[#f7f6f2] disabled:opacity-70'
            }`}
          >
            {buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
