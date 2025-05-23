import { ChevronRight } from 'lucide-react';
const Select = ({ label, icon: Icon, children, ...props }) => (
  <div>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
    )}
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
      )}
      <select
        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white transition-all duration-200`}
        {...props}
      >
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <ChevronRight className="h-5 w-5 text-gray-400 rotate-90" />
      </div>
    </div>
  </div>
);
export default Select;