import { Package,  X, Home, BarChart3, Users, Settings, LogOut, FileText, Wallet} from 'lucide-react';

const Sidebar = ({ currentUser, currentView, setCurrentView, sidebarOpen, setSidebarOpen, t }) => {
  const SidebarItem = ({ icon: Icon, label, active, onClick, badge }) => (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        active 
          ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium flex-1 text-left">{label}</span>
      {badge && (
        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-white to-gray-50 shadow-2xl transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-6 border-b bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-3xl">🌾</span> Pak Inaj
            </h2>
            <p className="text-sm opacity-90 mt-1">{currentUser?.name}</p>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white hover:bg-white/20 p-2 rounded-lg">
            <X size={24} />
          </button>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {currentUser?.type === 'farmer' ? (
          <>
            <SidebarItem icon={Home} label={t('Dashboard', 'ڈیش بورڈ')} active={currentView === 'dashboard'} onClick={() => setCurrentView('dashboard')} />
            <SidebarItem icon={BarChart3} label={t('Market Prices', 'منڈی کی قیمتیں')} onClick={() => setCurrentView('prices')} badge="Live" />
            <SidebarItem icon={Package} label={t('Sell Produce', 'فصل فروخت کریں')} onClick={() => setCurrentView('sell')} />
            <SidebarItem icon={FileText} label={t('My Orders', 'میرے آرڈرز')} onClick={() => setCurrentView('orders')} badge="3" />
            <SidebarItem icon={Wallet} label={t('Financial Services', 'مالیاتی خدمات')} onClick={() => setCurrentView('finance')} />
            <SidebarItem icon={Users} label={t('Buyers Network', 'خریداروں کا نیٹ ورک')} onClick={() => setCurrentView('buyers')} />
          </>
        ) : (
          <>
            <SidebarItem icon={Home} label="Dashboard" active={currentView === 'buyerDashboard'} onClick={() => setCurrentView('buyerDashboard')} />
            <SidebarItem icon={Package} label="Browse Produce" onClick={() => setCurrentView('browse')} badge="New" />
            <SidebarItem icon={FileText} label="My Purchases" onClick={() => setCurrentView('purchases')} />
            <SidebarItem icon={Users} label="Farmer Network" onClick={() => setCurrentView('farmers')} />
          </>
        )}
        
        <div className="mt-8 pt-8 border-t">
          <SidebarItem icon={Settings} label={t('Settings', 'ترتیبات')} />
          <SidebarItem icon={LogOut} label={t('Logout', 'لاگ آوٹ')} onClick={() => {
            setCurrentUser(null);
            setCurrentView('login');
            setSidebarOpen(false);
          }} />
        </div>
      </nav>
    </div>
  );
};
export default Sidebar;