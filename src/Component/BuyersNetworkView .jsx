import { Users, MapPin, Star,  Wallet, Shield, Clock, MessageSquare } from 'lucide-react';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import Select from './Select';
import Badge from './Badge';
const BuyersNetworkView = ({ t }) => {
  const buyers = [
    { 
      id: 1,
      name: 'Ahmed Traders', 
      rating: 4.8, 
      deals: 156, 
      crops: ['Wheat', 'Rice'], 
      verified: true,
      location: 'Lahore',
      responseTime: '< 1 hour',
      paymentTerms: 'Immediate',
      speciality: 'Premium quality wheat'
    },
    { 
      id: 2,
      name: 'Kareem Mills', 
      rating: 4.9, 
      deals: 203, 
      crops: ['Cotton'], 
      verified: true,
      location: 'Multan',
      responseTime: '< 2 hours',
      paymentTerms: '50% advance',
      speciality: 'High-grade cotton'
    },
    { 
      id: 3,
      name: 'Unity Exports', 
      rating: 4.7, 
      deals: 89, 
      crops: ['Rice', 'Maize'], 
      verified: true,
      location: 'Gujranwala',
      responseTime: '< 30 min',
      paymentTerms: 'On delivery',
      speciality: 'Export quality rice'
    },
    { 
      id: 4,
      name: 'Pak Agro Industries', 
      rating: 4.6, 
      deals: 124, 
      crops: ['Sugarcane', 'Wheat'], 
      verified: false,
      location: 'Faisalabad',
      responseTime: '< 3 hours',
      paymentTerms: 'Weekly settlement',
      speciality: 'Bulk purchases'
    },
    { 
      id: 5,
      name: 'Green Valley Traders', 
      rating: 4.9, 
      deals: 178, 
      crops: ['All Crops'], 
      verified: true,
      location: 'Sahiwal',
      responseTime: '< 1 hour',
      paymentTerms: 'Flexible',
      speciality: 'Fair pricing'
    },
    { 
      id: 6,
      name: 'Premium Commodities', 
      rating: 4.5, 
      deals: 67, 
      crops: ['Cotton', 'Wheat'], 
      verified: true,
      location: 'Rawalpindi',
      responseTime: '< 4 hours',
      paymentTerms: '30% advance',
      speciality: 'Long-term contracts'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">{t('Trusted Buyers Network', 'قابل اعتماد خریداروں کا نیٹ ورک')}</h2>
        <Button variant="primary">
          <Users size={20} className="mr-2" />
          {t('Invite Buyer', 'خریدار کو دعوت دیں')}
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            placeholder={t('Search buyers...', 'خریدار تلاش کریں...')}
            icon={Users}
          />
          <Select>
            <option>{t('All Crops', 'تمام فصلیں')}</option>
            <option>Wheat</option>
            <option>Cotton</option>
            <option>Rice</option>
          </Select>
          <Select>
            <option>{t('All Locations', 'تمام مقامات')}</option>
            <option>Lahore</option>
            <option>Multan</option>
            <option>Faisalabad</option>
          </Select>
          <Select>
            <option>{t('Sort by Rating', 'درجہ بندی کے مطابق')}</option>
            <option>{t('Sort by Deals', 'سودوں کے مطابق')}</option>
            <option>{t('Sort by Response Time', 'جواب کے وقت کے مطابق')}</option>
          </Select>
        </div>
      </Card>

      {/* Buyers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buyers.map((buyer) => (
          <Card key={buyer.id} className="p-6 hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  {buyer.name}
                  {buyer.verified && (
                    <Badge variant="info">
                      <Shield size={14} className="mr-1" />
                      Verified
                    </Badge>
                  )}
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500 fill-current" />
                    <span className="font-semibold">{buyer.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({buyer.deals} deals)</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-gray-400" />
                <span>{buyer.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} className="text-gray-400" />
                <span>Response: {buyer.responseTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Wallet size={16} className="text-gray-400" />
                <span>{buyer.paymentTerms}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">{t('Interested in:', 'دلچسپی:')}</p>
              <div className="flex flex-wrap gap-2">
                {buyer.crops.map((crop, i) => (
                  <Badge key={i} variant="default">
                    {crop}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600">{t('Speciality', 'خصوصیت')}</p>
              <p className="text-sm font-medium">{buyer.speciality}</p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="primary" size="sm" className="w-full">
                <MessageSquare size={16} className="mr-1" />
                {t('Contact', 'رابطہ')}
              </Button>
              <Button variant="secondary" size="sm" className="w-full">
                {t('View Profile', 'پروفائل دیکھیں')}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default BuyersNetworkView;