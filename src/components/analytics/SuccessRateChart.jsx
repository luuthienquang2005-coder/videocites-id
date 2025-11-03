function SuccessRateChart() {
  const successRate = 94.8;
  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (successRate / 100) * circumference;

  const categories = [
    { name: 'Copyright Claims', rate: 96.2, color: 'from-blue-500 to-cyan-500' },
    { name: 'Trademark Issues', rate: 94.8, color: 'from-indigo-500 to-purple-500' },
    { name: 'Patent Violations', rate: 92.5, color: 'from-purple-500 to-pink-500' },
    { name: 'Trade Secrets', rate: 97.1, color: 'from-pink-500 to-rose-500' }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="flex items-center justify-center">
        <div className="relative">
          <svg className="transform -rotate-90 w-48 h-48">
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-gray-200"
            />
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke="url(#gradient)"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {successRate}%
            </span>
            <span className="text-sm text-gray-600 font-medium">Success Rate</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{category.name}</span>
              <span className="text-sm font-bold text-gray-900">{category.rate}%</span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${category.rate}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessRateChart;