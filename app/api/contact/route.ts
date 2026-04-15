import {NextRequest, NextResponse} from 'next/server';

export async function POST(req: NextRequest) {
  const {name, email, message} = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({error: 'Missing fields'}, {status: 400});
  }

  const text = `📩 *New message from portfolio*\n\n*Name:* ${name}\n*Email:* ${email}\n\n*Message:*\n${message}`;

  const res = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown'
      })
    }
  );

  if (!res.ok) {
    return NextResponse.json({error: 'Failed to send'}, {status: 500});
  }

  return NextResponse.json({ok: true});
}
