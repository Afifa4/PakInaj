
import { useState,useEffect } from "react";
import FarmerDashboard from "./Component/FarmerDashboard.jsx";
import Header from "./Component/Header.jsx";
import LoginScreen from "./Component/LoginScreen.jsx";
import MarketPricesView from "./Component/MarketPricesView.jsx";
import SellProduceView from "./Component/SellProduceView.jsx";
import Sidebar from "./Component/Sidebar.jsx";
import OrdersView from "./Component/OrdersView.jsx";
import FinancialServicesView from "./Component/FinancialServicesView.jsx";
import BuyersNetworkView from "./Component/BuyersNetworkView .jsx"
import BuyerDashboard from "./Component/BuyerDashboard.jsx";
import BrowseProduceView from "./Component/BrowseProduceView.jsx";
import MyPurchasesView from "./Component/MyPurchasesView.jsx";
import FarmerNetworkView from "./Component/FarmerNetworkView.jsx";

import { User, TrendingUp, Package, DollarSign, Truck, Phone, Mic, MicOff, ShoppingCart, Calendar, MapPin, Star, Bell, Menu, X, ChevronRight, Check, AlertCircle, Home, BarChart3, Users, Settings, LogOut, Camera, Upload, FileText, Wallet, Shield, Clock, Award, MessageSquare } from 'lucide-react';

const App = () => {
   const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [language, setLanguage] = useState('en');
  const [isRecording, setIsRecording] = useState(false);
  const [marketPrices, setMarketPrices] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loans, setLoans] = useState([]);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New buyer interested in your wheat', time: '2 hours ago', unread: true },
    { id: 2, message: 'Price update: Cotton prices increased by 5%', time: '5 hours ago', unread: true }
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Translation helper
  const t = (en, ur) => language === 'en' ? en : ur;

  // Initialize mock data
  useEffect(() => {
    setMarketPrices([
      { id: 1, crop: 'Wheat', price: 2800, unit: 'per 40kg', change: 5.2, city: 'Lahore' },
      { id: 2, crop: 'Cotton', price: 8500, unit: 'per 40kg', change: -2.1, city: 'Multan' },
      { id: 3, crop: 'Rice', price: 3200, unit: 'per 40kg', change: 3.5, city: 'Gujranwala' },
      { id: 4, crop: 'Sugarcane', price: 300, unit: 'per 40kg', change: 1.8, city: 'Faisalabad' },
      { id: 5, crop: 'Maize', price: 2400, unit: 'per 40kg', change: -1.5, city: 'Sahiwal' }
    ]);

    setOrders([
      { id: 1, crop: 'Wheat', quantity: '500 kg', buyer: 'Ahmed Traders', status: 'pending', price: 35000 },
      { id: 2, crop: 'Cotton', quantity: '300 kg', buyer: 'Kareem Mills', status: 'confirmed', price: 63750 },
      { id: 3, crop: 'Rice', quantity: '200 kg', buyer: 'Unity Exports', status: 'delivered', price: 16000 }
    ]);

    setLoans([
      { id: 1, amount: 50000, purpose: 'Seeds & Fertilizer', rate: 12, status: 'approved' },
      { id: 2, amount: 30000, purpose: 'Equipment', rate: 10, status: 'pending' }
    ]);
  }, []);

  // Voice recording simulation
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
      }, 3000);
    }
  };

  // Render login screen if no user
  if (!currentUser) {
    return (
      <LoginScreen
        setCurrentUser={setCurrentUser}
        setCurrentView={setCurrentView}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
    );
  }

  // Main app layout
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar
        currentUser={currentUser}
        currentView={currentView}
        setCurrentView={setCurrentView}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        t={t}
      />
      
      <div className="lg:ml-72">
        <Header
          isRecording={isRecording}
          toggleRecording={toggleRecording}
          notifications={notifications}
          language={language}
          setLanguage={setLanguage}
          setSidebarOpen={setSidebarOpen}
        />
        
        <main className="min-h-screen">
          {currentView === 'dashboard' && <FarmerDashboard t={t} setCurrentView={setCurrentView} />}
          {currentView === 'prices' && <MarketPricesView marketPrices={marketPrices} t={t} setCurrentView={setCurrentView} />}
          {currentView === 'sell' && <SellProduceView t={t} />}
          {currentView === 'orders' && <OrdersView orders={orders} t={t} />}
          {currentView === 'finance' && <FinancialServicesView loans={loans} t={t} />}
          {currentView === 'buyers' && <BuyersNetworkView t={t} />}
          {currentView === 'buyerDashboard' && <BuyerDashboard t={t} />}
          {currentView === 'browse' && <BrowseProduceView t={t} />}
          {currentView === 'purchases' && <MyPurchasesView t={t} />}
          {currentView === 'farmers' && <FarmerNetworkView t={t} />}
        </main>
      </div>
      
      {/* Voice Recording Indicator */}
      {isRecording && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full shadow-2xl animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
            <span className="font-medium">{t('Listening...', 'سن رہا ہے...')}</span>
          </div>
        </div>
      )}
    </div>
  );
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(style);

export default App;