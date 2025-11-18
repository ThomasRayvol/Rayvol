import { useTranslations } from 'next-intl';
import { Section } from './Section';

export function Projects() {
  const t = useTranslations('projects');
  const c = useTranslations('common');

  // Get project data
  const aigenda = t.raw('aigenda') as {
    title: string;
    subtitle: string;
    description: string;
    result: string;
    tech: {
      frontend: string;
      app: string;
      backend: string;
      infra: string;
      cicd: string;
    };
    objective: string;
    status: string;
  };

  const infrahaste = t.raw('infrahaste') as {
    title: string;
    subtitle: string;
    description: string;
    result: string;
    tech: string[];
    objective: string;
    status: string;
  };

  return (
    <div className="space-y-6">
      {/* AiGenda Project */}
      <Section title={aigenda.title}>
        <div className="space-y-3">
          <p className="font-semibold text-slate-700">{aigenda.subtitle}</p>
          <p className="text-sm">{aigenda.description}</p>

          <div className="bg-slate-50 p-3 rounded">
            <p className="text-sm"><strong>{c('result')} :</strong> {aigenda.result}</p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-2">{c('technologies')} :</p>
            <ul className="text-xs space-y-1">
              <li><strong>Frontend :</strong> {aigenda.tech.frontend}</li>
              <li><strong>App mobile :</strong> {aigenda.tech.app}</li>
              <li><strong>Backend :</strong> {aigenda.tech.backend}</li>
              <li><strong>Infrastructure :</strong> {aigenda.tech.infra}</li>
              <li><strong>CI/CD :</strong> {aigenda.tech.cicd}</li>
            </ul>
          </div>

          <p className="text-sm italic text-slate-600">
            <strong>{c('objective')} :</strong> {aigenda.objective}
          </p>

          <p className="text-xs text-slate-500">
            <strong>{c('status')} :</strong> {aigenda.status}
          </p>
        </div>
      </Section>

      {/* Infrahaste Project */}
      <Section title={infrahaste.title}>
        <div className="space-y-3">
          <p className="font-semibold text-slate-700">{infrahaste.subtitle}</p>
          <p className="text-sm">{infrahaste.description}</p>

          <div className="bg-slate-50 p-3 rounded">
            <p className="text-sm"><strong>{c('result')} :</strong> {infrahaste.result}</p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-2">{c('technologies')} :</p>
            <ul className="text-xs space-y-1 list-disc list-inside">
              {infrahaste.tech.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <p className="text-sm italic text-slate-600">
            <strong>{c('objective')} :</strong> {infrahaste.objective}
          </p>

          <p className="text-xs text-slate-500">
            <strong>{c('status')} :</strong> {infrahaste.status}
          </p>
        </div>
      </Section>
    </div>
  );
}
