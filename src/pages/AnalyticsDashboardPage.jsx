import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import MetricCard from '../components/analytics/MetricCard';
import ChartCard from '../components/analytics/ChartCard';
import RemovalChart from '../components/analytics/RemovalChart';
import SuccessRateChart from '../components/analytics/SuccessRateChart';
import GeographicDistribution from '../components/analytics/GeographicDistribution';
import RecentActivity from '../components/analytics/RecentActivity';

function AnalyticsDashboardPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const metrics = [
    {
      title: 'Total Removals',
      value: '3,680',
      change: '+12.5%',
      trend: 'up',
      color: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Success Rate',
      value: '94.8%',
      change: '+2.3%',
      trend: 'up',
      color: 'from-indigo-500 to-purple-500',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Active Cases',
      value: '247',
      change: '-8.2%',
      trend: 'down',
      color: 'from-purple-500 to-pink-500',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: 'Avg Response Time',
      value: '4.2h',
      change: '-15.3%',
      trend: 'down',
      color: 'from-pink-500 to-rose-500',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-indigo-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
          </div>
          <p className="text-lg font-semibold text-gray-700">Loading Analytics Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 animate-fadeInUp">
            <div className="flex items-center justify-between mb-6">
              <div>
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-medium mb-4 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Back to Home</span>
                </button>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Analytics Dashboard
                </h1>
                <p className="text-gray-600">Comprehensive overview of your IP protection effectiveness</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-medium text-gray-700">Export Report</span>
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="font-medium">Refresh Data</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fadeInUp animation-delay-200">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 animate-fadeInUp animation-delay-400">
              <ChartCard
                title="Removal Statistics"
                subtitle="Monthly breakdown of successful removals and pending cases"
              >
                <RemovalChart />
              </ChartCard>
            </div>

            <div className="animate-fadeInUp animation-delay-600">
              <ChartCard
                title="Success Rate by Category"
                subtitle="Performance metrics across different IP types"
              >
                <SuccessRateChart />
              </ChartCard>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 animate-fadeInUp animation-delay-800">
            <div className="lg:col-span-2">
              <ChartCard
                title="Geographic Distribution"
                subtitle="IP protection cases by region"
              >
                <GeographicDistribution />
              </ChartCard>
            </div>

            <div>
              <ChartCard
                title="Recent Activity"
                subtitle="Latest updates and actions"
              >
                <RecentActivity />
              </ChartCard>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default AnalyticsDashboardPage;