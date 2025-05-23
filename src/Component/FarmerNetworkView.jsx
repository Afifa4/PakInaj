import { useState } from "react";
import { Users, MapPin, Star,  Shield, Award, MessageSquare } from 'lucide-react';
import Badge from "./Badge";
import Card from "./Card";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
const FarmerNetworkView = ({ t }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cropFilter, setCropFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');

  const farmers = [
    {
      id: 1,
      name: 'Muhammad Ali',
      location: 'Sahiwal',
      rating: 4.9,
      totalDeals: 234,
      memberSince: '2022',
      crops: ['Wheat', 'Rice', 'Maize'],
      avgResponseTime: '< 30 min',
      verified: true,
      certifications: ['Organic', 'GAP Certified'],
      description: 'Third-generation farmer specializing in organic wheat production',
      successRate: 98,
      repeatBuyers: 45
    },
    {
      id: 2,
      name: 'Ahmed Khan',
      location: 'Multan',
      rating: 4.8,
      totalDeals: 189,
      memberSince: '2021',
      crops: ['Cotton', 'Wheat'],
      avgResponseTime: '< 1 hour',
      verified: true,
      certifications: ['ISO Certified'],
      description: 'Premium cotton producer with modern farming techniques',
      successRate: 96,
      repeatBuyers: 38
    },
    {
      id: 3,
      name: 'Rashid Mahmood',
      location: 'Gujranwala',
      rating: 4.7,
      totalDeals: 156,
      memberSince: '2023',
      crops: ['Rice', 'Sugarcane'],
      avgResponseTime: '< 2 hours',
      verified: true,
      certifications: ['Organic'],
      description: 'Specializes in Basmati rice and organic farming',
      successRate: 94,
      repeatBuyers: 29
    },
    {
      id: 4,
      name: 'Tariq Shah',
      location: 'Faisalabad',
      rating: 4.6,
      totalDeals: 98,
      memberSince: '2023',
      crops: ['Sugarcane', 'Maize'],
      avgResponseTime: '< 3 hours',
      verified: false,
      certifications: [],
      description: 'Large-scale sugarcane producer with processing facilities',
      successRate: 92,
      repeatBuyers: 22
    },
    {
      id: 5,
      name: 'Hassan Ahmed',
      location: 'Lahore',
      rating: 4.9,
      totalDeals: 312,
      memberSince: '2020',
      crops: ['Wheat', 'Cotton', 'Rice'],
      avgResponseTime: '< 1 hour',
      verified: true,
      certifications: ['Organic', 'Fair Trade'],
      description: 'Award-winning farmer with sustainable farming practices',
      successRate: 99,
      repeatBuyers: 67
    }
  ];

  const filteredFarmers = farmers.filter(farmer => {
    if (searchTerm && !farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !farmer.location.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (cropFilter !== 'all' && !farmer.crops.includes(cropFilter)) return false;
    if (ratingFilter !== 'all' && farmer.rating < parseFloat(ratingFilter)) return false;
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Farmer Network</h2>
        <div className="flex items-center gap-2">
          <Badge variant="info">{filteredFarmers.length} Farmers</Badge>
          <Button variant="primary">
            <Users size={16} className="mr-1" />
            Invite Farmers
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            placeholder="Search farmers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            icon={Users}
          />
          <Select
            value={cropFilter}
            onChange={(e) => setCropFilter(e.target.value)}
          >
            <option value="all">All Crops</option>
            <option value="Wheat">Wheat</option>
            <option value="Cotton">Cotton</option>
            <option value="Rice">Rice</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Maize">Maize</option>
          </Select>
          <Select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
          >
            <option value="all">All Ratings</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.7">4.7+ Stars</option>
            <option value="4.9">4.9+ Stars</option>
          </Select>
          <Button variant="secondary" className="w-full">
            Clear Filters
          </Button>
        </div>
      </Card>

      {/* Farmers List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredFarmers.map((farmer) => (
          <Card key={farmer.id} className="p-6 hover:shadow-xl transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {farmer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    {farmer.name}
                    {farmer.verified && (
                      <Badge variant="info">
                        <Shield size={14} className="mr-1" />
                        Verified
                      </Badge>
                    )}
                  </h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin size={16} />
                    {farmer.location}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500 fill-current" />
                      <span className="font-semibold">{farmer.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">|</span>
                    <span className="text-sm text-gray-600">{farmer.totalDeals} deals</span>
                    <span className="text-sm text-gray-500">|</span>
                    <span className="text-sm text-gray-600">Since {farmer.memberSince}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{farmer.description}</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Success Rate</span>
                <span className="font-semibold text-green-600">{farmer.successRate}%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Response Time</span>
                <span className="font-semibold">{farmer.avgResponseTime}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Repeat Buyers</span>
                <span className="font-semibold">{farmer.repeatBuyers}</span>
              </div>
            </div>

            <div className="space-y-3 border-t pt-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Crops</p>
                <div className="flex flex-wrap gap-2">
                  {farmer.crops.map((crop, i) => (
                    <Badge key={i} variant="default">{crop}</Badge>
                  ))}
                </div>
              </div>
              
              {farmer.certifications.length > 0 && (
                <div>
                  <p className="text-sm text-gray-600 mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {farmer.certifications.map((cert, i) => (
                      <Badge key={i} variant="success">
                        <Award size={12} className="mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t">
              <Button variant="primary" size="sm" className="flex-1">
                <MessageSquare size={16} className="mr-1" />
                Contact
              </Button>
              <Button variant="secondary" size="sm" className="flex-1">
                View Profile
              </Button>
              <Button variant="ghost" size="sm">
                <Star size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default FarmerNetworkView;