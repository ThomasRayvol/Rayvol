import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Header() {
  const t = useTranslations('header');

  return (
    <header className="mb-8 print:mb-6">
      <div className="flex items-start gap-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-primary border-b-4 border-primary pb-2 mb-2">
            {t('name')}
          </h1>
          <h2 className="text-xl text-slate-700 mt-2">
            {t('title')}
          </h2>
        </div>
        <Image
          src="/img/photo.jpg"
          alt="Thomas Richard"
          width={170}
          height={170}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
    </header>
  );
}
