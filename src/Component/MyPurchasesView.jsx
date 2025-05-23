import { useState } from "react";
import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button"
import { User,Truck, Star, X, Check,  FileText, Clock, MessageSquare } from 'lucide-react';
const MyPurchasesView = ({ t }) => {
  const [activeTab, setActiveTab] = useState('all');
  
  const purchases = [
    {
      id: 1,
      orderNumber: 'ORD-2024-001',
      crop: 'Cotton',
      quantity: 500,
      unit: 'kg',
      farmer: 'Muhammad Akram',
      farmerRating: 4.9,
      price: 63750,
      status: 'delivered',
      orderDate: '2024-01-05',
      deliveryDate: '2024-01-08',
      quality: 'A',
      paymentStatus: 'completed',
      invoice: true
    },
    {
      id: 2,
      orderNumber: 'ORD-2024-002',
      crop: 'Wheat',
      quantity: 800,
      unit: 'kg',
      farmer: 'Ali Hassan',
      farmerRating: 4.8,
      price: 56000,
      status: 'in-transit',
      orderDate: '2024-01-10',
      deliveryDate: '2024-01-13',
      quality: 'A',
      paymentStatus: 'partial',
      invoice: true
    },
    {
      id: 3,
      orderNumber: 'ORD-2024-003',
      crop: 'Rice',
      quantity: 600,
      unit: 'kg',
      farmer: 'Rashid Ahmed',
      farmerRating: 4.7,
      price: 48000,
      status: 'processing',
      orderDate: '2024-01-12',
      deliveryDate: '2024-01-15',
      quality: 'B',
      paymentStatus: 'pending',
      invoice: false
    },
    {
      id: 4,
      orderNumber: 'ORD-2024-004',
      crop: 'Sugarcane',
      quantity: 2000,
      unit: 'kg',
      farmer: 'Tariq Mahmood',
      farmerRating: 4.6,
      price: 30000,
      status: 'delivered',
      orderDate: '2023-12-28',
      deliveryDate: '2024-01-02',
      quality: 'A',
      paymentStatus: 'completed',
      invoice: true
    }
  ];

  const filteredPurchases = activeTab === 'all' 
    ? purchases 
    : purchases.filter(p => p.status === activeTab);

  const StatusIcon = ({ status }) => {
    const icons = {
      'processing': Clock,
      'in-transit': Truck,
      'delivered': Check,
      'cancelled': X
    };
    const Icon = icons[status];
    return <Icon size={16} />;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">My Purchases</h2>
        <Button variant="secondary">
          <FileText size={16} className="mr-1" />
          Export Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50">
          <h4 className="text-sm text-gray-600">Total Purchases</h4>
          <p className="text-2xl font-bold text-green-700">{purchases.length}</p>
          <p className="text-xs text-gray-500 mt-1">This month</p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
          <h4 className="text-sm text-gray-600">Total Spent</h4>
          <p className="text-2xl font-bold text-blue-700">
            PKR {purchases.reduce((sum, p) => sum + p.price, 0).toLocaleString()}
          </p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <h4 className="text-sm text-gray-600">In Transit</h4>
          <p className="text-2xl font-bold text-purple-700">
            {purchases.filter(p => p.status === 'in-transit').length}
          </p>
        </Card>
        <Card className="p-4 bg-gradient-to-br from-orange-50 to-red-50">
          <h4 className="text-sm text-gray-600">Pending Payment</h4>
          <p className="text-2xl font-bold text-orange-700">
            {purchases.filter(p => p.paymentStatus === 'pending').length}
          </p>
        </Card>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
        {['all', 'processing', 'in-transit', 'delivered'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
              activeTab === tab
                ? 'bg-white text-green-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.split('-').join(' ').slice(1)}
          </button>
        ))}
      </div>

      {/* Purchase List */}
      <div className="space-y-4">
        {filteredPurchases.map((purchase) => (
          <Card key={purchase.id} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center text-2xl">
                  {purchase.crop === 'Wheat' && '🌾'}
                  {purchase.crop === 'Cotton' && '🏵️'}
                  {purchase.crop === 'Rice' && '🌾'}
                  {purchase.crop === 'Sugarcane' && '🎋'}
                </div>
                <div>
                  <h3 className="font-bold text-lg">
                    {purchase.crop} - {purchase.quantity} {purchase.unit}
                  </h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    Order #{purchase.orderNumber}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {purchase.farmer}
                      <Star size={12} className="text-yellow-500 fill-current ml-1" />
                      {purchase.farmerRating}
                    </span>
                    <span>Grade {purchase.quality}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge variant={
                  purchase.status === 'delivered' ? 'success' : 
                  purchase.status === 'in-transit' ? 'info' : 'warning'
                }>
                  <StatusIcon status={purchase.status} />
                  <span className="ml-1">
                    {purchase.status.charAt(0).toUpperCase() + purchase.status.split('-').join(' ').slice(1)}
                  </span>
                </Badge>
                <p className="text-2xl font-bold text-green-600 mt-2">
                  PKR {purchase.price.toLocaleString()}
                </p>
                <Badge variant={
                  purchase.paymentStatus === 'completed' ? 'success' : 
                  purchase.paymentStatus === 'partial' ? 'info' : 'warning'
                } className="mt-1">
                  Payment: {purchase.paymentStatus}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y">
              <div>
                <p className="text-xs text-gray-500">Order Date</p>
                <p className="font-medium">{purchase.orderDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Delivery Date</p>
                <p className="font-medium">{purchase.deliveryDate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Unit Price</p>
                <p className="font-medium">PKR {(purchase.price / (purchase.quantity / 40)).toFixed(0)}/40kg</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Invoice</p>
                <p className="font-medium">{purchase.invoice ? 'Available' : 'Pending'}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              {purchase.status === 'in-transit' && (
                <Button variant="primary" size="sm">
                  <Truck size={16} className="mr-1" />
                  Track Shipment
                </Button>
              )}
              {purchase.status === 'delivered' && (
                <>
                  <Button variant="primary" size="sm">
                    <Star size={16} className="mr-1" />
                    Rate Farmer
                  </Button>
                  <Button variant="secondary" size="sm">
                    Re-order
                  </Button>
                </>
              )}
              {purchase.invoice && (
                <Button variant="ghost" size="sm">
                  <FileText size={16} className="mr-1" />
                  Download Invoice
                </Button>
              )}
              <Button variant="ghost" size="sm">
                <MessageSquare size={16} className="mr-1" />
                Contact Farmer
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default MyPurchasesView;