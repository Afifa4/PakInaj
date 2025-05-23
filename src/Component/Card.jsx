
const Card = ({ children, className = '', hover = true }) => (
  <div className={`bg-white rounded-xl shadow-sm ${hover ? 'hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1' : ''} ${className}`}>
    {children}
  </div>
);
export default Card;