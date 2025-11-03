function GeographicDistribution() {
  const regions = [
    { name: 'North America', cases: 1247, percentage: 34, color: 'from-blue-500 to-cyan-500' },
    { name: 'Europe', cases: 982, percentage: 27, color: 'from-indigo-500 to-purple-500' },
    { name: 'Asia Pacific', cases: 856, percentage: 23, color: 'from-purple-500 to-pink-500' },
    { name: 'Latin America', cases: 378, percentage: 10, color: 'from-pink-500 to-rose-500' },
    { name: 'Middle East', cases: 145, percentage: 4, color: 'from-orange-500 to-red-500' },
    { name: 'Africa', cases: 72, percentage: 2, color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {regions.map((region, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${region.color} flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{region.percentage}%</span>
              </div>
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 mb-1">{region.name}</h4>
            <p className="text-2xl font-bold text-gray-900">{region.cases.toLocaleString()}</p>
            <p className="text-xs text-gray-600 mt-1">Active Cases</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Global Coverage</h4>
            <p className="text-xs text-gray-600">Operating in 127 countries worldwide</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-indigo-600">127</p>
            <p className="text-xs text-gray-600">Countries</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">3,680</p>
            <p className="text-xs text-gray-600">Total Cases</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-pink-600">24/7</p>
            <p className="text-xs text-gray-600">Monitoring</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeographicDistribution;