import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, children, className = '' }: SectionProps) {
  return (
    <section className={`mt-6 print:mt-4 ${className}`}>
      <h3 className="text-lg font-semibold text-primary border-b border-gray-300 pb-1 mb-3">
        {title}
      </h3>
      <div className="text-slate-800">
        {children}
      </div>
    </section>
  );
}
