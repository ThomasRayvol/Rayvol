import { useTranslations } from 'next-intl';

export function Intro() {
  const t = useTranslations('intro');

  return (
    <section className="my-6 print:my-4">
      <p className="text-slate-700 leading-relaxed">
        {t('description')}
      </p>
    </section>
  );
}
