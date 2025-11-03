function RecentActivity() {
  const activities = [
    {
      type: 'removal',
      title: 'Copyright Infringement Removed',
      description: 'Unauthorized video content removed from YouTube',
      platform: 'YouTube',
      time: '2 minutes ago',
      status: 'success',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      type: 'detection',
      title: 'New Violation Detected',
      description: 'Potential trademark infringement on Instagram',
      platform: 'Instagram',
      time: '15 minutes ago',
      status: 'pending',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      type: 'removal',
      title: 'Patent Violation Resolved',
      description: 'Counterfeit product listing removed from Amazon',
      platform: 'Amazon',
      time: '1 hour ago',
      status: 'success',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      type: 'alert',
      title: 'High Priority Alert',
      description: 'Multiple violations detected on Facebook Marketplace',
      platform: 'Facebook',
      time: '2 hours ago',
      status: 'alert',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      type: 'removal',
      title: 'Trademark Protection Success',
      description: 'Fake brand account suspended on Twitter',
      platform: 'Twitter',
      time: '3 hours ago',
      status: 'success',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      type: 'detection',
      title: 'Content Monitoring Alert',
      description: 'Suspicious activity detected on TikTok',
      platform: 'TikTok',
      time: '4 hours ago',
      status: 'pending',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      type: 'removal',
      title: 'Copyright Strike Issued',
      description: 'DMCA takedown successful on Vimeo',
      platform: 'Vimeo',
      time: '5 hours ago',
      status: 'success',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      type: 'alert',
      title: 'Bulk Violation Report',
      description: 'Multiple infringements found on eBay',
      platform: 'eBay',
      time: '6 hours ago',
      status: 'alert',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'from-green-500 to-emerald-500';
      case 'pending':
        return 'from-orange-500 to-amber-500';
      case 'alert':
        return 'from-red-500 to-rose-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'success':
        return 'bg-green-100';
      case 'pending':
        return 'bg-orange-100';
      case 'alert':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${getStatusColor(activity.status)} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
              {activity.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">{activity.title}</h4>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </div>
                <span className={`ml-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusBg(activity.status)} text-gray-700 whitespace-nowrap`}>
                  {activity.platform}
                </span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-gray-500">{activity.time}</span>
                <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;