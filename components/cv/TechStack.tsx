import { useTranslations } from 'next-intl';
import { Section } from './Section';

export function TechStack() {
  const t = useTranslations('stack');

  return (
    <Section title={t('title')}>
      <ul className="space-y-2">
        <li>
          <strong>Développement :</strong> {t('development')}
        </li>
        <li>
          <strong>Automatisation & IaC :</strong> {t('automation')}
        </li>
        <li>
          <strong>Infrastructure & Réseau :</strong> {t('infrastructure')}
        </li>
        <li>
          <strong>Authentification & SSO :</strong> {t('auth')}
        </li>
        <li>
          <strong>Monitoring :</strong> {t('monitoring')}
        </li>
      </ul>
    </Section>
  );
}
