
const Badge = ({ variant = 'default', children }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200',
    warning: 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border border-yellow-200',
    danger: 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border border-red-200',
    info: 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;