import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © {currentYear} {t('app.name')}. {t('footer.rights')}
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
              {t('footer.support')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;