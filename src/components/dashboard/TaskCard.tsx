import React from 'react';
import { Task } from '../../types';

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="truncate">{task.title}</span>
      <span className="text-red-500">Due {task.dueDate}</span>
    </div>
  );
};

export default TaskCard;