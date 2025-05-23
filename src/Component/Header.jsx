import {  Mic, MicOff, Bell, Menu, BarChart3 } from 'lucide-react';
const Header = ({ isRecording, toggleRecording, notifications, language, setLanguage, setSidebarOpen }) => (
  <header className="bg-white shadow-lg border-b px-4 py-4">
    <div className="flex items-center justify-between">
      <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
        <Menu size={24} />
      </button>
      
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search crops, buyers, orders..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button
          onClick={toggleRecording}
          className={`p-3 rounded-full transition-all duration-300 ${
            isRecording 
              ? 'bg-gradient-to-r from-red-500 to-red-600 text-white animate-pulse shadow-lg' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {isRecording ? <Mic size={20} className="animate-pulse" /> : <MicOff size={20} />}
        </button>
        
        <button className="relative p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
          <Bell size={20} />
          {notifications.filter(n => n.unread).length > 0 && (
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
          )}
        </button>
        
        <button
          onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 text-sm font-medium transition-all duration-200"
        >
          {language === 'en' ? 'اردو' : 'EN'}
        </button>
      </div>
    </div>
  </header>
);
export default Header;