import { useTranslations } from 'next-intl';
import { Section } from './Section';

export function Achievements() {
  const t = useTranslations('achievements');

  return (
    <Section title={t('title')}>
      <ul className="list-disc pl-5 space-y-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <li key={i}>
            <strong>{t(`items.${i}`)}</strong>
          </li>
        ))}
      </ul>
    </Section>
  );
}
