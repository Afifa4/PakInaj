import {Badge, TrendingUp, Package, DollarSign, Truck, Star,  Check,  BarChart3, Users, Camera, Wallet,  MessageSquare } from 'lucide-react';
import StatCard from './StatCard';
import Card from './Card';
import ActivityItem from './ActivityItem';
import Button from './Button';


const FarmerDashboard = ({ t, setCurrentView }) => {
  const QuickAction = ({ icon: Icon, label, onClick, color = 'from-gray-50 to-gray-100' }) => (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br ${color} border-2 border-transparent hover:border-green-500 transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}
    >
      <Icon size={28} className="text-gray-700" />
      <span className="text-sm font-medium text-center">{label}</span>
    </button>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={DollarSign}
          title={t('Total Earnings', 'کل آمدنی')}
          value="PKR 114,750"
          change="12.5%"
          positive={true}
          color="green"
        />
        <StatCard
          icon={Package}
          title={t('Active Orders', 'فعال آرڈرز')}
          value="3"
          subtext={t('2 pending', '2 زیر التواء')}
          color="blue"
        />
        <StatCard
          icon={TrendingUp}
          title={t('Best Price Today', 'آج کی بہترین قیمت')}
          value="Wheat"
          subtext="PKR 2,800/40kg"
          color="purple"
        />
        <StatCard
          icon={Users}
          title={t('Trusted Buyers', 'قابل اعتماد خریدار')}
          value="12"
          change="+3 new"
          positive={true}
          color="orange"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity - Takes 2 columns */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800">{t('Recent Activity', 'حالیہ سرگرمی')}</h3>
            <Badge variant="info">Live Updates</Badge>
          </div>
          <div className="space-y-3">
            <ActivityItem
              icon={Check}
              title={t('Order Confirmed', 'آرڈر کی تصدیق')}
              description="300kg Cotton to Kareem Mills - PKR 63,750"
              time="2 hours ago"
              color="from-green-500 to-emerald-600"
            />
            <ActivityItem
              icon={TrendingUp}
              title={t('Price Alert', 'قیمت الرٹ')}
              description="Wheat price increased by 5.2% in Lahore Mandi"
              time="5 hours ago"
              color="from-blue-500 to-indigo-600"
            />
            <ActivityItem
              icon={Truck}
              title={t('Delivery Scheduled', 'ڈیلیوری شیڈول')}
              description="Rice shipment pickup tomorrow at 10:00 AM"
              time="Yesterday"
              color="from-purple-500 to-pink-600"
            />
            <ActivityItem
              icon={Star}
              title={t('New Rating', 'نئی ریٹنگ')}
              description="Unity Exports rated you 5 stars"
              time="2 days ago"
              color="from-yellow-500 to-orange-600"
            />
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">{t('Quick Actions', 'فوری اقدامات')}</h3>
          <div className="grid grid-cols-2 gap-3">
            <QuickAction
              icon={Camera}
              label={t('Scan Produce', 'فصل اسکین کریں')}
              onClick={() => setCurrentView('sell')}
              color="from-green-50 to-emerald-100"
            />
            <QuickAction
              icon={BarChart3}
              label={t('Check Prices', 'قیمتیں چیک کریں')}
              onClick={() => setCurrentView('prices')}
              color="from-blue-50 to-indigo-100"
            />
            <QuickAction
              icon={MessageSquare}
              label={t('Contact Buyer', 'خریدار سے رابطہ')}
              color="from-purple-50 to-pink-100"
            />
            <QuickAction
              icon={Wallet}
              label={t('Apply Loan', 'قرض کی درخواست')}
              onClick={() => setCurrentView('finance')}
              color="from-orange-50 to-red-100"
            />
          </div>
        </Card>
      </div>

      {/* Market Insights */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-800">{t('Market Insights', 'مارکیٹ کی بصیرت')}</h3>
          <Button variant="ghost" size="sm">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <h4 className="font-semibold text-green-800 mb-2">🌾 Wheat Demand High</h4>
            <p className="text-sm text-gray-600">Prices expected to rise 8% next week</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <h4 className="font-semibold text-blue-800 mb-2">🚚 New Transport Route</h4>
            <p className="text-sm text-gray-600">Lahore-Multan express service launched</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <h4 className="font-semibold text-purple-800 mb-2">💰 Loan Approval Fast</h4>
            <p className="text-sm text-gray-600">Get approved in 24 hours</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default FarmerDashboard;