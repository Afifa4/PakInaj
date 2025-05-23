import StatCard from "./StatCard";
import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button";
import ActivityItem from "./ActivityItem";
import { User, TrendingUp, Package, DollarSign,Calendar, MapPin, Star,  Check, Users, Camera, Shield, MessageSquare } from 'lucide-react';
const BuyerDashboard = ({ t }) => {
  const availableProduce = [
    { 
      id: 1,
      farmer: 'Ali Hassan', 
      crop: 'Wheat', 
      quantity: '800 kg', 
      price: 2750, 
      quality: 'A', 
      location: 'Sahiwal',
      harvestDate: '2024-01-05',
      images: 3,
      verified: true
    },
    { 
      id: 2,
      farmer: 'Muhammad Akram', 
      crop: 'Cotton', 
      quantity: '500 kg', 
      price: 8300, 
      quality: 'B', 
      location: 'Multan',
      harvestDate: '2024-01-08',
      images: 5,
      verified: true
    },
    { 
      id: 3,
      farmer: 'Rashid Ahmed', 
      crop: 'Rice', 
      quantity: '600 kg', 
      price: 3100, 
      quality: 'A', 
      location: 'Gujranwala',
      harvestDate: '2024-01-10',
      images: 4,
      verified: false
    },
    {
      id: 4,
      farmer: 'Tariq Mahmood',
      crop: 'Sugarcane',
      quantity: '2000 kg',
      price: 280,
      quality: 'A',
      location: 'Faisalabad',
      harvestDate: '2024-01-12',
      images: 2,
      verified: true
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Package}
          title="Total Purchases"
          value="2,450 kg"
          subtext="This month"
          color="blue"
        />
        <StatCard
          icon={Users}
          title="Active Farmers"
          value="23"
          change="+5 new"
          positive={true}
          color="green"
        />
        <StatCard
          icon={DollarSign}
          title="Amount Spent"
          value="PKR 485K"
          subtext="This month"
          color="purple"
        />
        <StatCard
          icon={Star}
          title="Your Rating"
          value="4.8"
          subtext="156 reviews"
          color="orange"
        />
      </div>

      {/* Available Produce */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">{t('Available Produce', 'دستیاب پیداوار')}</h3>
          <div className="flex items-center gap-2">
            <Badge variant="success" className="animate-pulse">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                {availableProduce.length} New
              </span>
            </Badge>
            <Button variant="ghost" size="sm">
              Filter
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {availableProduce.map((item) => (
            <div key={item.id} className="border-2 rounded-xl p-6 hover:border-green-500 transition-all hover:shadow-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center text-3xl">
                    {item.crop === 'Wheat' && '🌾'}
                    {item.crop === 'Cotton' && '🏵️'}
                    {item.crop === 'Rice' && '🌾'}
                    {item.crop === 'Sugarcane' && '🎋'}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg flex items-center gap-2">
                      {item.crop} - {item.quantity}
                      {item.verified && <Shield size={16} className="text-blue-600" />}
                    </h4>
                    <p className="text-gray-600 flex items-center gap-2 mt-1">
                      <User size={16} />
                      {item.farmer}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        Harvest: {item.harvestDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <Camera size={14} />
                        {item.images} photos
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant={item.quality === 'A' ? 'success' : 'warning'}>
                    Grade {item.quality}
                  </Badge>
                  <p className="text-2xl font-bold text-green-600 mt-2">
                    PKR {item.price}/40kg
                  </p>
                  <p className="text-sm text-gray-500">
                    Total: PKR {Math.round((parseInt(item.quantity) / 40) * item.price).toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4 pt-4 border-t">
                <Button variant="primary" size="sm">
                  Make Offer
                </Button>
                <Button variant="secondary" size="sm">
                  <MessageSquare size={16} className="mr-1" />
                  Chat with Farmer
                </Button>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6">
        <h3 className="text-xl font-bold mb-4">{t('Recent Activity', 'حالیہ سرگرمی')}</h3>
        <div className="space-y-3">
          <ActivityItem
            icon={Check}
            title="Purchase Completed"
            description="500kg Cotton from Muhammad Akram"
            time="2 hours ago"
            color="from-green-500 to-emerald-600"
          />
          <ActivityItem
            icon={TrendingUp}
            title="New Listing Alert"
            description="Premium wheat available in your area"
            time="5 hours ago"
            color="from-blue-500 to-indigo-600"
          />
          <ActivityItem
            icon={Star}
            title="Farmer Rated You"
            description="Ali Hassan gave you 5 stars"
            time="Yesterday"
            color="from-yellow-500 to-orange-600"
          />
        </div>
      </Card>
    </div>
  );
};
export default BuyerDashboard;