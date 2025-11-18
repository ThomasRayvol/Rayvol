import { useTranslations } from 'next-intl';
import { Section } from './Section';

export function Education() {
  const t = useTranslations('education');

  // Get all education items
  const items = t.raw('items') as Array<{
    year: string;
    degree: string;
    school: string;
  }>;

  return (
    <Section title={t('title')}>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex flex-col">
              <div className="font-semibold">{item.degree}</div>
              <div className="text-sm text-slate-600">
                {item.school} - {item.year}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
