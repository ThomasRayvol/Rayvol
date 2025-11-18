import { useTranslations } from 'next-intl';
import { Section } from './Section';

export function TechStack() {
  const t = useTranslations('stack');

  return (
    <Section title={t('title')}>
      <ul className="space-y-2">
        <li>
          <strong>{t('developmentLabel')}</strong> {t('development')}
        </li>
        <li>
          <strong>{t('automationLabel')}</strong> {t('automation')}
        </li>
        <li>
          <strong>{t('infrastructureLabel')}</strong> {t('infrastructure')}
        </li>
        <li>
          <strong>{t('authLabel')}</strong> {t('auth')}
        </li>
        <li>
          <strong>{t('monitoringLabel')}</strong> {t('monitoring')}
        </li>
      </ul>
    </Section>
  );
}
