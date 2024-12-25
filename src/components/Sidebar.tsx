import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Users,
  Search,
  Settings
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t } = useTranslation();

  const navItems = [
    { icon: LayoutDashboard, label: t('navigation.dashboard'), path: '/' },
    { icon: Calendar, label: t('navigation.calendar'), path: '/calendar' },
    { icon: CheckSquare, label: t('navigation.tasks'), path: '/tasks' },
    { icon: FileText, label: t('navigation.documents'), path: '/documents' },
    { icon: Users, label: t('navigation.clients'), path: '/clients' },
    { icon: Search, label: t('navigation.research'), path: '/research' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 px-3 py-4 flex flex-col">
      <div className="mb-8 px-4">
        <h1 className="text-xl font-bold text-gray-800">{t('app.name')}</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 text-sm rounded-lg ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto">
        <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg w-full">
          <Settings className="w-5 h-5 mr-3" />
          {t('navigation.settings')}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;