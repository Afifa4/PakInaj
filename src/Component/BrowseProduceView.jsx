import { useState } from "react";
import Select from "./Select";
import Badge from "./Badge";
import Button from "./Button";
import Card from "./Card";
import { User,  ShoppingCart, Calendar, MapPin, Star, Camera, Shield, MessageSquare } from 'lucide-react';
const BrowseProduceView = ({ t }) => {
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [qualityFilter, setQualityFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  
  const produceListings = [
    {
      id: 1,
      farmer: 'Muhammad Ali',
      farmerRating: 4.9,
      crop: 'Wheat',
      quantity: 1200,
      unit: 'kg',
      quality: 'A',
      price: 2750,
      location: 'Sahiwal',
      distance: '45 km',
      harvestDate: '2024-01-12',
      images: 5,
      description: 'Premium quality wheat, freshly harvested',
      moisture: '12%',
      verified: true,
      organic: true
    },
    {
      id: 2,
      farmer: 'Ahmed Khan',
      farmerRating: 4.7,
      crop: 'Cotton',
      quantity: 800,
      unit: 'kg',
      quality: 'A',
      price: 8400,
      location: 'Multan',
      distance: '120 km',
      harvestDate: '2024-01-10',
      images: 7,
      description: 'High-grade long-staple cotton',
      moisture: '8%',
      verified: true,
      organic: false
    },
    {
      id: 3,
      farmer: 'Rashid Mahmood',
      farmerRating: 4.8,
      crop: 'Rice',
      quantity: 600,
      unit: 'kg',
      quality: 'B',
      price: 3100,
      location: 'Gujranwala',
      distance: '78 km',
      harvestDate: '2024-01-11',
      images: 4,
      description: 'Basmati rice, aromatic variety',
      moisture: '13%',
      verified: true,
      organic: true
    },
    {
      id: 4,
      farmer: 'Tariq Shah',
      farmerRating: 4.6,
      crop: 'Maize',
      quantity: 1500,
      unit: 'kg',
      quality: 'A',
      price: 2400,
      location: 'Sahiwal',
      distance: '52 km',
      harvestDate: '2024-01-09',
      images: 3,
      description: 'Yellow corn, ideal for feed',
      moisture: '14%',
      verified: false,
      organic: false
    }
  ];

  const filteredProduce = produceListings.filter(item => {
    if (selectedCrop !== 'all' && item.crop !== selectedCrop) return false;
    if (qualityFilter !== 'all' && item.quality !== qualityFilter) return false;
    return true;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Browse Fresh Produce</h2>
        <div className="flex items-center gap-2">
          <Badge variant="success" className="animate-pulse">
            {filteredProduce.length} Available
          </Badge>
          <Button variant="secondary" size="sm">
            <MapPin size={16} className="mr-1" />
            Set Location
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Filter Produce</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            <option value="all">All Crops</option>
            <option value="Wheat">🌾 Wheat</option>
            <option value="Cotton">🏵️ Cotton</option>
            <option value="Rice">🌾 Rice</option>
            <option value="Sugarcane">🎋 Sugarcane</option>
            <option value="Maize">🌽 Maize</option>
          </Select>
          
          <Select
            value={qualityFilter}
            onChange={(e) => setQualityFilter(e.target.value)}
          >
            <option value="all">All Qualities</option>
            <option value="A">Grade A</option>
            <option value="B">Grade B</option>
            <option value="C">Grade C</option>
          </Select>
          
          <Select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Below Market Rate</option>
            <option value="market">Market Rate</option>
            <option value="premium">Premium</option>
          </Select>
          
          <Button variant="primary" className="w-full">
            Apply Filters
          </Button>
        </div>
      </Card>

      {/* Produce Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProduce.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-2xl transition-all">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex items-center justify-center text-4xl shadow-inner">
                    {item.crop === 'Wheat' && '🌾'}
                    {item.crop === 'Cotton' && '🏵️'}
                    {item.crop === 'Rice' && '🌾'}
                    {item.crop === 'Maize' && '🌽'}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl flex items-center gap-2">
                      {item.crop}
                      {item.organic && <Badge variant="success">Organic</Badge>}
                    </h3>
                    <p className="text-gray-600 mt-1">{item.quantity} {item.unit} Available</p>
                    <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                  </div>
                </div>
                <Badge variant={item.quality === 'A' ? 'success' : 'warning'}>
                  Grade {item.quality}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <User size={16} className="text-gray-400" />
                    <span className="font-medium">{item.farmer}</span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-500 fill-current" />
                      <span className="text-xs">{item.farmerRating}</span>
                    </div>
                    {item.verified && <Shield size={14} className="text-blue-600" />}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-gray-400" />
                    <span>{item.location} ({item.distance})</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} className="text-gray-400" />
                    <span>Harvested: {item.harvestDate}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">PKR {item.price}</p>
                    <p className="text-sm text-gray-500">per 40kg</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                    <Camera size={16} className="text-gray-400" />
                    <span>{item.images} photos</span>
                  </div>
                  <div className="text-sm text-gray-600 text-right">
                    Moisture: {item.moisture}
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button variant="primary" size="sm" className="flex-1">
                  <ShoppingCart size={16} className="mr-1" />
                  Buy Now
                </Button>
                <Button variant="secondary" size="sm" className="flex-1">
                  Make Offer
                </Button>
                <Button variant="ghost" size="sm">
                  <MessageSquare size={16} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default BrowseProduceView;