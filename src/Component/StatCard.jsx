import Card from "./Card";
const StatCard = ({ icon: Icon, title, value, change, subtext, positive, color = 'green' }) => {
  const colors = {
    green: 'from-green-500 to-emerald-600',
    blue: 'from-blue-500 to-indigo-600',
    purple: 'from-purple-500 to-pink-600',
    orange: 'from-orange-500 to-red-600'
  };

  return (
    <Card className="p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 bg-gradient-to-br ${colors[color]} rounded-xl shadow-lg`}>
            <Icon size={24} className="text-white" />
          </div>
          {change && (
            <span className={`text-sm font-bold ${positive ? 'text-green-600' : 'text-red-600'} flex items-center`}>
              {positive ? '↑' : '↓'} {change}
            </span>
          )}
        </div>
        <h3 className="text-sm text-gray-600 font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
        {subtext && <p className="text-sm text-gray-500 mt-1">{subtext}</p>}
      </div>
    </Card>
  );
};

export default StatCard;