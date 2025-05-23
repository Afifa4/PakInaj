import Card from "./Card.jsx";
import Button from "./Button.jsx"
import { User,ShoppingCart,Shield,Award } from "lucide-react";

const LoginScreen = ({ setCurrentUser, setCurrentView, language, setLanguage, t }) => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
    
    <Card className="relative max-w-md w-full p-8 backdrop-blur-sm bg-white/95">
      <div className="text-center mb-8">
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-2xl">
          🌾
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Pak Inaj</h1>
        <p className="text-gray-600">{t('Empowering Pakistani Farmers', 'پاکستانی کسانوں کو بااختیار بنانا')}</p>
      </div>

      <div className="space-y-4">
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            setCurrentUser({ type: 'farmer', name: 'Muhammad Ali' });
            setCurrentView('dashboard');
          }}
          className="w-full flex items-center justify-center gap-3"
        >
          <User size={22} />
          {t('Login as Farmer', 'کسان کے طور پر لاگ ان کریں')}
        </Button>
        
        <Button
          variant="secondary"
          size="lg"
          onClick={() => {
            setCurrentUser({ type: 'buyer', name: 'Ahmed Traders' });
            setCurrentView('buyerDashboard');
          }}
          className="w-full flex items-center justify-center gap-3"
        >
          <ShoppingCart size={22} />
          {t('Login as Buyer', 'خریدار کے طور پر لاگ ان کریں')}
        </Button>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <button
          onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
          className="text-sm text-gray-600 hover:text-gray-800 font-medium"
        >
          Switch to {language === 'en' ? 'اردو' : 'English'}
        </button>
        
        <div className="flex items-center gap-6 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Shield size={14} /> Secure
          </span>
          <span className="flex items-center gap-1">
            <Award size={14} /> Trusted by 50,000+ farmers
          </span>
        </div>
      </div>
    </Card>
  </div>
);
export default LoginScreen;