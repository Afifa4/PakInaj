import {  Clock } from 'lucide-react';

const ActivityItem = ({ icon: Icon, title, description, time, color }) => (
  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${color} shadow-md`}>
      <Icon size={18} className="text-white" />
    </div>
    <div className="flex-1">
      <h4 className="font-semibold text-gray-800">{title}</h4>
      <p className="text-sm text-gray-600 mt-0.5">{description}</p>
      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
        <Clock size={12} /> {time}
      </p>
    </div>
  </div>
);
export default ActivityItem;