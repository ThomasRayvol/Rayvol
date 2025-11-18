import { useTranslations } from 'next-intl';
import { Section } from './Section';

export function Interests() {
  const t = useTranslations('interests');

  // Get all interest items
  const items = t.raw('items') as string[];

  return (
    <Section title={t('title')}>
      <ul className="list-disc list-inside space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}
