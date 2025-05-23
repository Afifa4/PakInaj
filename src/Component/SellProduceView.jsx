import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Select from "./Select"
import Input from "./Input";

import {TrendingUp, Package, DollarSign,Check, Upload} from 'lucide-react';

const SellProduceView = ({ t }) => {
  const [selectedCrop, setSelectedCrop] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quality, setQuality] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('Sell Your Produce', 'اپنی فصل بیچیں')}</h2>
      <p className="text-gray-600 mb-8">{t('Get the best price for your hard work', 'اپنی محنت کی بہترین قیمت حاصل کریں')}</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <Card className="lg:col-span-2 p-6 space-y-6">
          <Select
            label={t('Select Crop', 'فصل منتخب کریں')}
            icon={Package}
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
          >
            <option value="">{t('Choose a crop', 'فصل چنیں')}</option>
            <option value="wheat">🌾 Wheat - گندم</option>
            <option value="cotton">🏵️ Cotton - کپاس</option>
            <option value="rice">🌾 Rice - چاول</option>
            <option value="sugarcane">🎋 Sugarcane - گنا</option>
            <option value="maize">🌽 Maize - مکئی</option>
          </Select>

          <Input
            label={t('Quantity (kg)', 'مقدار (کلوگرام)')}
            type="number"
            icon={Package}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g. 500"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {t('Quality Grade', 'کوالٹی گریڈ')}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['A', 'B', 'C'].map((grade) => (
                <button
                  key={grade}
                  onClick={() => setQuality(grade)}
                  className={`relative py-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
                    quality === grade
                      ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-100 shadow-lg'
                      : 'border-gray-300 hover:border-gray-400 bg-white'
                  }`}
                >
                  <span className={`font-bold text-lg ${quality === grade ? 'text-green-700' : 'text-gray-700'}`}>
                    Grade {grade}
                  </span>
                  {quality === grade && (
                    <div className="absolute top-1 right-1">
                      <Check size={16} className="text-green-600" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {t('Upload Photos', 'تصاویر اپ لوڈ کریں')}
            </label>
            <div className="border-3 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-500 transition-all cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100">
              <Upload size={40} className="mx-auto text-gray-400 mb-3" />
              <p className="text-gray-700 font-medium">
                {t('Click to upload or drag and drop', 'اپ لوڈ کرنے کے لیے کلک کریں')}
              </p>
              <p className="text-sm text-gray-500 mt-1">PNG, JPG up to 10MB</p>
            </div>
          </div>

          <Input
            label={t('Expected Price (PKR)', 'متوقع قیمت (روپے)')}
            type="number"
            icon={DollarSign}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g. 35000"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('Additional Details', 'اضافی تفصیلات')}
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              placeholder={t('Describe your produce quality, harvest date, etc.', 'اپنی فصل کی کوالٹی، کٹائی کی تاریخ وغیرہ بیان کریں')}
            />
          </div>

          <Button variant="primary" size="lg" className="w-full">
            {t('List for Sale', 'فروخت کے لیے لسٹ کریں')}
          </Button>
        </Card>

        {/* Price Suggestion Panel */}
        <Card className="p-6 h-fit">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <TrendingUp className="text-green-600" />
            {t('Price Suggestions', 'قیمت کی تجاویز')}
          </h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <p className="text-sm text-gray-600">{t('Current Market Price', 'موجودہ منڈی قیمت')}</p>
              <p className="text-2xl font-bold text-green-700">PKR 2,800</p>
              <p className="text-xs text-gray-500 mt-1">per 40kg</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t('Highest Today', 'آج کی بلند ترین')}</span>
                <span className="font-semibold">PKR 2,950</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t('Lowest Today', 'آج کی کم ترین')}</span>
                <span className="font-semibold">PKR 2,650</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">{t('Average', 'اوسط')}</span>
                <span className="font-semibold">PKR 2,800</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <p className="text-xs text-gray-500 mb-2">{t('Price Trend', 'قیمت کا رجحان')}</p>
              <div className="h-16 bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 rounded-lg opacity-50"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default SellProduceView;
