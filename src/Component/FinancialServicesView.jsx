import { useState } from "react";
import { TrendingUp, Check, Shield } from 'lucide-react';
import Card from "./Card";
import Badge from "./Badge";
import Button from "./Button";
import Select from "./Select";
import Input from "./Input";
const FinancialServicesView = ({ loans, t }) => {
  const [activeTab, setActiveTab] = useState('loans');
  const [loanType, setLoanType] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  
  // Mock financial data
  const loanOptions = [
    {
      id: 1,
      type: 'Seasonal Loan',
      icon: '🌱',
      description: 'For seeds, fertilizers, and pesticides',
      rate: 12,
      maxAmount: 100000,
      duration: '6 months',
      features: ['Quick approval', 'No collateral up to 50k', 'Flexible repayment']
    },
    {
      id: 2,
      type: 'Equipment Loan',
      icon: '🚜',
      description: 'For farming equipment and machinery',
      rate: 10,
      maxAmount: 500000,
      duration: '2 years',
      features: ['Low interest rate', 'Asset financing', 'Insurance included']
    },
    {
      id: 3,
      type: 'Emergency Loan',
      icon: '🆘',
      description: 'For urgent financial needs',
      rate: 15,
      maxAmount: 50000,
      duration: '3 months',
      features: ['Same day approval', 'Instant disbursement', 'No documentation']
    },
    {
      id: 4,
      type: 'Crop Storage Loan',
      icon: '🏪',
      description: 'For building storage facilities',
      rate: 11,
      maxAmount: 300000,
      duration: '18 months',
      features: ['Grace period available', 'Technical support', 'Warehouse insurance']
    }
  ];

  const activeLoans = [
    {
      id: 1,
      type: 'Seasonal Loan',
      amount: 50000,
      disbursed: '2024-01-01',
      due: '2024-07-01',
      paid: 12000,
      status: 'active',
      rate: 12,
      monthlyPayment: 8750
    },
    {
      id: 2,
      type: 'Equipment Loan',
      amount: 150000,
      disbursed: '2023-10-15',
      due: '2025-10-15',
      paid: 25000,
      status: 'active',
      rate: 10,
      monthlyPayment: 6875
    }
  ];

  const transactionHistory = [
    { id: 1, type: 'credit', amount: 50000, description: 'Seasonal Loan Disbursed', date: '2024-01-01' },
    { id: 2, type: 'debit', amount: 8750, description: 'Loan EMI - January', date: '2024-01-05' },
    { id: 3, type: 'credit', amount: 35000, description: 'Wheat Sale Payment', date: '2024-01-08' },
    { id: 4, type: 'debit', amount: 6875, description: 'Equipment Loan EMI', date: '2024-01-10' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">{t('Financial Services', 'مالیاتی خدمات')}</h2>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-600">{t('Credit Score', 'کریڈٹ سکور')}</p>
            <p className="text-2xl font-bold text-green-600">750/900</p>
          </div>
          <Shield className="text-green-600" size={32} />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
        {['loans', 'active', 'history', 'calculator'].map((tab) => (
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

      {/* Loan Options Tab */}
      {activeTab === 'loans' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loanOptions.map((loan) => (
              <Card key={loan.id} className="p-6 hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{loan.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{loan.type}</h3>
                    <p className="text-gray-600 text-sm mt-1">{loan.description}</p>
                  </div>
                  <Badge variant="success">{loan.rate}% p.a.</Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('Max Amount', 'زیادہ سے زیادہ رقم')}</span>
                    <span className="font-semibold">PKR {loan.maxAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{t('Duration', 'مدت')}</span>
                    <span className="font-semibold">{loan.duration}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {loan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check size={16} className="text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant="primary" className="w-full">
                  {t('Apply Now', 'ابھی درخواست دیں')}
                </Button>
              </Card>
            ))}
          </div>

          {/* Quick Apply Form */}
          <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50">
            <h3 className="text-xl font-bold mb-4">{t('Quick Loan Application', 'فوری قرض کی درخواست')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                label={t('Loan Type', 'قرض کی قسم')}
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
              >
                <option value="">{t('Select loan type', 'قرض کی قسم منتخب کریں')}</option>
                {loanOptions.map(loan => (
                  <option key={loan.id} value={loan.type}>{loan.type}</option>
                ))}
              </Select>
              <Input
                label={t('Amount Required', 'مطلوبہ رقم')}
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="e.g. 50000"
              />
              <div className="flex items-end">
                <Button variant="primary" className="w-full">
                  {t('Calculate EMI', 'EMI کیلکولیٹ کریں')}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Active Loans Tab */}
      {activeTab === 'active' && (
        <div className="space-y-4">
          {activeLoans.map((loan) => (
            <Card key={loan.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">{loan.type}</h3>
                  <p className="text-gray-600">
                    {t('Loan Amount', 'قرض کی رقم')}: PKR {loan.amount.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {t('Disbursed on', 'جاری کیا گیا')}: {loan.disbursed}
                  </p>
                </div>
                <Badge variant="success">Active</Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">{t('Monthly EMI', 'ماہانہ قسط')}</p>
                  <p className="font-bold text-lg">PKR {loan.monthlyPayment.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t('Interest Rate', 'سود کی شرح')}</p>
                  <p className="font-bold text-lg">{loan.rate}% p.a.</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t('Paid', 'ادا شدہ')}</p>
                  <p className="font-bold text-lg text-green-600">PKR {loan.paid.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">{t('Outstanding', 'باقی')}</p>
                  <p className="font-bold text-lg text-orange-600">PKR {(loan.amount - loan.paid).toLocaleString()}</p>
                </div>
              </div>

              <div className="relative pt-2">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block text-green-600">
                      {t('Payment Progress', 'ادائیگی کی پیشرفت')}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      {Math.round((loan.paid / loan.amount) * 100)}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div 
                    style={{ width: `${(loan.paid / loan.amount) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-green-500 to-emerald-600"
                  ></div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="primary" size="sm">
                  {t('Pay EMI', 'قسط ادا کریں')}
                </Button>
                <Button variant="secondary" size="sm">
                  {t('View Details', 'تفصیلات دیکھیں')}
                </Button>
              </div>
            </Card>
          ))}

          {/* Loan Summary */}
          <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100">
            <h3 className="font-bold text-lg mb-4">{t('Loan Summary', 'قرض کا خلاصہ')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">{t('Total Borrowed', 'کل قرض')}</p>
                <p className="text-2xl font-bold text-gray-800">PKR 200K</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">{t('Total Paid', 'کل ادا شدہ')}</p>
                <p className="text-2xl font-bold text-green-600">PKR 37K</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">{t('Outstanding', 'باقی')}</p>
                <p className="text-2xl font-bold text-orange-600">PKR 163K</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">{t('Next EMI', 'اگلی قسط')}</p>
                <p className="text-2xl font-bold text-blue-600">Feb 5</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Transaction History Tab */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">{t('Recent Transactions', 'حالیہ لین دین')}</h3>
            <div className="space-y-3">
              {transactionHistory.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === 'credit' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {transaction.type === 'credit' ? <TrendingUp size={20} /> : <TrendingUp size={20} className="rotate-180" />}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <span className={`font-bold ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'credit' ? '+' : '-'} PKR {transaction.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
export default FinancialServicesView;
