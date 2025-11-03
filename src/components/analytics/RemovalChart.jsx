import { useState } from 'react';

function RemovalChart() {
  const [timeRange, setTimeRange] = useState('6months');

  const data = {
    '6months': [
      { month: 'Jan', removals: 245, pending: 32 },
      { month: 'Feb', removals: 312, pending: 28 },
      { month: 'Mar', removals: 289, pending: 35 },
      { month: 'Apr', removals: 356, pending: 24 },
      { month: 'May', removals: 423, pending: 19 },
      { month: 'Jun', removals: 478, pending: 15 }
    ],
    '1year': [
      { month: 'Jul', removals: 198, pending: 45 },
      { month: 'Aug', removals: 234, pending: 38 },
      { month: 'Sep', removals: 267, pending: 34 },
      { month: 'Oct', removals: 289, pending: 31 },
      { month: 'Nov', removals: 312, pending: 28 },
      { month: 'Dec', removals: 345, pending: 25 },
      { month: 'Jan', removals: 378, pending: 22 },
      { month: 'Feb', removals: 401, pending: 20 },
      { month: 'Mar', removals: 434, pending: 18 },
      { month: 'Apr', removals: 456, pending: 16 },
      { month: 'May', removals: 489, pending: 14 },
      { month: 'Jun', removals: 512, pending: 12 }
    ]
  };

  const currentData = data[timeRange];
  const maxValue = Math.max(...currentData.map(d => d.removals + d.pending));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <span className="text-sm font-medium text-gray-700">Successful Removals</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-red-400"></div>
            <span className="text-sm font-medium text-gray-700">Pending</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setTimeRange('6months')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              timeRange === '6months'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            6 Months
          </button>
          <button
            onClick={() => setTimeRange('1year')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
              timeRange === '1year'
                ? 'bg-white text-indigo-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            1 Year
          </button>
        </div>
      </div>

      <div className="relative h-80">
        <div className="absolute inset-0 flex items-end justify-between space-x-2">
          {currentData.map((item, index) => {
            const removalHeight = (item.removals / maxValue) * 100;
            const pendingHeight = (item.pending / maxValue) * 100;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                <div className="w-full flex flex-col items-center space-y-1 group">
                  <div className="relative w-full">
                    <div
                      className="w-full bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer"
                      style={{ height: `${removalHeight}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {item.removals} removals
                      </div>
                    </div>
                    <div
                      className="w-full bg-gradient-to-t from-orange-400 to-red-400 transition-all duration-500 hover:opacity-80 cursor-pointer"
                      style={{ height: `${pendingHeight}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {item.pending} pending
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-600">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RemovalChart;