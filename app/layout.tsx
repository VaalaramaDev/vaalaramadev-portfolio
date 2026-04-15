import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Pavel Skvortsov | Full-Stack Developer',
  description: 'Portfolio of Pavel Skvortsov, a full-stack developer and automation engineer.',
  openGraph: {
    title: 'Pavel Skvortsov | Full-Stack Developer',
    description: 'Portfolio of Pavel Skvortsov, a full-stack developer and automation engineer.',
    images: ['/og-image.png']
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
