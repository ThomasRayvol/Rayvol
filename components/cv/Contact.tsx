import { useTranslations } from 'next-intl';
import { Section } from './Section';
import { Mail, Phone, Globe, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <Section title={t('title')}>
      <ul className="space-y-2">
        <li className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-slate-600" />
          <a
            href={`https://${t('website')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t('website')}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Linkedin className="w-4 h-4 text-slate-600" />
          <a
            href="https://www.linkedin.com/in/thomas-richard-rayvol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t('linkedin')}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Github className="w-4 h-4 text-slate-600" />
          <a
            href="https://github.com/ThomasRayvol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {t('github')}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-slate-600" />
          <a
            href={`mailto:${t('email')}`}
            className="text-blue-600 hover:underline"
          >
            {t('email')}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-slate-600" />
          <a
            href={`tel:${t('phone').replace(/\s/g, '')}`}
            className="text-blue-600 hover:underline"
          >
            {t('phone')}
          </a>
        </li>
      </ul>
    </Section>
  );
}
