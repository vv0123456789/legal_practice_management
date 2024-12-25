import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useStore } from '../../store';

const Header = () => {
  const { t } = useTranslation();
  const user = useStore((state) => state.user);

  return (
    <header className="bg-white border-b border-gray-200 px-4 h-16 flex items-center justify-between">
      <div className="flex items-center flex-1">
        <div className="max-w-md w-full lg:max-w-xs">
          <label htmlFor="search" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="search"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder={t('common.search')}
              type="search"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-1 rounded-full text-gray-400 hover:text-gray-500">
          <Bell className="h-6 w-6" />
        </button>
        
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src={user?.avatar}
              alt={user?.name}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;