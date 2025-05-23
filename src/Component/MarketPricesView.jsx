import {  MapPin  } from 'lucide-react';
import Badge from './Badge';
import Card from './Card';
import Button from './Button';
const MarketPricesView = ({ marketPrices, t, setCurrentView }) => (
  <div className="p-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold text-gray-800">{t('Live Market Prices', 'منڈی کی لائیو قیمتیں')}</h2>
      <Badge variant="success" className="animate-pulse">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-600 rounded-full animate-ping"></span>
          Live
        </span>
      </Badge>
    </div>
    
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">{t('Crop', 'فصل')}</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">{t('Current Price', 'موجودہ قیمت')}</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">{t('24h Change', '24 گھنٹے کی تبدیلی')}</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">{t('Market', 'منڈی')}</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">{t('Action', 'عمل')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {marketPrices.map((item) => (
              <tr key={item.id} className="hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center text-lg">
                      {item.crop === 'Wheat' && '🌾'}
                      {item.crop === 'Cotton' && '🏵️'}
                      {item.crop === 'Rice' && '🌾'}
                      {item.crop === 'Sugarcane' && '🎋'}
                      {item.crop === 'Maize' && '🌽'}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.crop}</div>
                      <div className="text-xs text-gray-500">Premium Quality</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-xl text-gray-900">PKR {item.price}</div>
                  <div className="text-sm text-gray-500">{item.unit}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Badge variant={item.change > 0 ? 'success' : 'danger'}>
                      {item.change > 0 ? '↑' : '↓'} {Math.abs(item.change)}%
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {item.change > 0 ? '+' : '-'}PKR {Math.abs(item.price * item.change / 100).toFixed(0)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-gray-700">{item.city}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setCurrentView('sell')}
                  >
                    {t('Sell Now', 'ابھی بیچیں')}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>

    {/* Price Trends */}
    <Card className="mt-6 p-6">
      <h3 className="text-xl font-bold mb-4">Price Trends & Predictions</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['Wheat', 'Cotton', 'Rice', 'Sugarcane'].map((crop) => (
          <div key={crop} className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
            <h4 className="font-semibold text-gray-800">{crop}</h4>
            <p className="text-sm text-gray-600 mt-1">Next Week: <span className="text-green-600 font-bold">+3-5%</span></p>
            <div className="mt-2 h-12 bg-gradient-to-r from-green-200 to-green-400 rounded opacity-50"></div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);
export default MarketPricesView;