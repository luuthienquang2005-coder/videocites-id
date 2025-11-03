import { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Monthly removal statistics data
  const monthlyData = [
    { month: 'Jan', removals: 1240, success: 1180, pending: 60 },
    { month: 'Feb', removals: 1380, success: 1320, pending: 60 },
    { month: 'Mar', removals: 1520, success: 1460, pending: 60 },
    { month: 'Apr', removals: 1680, success: 1620, pending: 60 },
    { month: 'May', removals: 1890, success: 1820, pending: 70 },
    { month: 'Jun', removals: 2100, success: 2020, pending: 80 }
  ];

  // Success rate by category
  const categoryData = [
    { name: 'Patent Infringement', value: 96, color: '#6366f1' },
    { name: 'Trademark Violation', value: 94, color: '#8b5cf6' },
    { name: 'Copyright Piracy', value: 98, color: '#ec4899' },
    { name: 'Trade Secret Theft', value: 92, color: '#f59e0b' },
    { name: 'Domain Disputes', value: 95, color: '#10b981' }
  ];

  // Geographic distribution
  const geographicData = [
    { region: 'North America', cases: 3420, growth: 12 },
    { region: 'Europe', cases: 2890, growth: 8 },
    { region: 'Asia Pacific', cases: 4150, growth: 18 },
    { region: 'Latin America', cases: 1680, growth: 15 },
    { region: 'Middle East', cases: 980, growth: 10 },
    { region: 'Africa', cases: 560, growth: 22 }
  ];

  // Processing time trends
  const processingTimeData = [
    { type: 'Standard', avgDays: 45, minDays: 30, maxDays: 60 },
    { type: 'Expedited', avgDays: 15, minDays: 7, maxDays: 25 },
    { type: 'Emergency', avgDays: 3, minDays: 1, maxDays: 5 },
    { type: 'Complex', avgDays: 90, minDays: 60, maxDays: 120 }
  ];

  const statsCards = [
    {
      title: 'Total Removals',
      value: '15,680',
      change: '+23%',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Success Rate',
      value: '95.8%',
      change: '+2.3%',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Active Cases',
      value: '2,847',
      change: '+18%',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'Avg. Resolution',
      value: '14 Days',
      change: '-3 days',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  return (
    <section id="statistics" className="py-24 bg-gradient-to-br from-gray-50 via-white to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yIDJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0yLTJ2LTJoLTJ2Mmgyem0wLTR2LTJoLTJ2Mmgyem0yIDJ2LTJoLTJ2Mmgyem0wIDR2LTJoLTJ2Mmgyem0yLTJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0tMiAydi0yaC0ydjJoMnptMC00di0yaC0ydjJoMnptMiAydi0yaC0ydjJoMnoiLz48L2c+PC9nPjwvc3ZnPg==\')] opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full font-semibold text-sm mb-4">
            Performance Metrics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Impressive Removal Statistics
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Proven Track Record
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive IP protection services deliver exceptional results with industry-leading success rates and rapid response times.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statsCards.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 bg-gradient-to-r ${stat.color} rounded-xl text-white mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600 mb-3">{stat.title}</p>
              <div className="flex items-center text-sm">
                <span className={`font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-blue-600'}`}>
                  {stat.change}
                </span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Monthly Removal Trends */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Monthly Removal Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorRemovals" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  labelStyle={{ color: '#111827', fontWeight: 'bold' }}
                />
                <Legend />
                <Area type="monotone" dataKey="success" stroke="#10b981" fillOpacity={1} fill="url(#colorSuccess)" name="Successful" />
                <Area type="monotone" dataKey="removals" stroke="#6366f1" fillOpacity={1} fill="url(#colorRemovals)" name="Total Cases" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Success Rate by Category */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Rate by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#6b7280" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" stroke="#6b7280" width={120} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => [`${value}%`, 'Success Rate']}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Geographic Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={geographicData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="region" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Legend />
                <Line type="monotone" dataKey="cases" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1', r: 6 }} name="Cases" />
                <Line type="monotone" dataKey="growth" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', r: 6 }} name="Growth %" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Processing Time Analysis */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Processing Time Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={processingTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="type" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  formatter={(value) => [`${value} days`, '']}
                />
                <Legend />
                <Bar dataKey="minDays" fill="#10b981" name="Min Days" radius={[4, 4, 0, 0]} />
                <Bar dataKey="avgDays" fill="#6366f1" name="Avg Days" radius={[4, 4, 0, 0]} />
                <Bar dataKey="maxDays" fill="#f59e0b" name="Max Days" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Our Achievements</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15K+</div>
              <p className="text-indigo-200">Successful Removals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-indigo-200">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-indigo-200">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-indigo-200">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;