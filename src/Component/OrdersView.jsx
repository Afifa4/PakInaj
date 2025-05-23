import Card from "./Card"
import { useState } from "react";
import Button from "./Button";
import Badge from "./Badge";
import {Truck, Phone, Calendar, MapPin, Star, X, Check, Users, Clock } from 'lucide-react';
const OrdersView = ({ orders, t }) => {
  const [activeTab, setActiveTab] = useState('all');
  
  const allOrders = [
    { 
      id: 1, 
      crop: 'Wheat', 
      quantity: '500 kg', 
      buyer: 'Ahmed Traders', 
      status: 'pending', 
      price: 35000,
      date: '2024-01-10',
      location: 'Lahore',
      paymentStatus: 'pending',
      buyerRating: 4.8,
      quality: 'Grade A'
    },
    { 
      id: 2, 
      crop: 'Cotton', 
      quantity: '300 kg', 
      buyer: 'Kareem Mills', 
      status: 'confirmed', 
      price: 63750,
      date: '2024-01-09',
      location: 'Multan',
      paymentStatus: 'partial',
      buyerRating: 4.9,
      quality: 'Grade A'
    },
    { 
      id: 3, 
      crop: 'Rice', 
      quantity: '200 kg', 
      buyer: 'Unity Exports', 
      status: 'delivered', 
      price: 16000,
      date: '2024-01-08',
      location: 'Gujranwala',
      paymentStatus: 'completed',
      buyerRating: 4.7,
      quality: 'Grade B'
    },
    {
      id: 4,
      crop: 'Sugarcane',
      quantity: '1000 kg',
      buyer: 'Sweet Mills Ltd',
      status: 'delivered',
      price: 30000,
      date: '2024-01-07',
      location: 'Faisalabad',
      paymentStatus: 'completed',
      buyerRating: 4.6,
      quality: 'Grade A'
    },
    {
      id: 5,
      crop: 'Maize',
      quantity: '400 kg',
      buyer: 'Feed Industries',
      status: 'cancelled',
      price: 24000,
      date: '2024-01-06',
      location: 'Sahiwal',
      paymentStatus: 'refunded',
      buyerRating: 4.5,
      quality: 'Grade B'
    }
  ];

  const filteredOrders = activeTab === 'all' 
    ? allOrders 
    : allOrders.filter(order => order.status === activeTab);

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      pending: { color: 'warning', icon: Clock, text: t('Pending', 'زیر التواء') },
      confirmed: { color: 'info', icon: Check, text: t('Confirmed', 'تصدیق شدہ') },
      delivered: { color: 'success', icon: Truck, text: t('Delivered', 'ڈیلیور شدہ') },
      cancelled: { color: 'danger', icon: X, text: t('Cancelled', 'منسوخ شدہ') }
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <Badge variant={config.color}>
        <Icon size={14} className="mr-1" />
        {config.text}
      </Badge>
    );
  };

  const PaymentBadge = ({ status }) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      partial: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      refunded: 'bg-gray-100 text-gray-800'
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">{t('My Orders', 'میرے آرڈرز')}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">{t('Total Orders:', 'کل آرڈرز:')}</span>
          <Badge variant="info">{allOrders.length}</Badge>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
        {['all', 'pending', 'confirmed', 'delivered'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              activeTab === tab
                ? 'bg-white text-green-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {t(tab.charAt(0).toUpperCase() + tab.slice(1), tab)}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <Card key={order.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center text-2xl">
                  {order.crop === 'Wheat' && '🌾'}
                  {order.crop === 'Cotton' && '🏵️'}
                  {order.crop === 'Rice' && '🌾'}
                  {order.crop === 'Sugarcane' && '🎋'}
                  {order.crop === 'Maize' && '🌽'}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">
                    {order.crop} - {order.quantity}
                  </h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <Users size={16} />
                    {order.buyer}
                    <span className="flex items-center gap-1 text-sm">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      {order.buyerRating}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                    <MapPin size={14} />
                    {order.location}
                    <span className="mx-2">•</span>
                    <Calendar size={14} />
                    {order.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <StatusBadge status={order.status} />
                <p className="text-2xl font-bold text-green-600 mt-2">
                  PKR {order.price.toLocaleString()}
                </p>
                <PaymentBadge status={order.paymentStatus} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Badge variant="default">{order.quality}</Badge>
              <div className="flex gap-2">
                {order.status === 'pending' && (
                  <>
                    <Button variant="primary" size="sm">
                      {t('Accept', 'قبول کریں')}
                    </Button>
                    <Button variant="secondary" size="sm">
                      {t('Negotiate', 'مذاکرات')}
                    </Button>
                    <Button variant="danger" size="sm">
                      {t('Reject', 'مسترد')}
                    </Button>
                  </>
                )}
                {order.status === 'confirmed' && (
                  <>
                    <Button variant="primary" size="sm">
                      <Phone size={16} className="mr-1" />
                      {t('Contact Buyer', 'خریدار سے رابطہ')}
                    </Button>
                    <Button variant="secondary" size="sm">
                      {t('Track Delivery', 'ڈیلیوری ٹریک کریں')}
                    </Button>
                  </>
                )}
                {order.status === 'delivered' && (
                  <Button variant="primary" size="sm">
                    <Star size={16} className="mr-1" />
                    {t('Rate Buyer', 'خریدار کی درجہ بندی')}
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50">
          <h4 className="text-sm text-gray-600">{t('Total Revenue', 'کل آمدنی')}</h4>
          <p className="text-2xl font-bold text-green-700">
            PKR {allOrders.reduce((sum, order) => sum + (order.status !== 'cancelled' ? order.price : 0), 0).toLocaleString()}
          </p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <h4 className="text-sm text-gray-600">{t('Pending Orders', 'زیر التواء آرڈرز')}</h4>
          <p className="text-2xl font-bold text-blue-700">
            {allOrders.filter(o => o.status === 'pending').length}
          </p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <h4 className="text-sm text-gray-600">{t('Completed', 'مکمل شدہ')}</h4>
          <p className="text-2xl font-bold text-purple-700">
            {allOrders.filter(o => o.status === 'delivered').length}
          </p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-orange-50 to-red-50">
          <h4 className="text-sm text-gray-600">{t('Success Rate', 'کامیابی کی شرح')}</h4>
          <p className="text-2xl font-bold text-orange-700">
            {Math.round((allOrders.filter(o => o.status === 'delivered').length / allOrders.length) * 100)}%
          </p>
        </Card>
      </div>
    </div>
  );
};
export default OrdersView;
