import { useTranslations } from 'next-intl';
import { Section } from './Section';

export function Experience() {
  const t = useTranslations('experience');

  // Get all job experiences
  const jobs = t.raw('jobs') as Array<{
    period: string;
    company: string;
    roles: string[];
  }>;

  return (
    <Section title={t('title')}>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div key={index} className="border-l-2 border-slate-300 pl-4">
            <div className="font-semibold text-slate-800">{job.company}</div>
            <div className="text-sm text-slate-500 mb-2">{job.period}</div>
            {job.roles.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-sm">
                {job.roles.map((role, roleIndex) => (
                  <li key={roleIndex}>{role}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
