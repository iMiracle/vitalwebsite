import {useTranslations} from 'next-intl';

const Footer: React.FC = async () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const t = useTranslations('Footer');


  return (
    <footer>
      <div className="space-y-2 pt-6 pb-4 flex flex-col items-center bg-black text-sm text-gray-400">
        <div className="flex space-x-2">
          <div>{`©${currentYear}`}</div>{" "}
          <div>{t('description')}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

