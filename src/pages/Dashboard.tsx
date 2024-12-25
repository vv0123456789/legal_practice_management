import React from 'react';
import { useStore } from '../store';
import { Calendar, AlertCircle } from 'lucide-react';
import CaseCard from '../components/dashboard/CaseCard';
import TaskCard from '../components/dashboard/TaskCard';
import QuickActions from '../components/dashboard/QuickActions';

const Dashboard = () => {
  const { cases, tasks } = useStore();
  
  const activeCases = cases.filter((c) => c.status === 'active');
  const upcomingTasks = tasks
    .filter((t) => t.status !== 'completed')
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .slice(0, 5);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Active Cases</h3>
            <span className="text-2xl font-bold text-blue-600">{activeCases.length}</span>
          </div>
          <div className="space-y-3">
            {activeCases.slice(0, 3).map((case_) => (
              <CaseCard key={case_.id} case_={case_} />
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <Calendar className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="font-semibold text-gray-900">Upcoming Hearings</h3>
          </div>
          <div className="space-y-3">
            {cases
              .filter((c) => c.nextHearing)
              .slice(0, 3)
              .map((case_) => (
                <div key={case_.id} className="flex items-center justify-between text-sm">
                  <span className="truncate">{case_.title}</span>
                  <span className="text-gray-500">{case_.nextHearing}</span>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center mb-4">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <h3 className="font-semibold text-gray-900">Priority Tasks</h3>
          </div>
          <div className="space-y-3">
            {upcomingTasks
              .filter((t) => t.priority === 'high')
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
          {/* Add recent activity timeline here */}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;