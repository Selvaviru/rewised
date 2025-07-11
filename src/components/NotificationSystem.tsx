import React, { useState, useEffect } from 'react';
import { Bell, X, Calendar, AlertTriangle, CheckCircle, Info, MessageCircle } from 'lucide-react';

interface Notification {
  id: string;
  type: 'reminder' | 'deadline' | 'update' | 'success';
  title: string;
  message: string;
  date: Date;
  read: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

const NotificationSystem: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeAlerts, setActiveAlerts] = useState<Notification[]>([]);
  const [alertQueue, setAlertQueue] = useState<Notification[]>([]);

  // Sample notifications
  useEffect(() => {
    const sampleNotifications: Notification[] = [
      {
        id: '1',
        type: 'deadline',
        title: 'GST Return Filing Due',
        message: 'Your GST return for December 2024 is due on January 20, 2025. Please submit your documents.',
        date: new Date('2025-01-18'),
        read: false,
        action: {
          label: 'Upload Documents',
          onClick: () => document.getElementById('file-upload')?.scrollIntoView({ behavior: 'smooth' })
        }
      },
      {
        id: '2',
        type: 'reminder',
        title: 'Document Reminder',
        message: 'Please submit your Form 16 for Income Tax Return filing. Our team is waiting for your documents.',
        date: new Date('2025-01-19'),
        read: false,
        action: {
          label: 'Contact Support',
          onClick: () => {
            const phoneNumber = '919789485470';
            const message = 'Hi, I received a reminder about submitting Form 16. Please guide me on the next steps.';
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
          }
        }
      },
      {
        id: '3',
        type: 'update',
        title: 'New Tax Regulation',
        message: 'Important update: New tax slabs announced for FY 2024-25. Check our blog for detailed information.',
        date: new Date('2025-01-16'),
        read: false,
        action: {
          label: 'Read More',
          onClick: () => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })
        }
      }
    ];

    setNotifications(sampleNotifications);
    setAlertQueue(sampleNotifications.filter(n => !n.read));

    // Start showing alerts after 20 seconds
    const initialTimer = setTimeout(() => {
      showNextAlert();
    }, 20000);

    return () => clearTimeout(initialTimer);
  }, []);

  const showNextAlert = () => {
    setAlertQueue(prevQueue => {
      if (prevQueue.length > 0) {
        const nextAlert = prevQueue[0];
        const remainingQueue = prevQueue.slice(1);
        
        setActiveAlerts(prev => [...prev, nextAlert]);
        
        return remainingQueue;
      }
      return prevQueue;
    });
  };

  const closeAlert = (alertId: string) => {
    setActiveAlerts(prev => prev.filter(alert => alert.id !== alertId));
    markAsRead(alertId);
    
    // Show next alert after 2 seconds
    setTimeout(() => {
      showNextAlert();
    }, 2000);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'deadline': return <AlertTriangle className="w-5 h-5 text-gray-600" />;
      case 'reminder': return <Calendar className="w-5 h-5 text-gray-600" />;
      case 'success': return <CheckCircle className="w-5 h-5 text-gray-600" />;
      case 'update': return <Info className="w-5 h-5 text-gray-600" />;
      default: return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getNotificationColor = (type: string) => {
    return 'border-l-gray-600 bg-gray-50';
  };

  return (
    <>
      {/* Notification Bell */}
      <div className="fixed top-4 right-20 z-50">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
        >
          <Bell className="w-6 h-6 text-gray-600" />
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* Notification Panel */}
      {showNotifications && (
        <div className="fixed top-16 right-4 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-hidden animate-fadeInUp">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
            <h3 className="text-lg font-bold text-gray-800">Notifications</h3>
            <button
              onClick={() => setShowNotifications(false)}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-gray-600">
                <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No notifications</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-l-4 ${getNotificationColor(notification.type)} ${
                      !notification.read ? 'bg-opacity-100' : 'bg-opacity-50'
                    } hover:bg-opacity-75 transition-all duration-300`}
                  >
                    <div className="flex items-start space-x-3">
                      {getNotificationIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <h4 className={`text-sm font-medium ${!notification.read ? 'text-gray-800' : 'text-gray-600'}`}>
                            {notification.title}
                          </h4>
                          <button
                            onClick={() => removeNotification(notification.id)}
                            className="text-gray-400 hover:text-gray-600 ml-2 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className={`text-sm mt-1 ${!notification.read ? 'text-gray-700' : 'text-gray-500'}`}>
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {notification.date.toLocaleDateString()} at {notification.date.toLocaleTimeString()}
                        </p>
                        
                        <div className="flex items-center space-x-2 mt-3">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-xs text-gray-600 hover:text-gray-800 font-medium transition-colors"
                            >
                              Mark as read
                            </button>
                          )}
                          {notification.action && (
                            <button
                              onClick={() => {
                                notification.action!.onClick();
                                markAsRead(notification.id);
                                setShowNotifications(false);
                              }}
                              className="text-xs bg-gray-600 text-white px-3 py-1 rounded-full hover:bg-gray-700 transition-colors"
                            >
                              {notification.action.label}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                {unreadCount} unread notifications
              </span>
              <div className="flex space-x-2">
                <button className="text-gray-600 hover:text-gray-800 font-medium transition-colors">
                  Mark all read
                </button>
                <button className="text-gray-600 hover:text-gray-800 transition-colors">
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Professional Alert Cards - Right Aligned */}
      <div className="fixed right-4 top-20 z-40 space-y-4 max-w-sm">
        {activeAlerts.map((alert, index) => (
          <div
            key={alert.id}
            className="bg-white border border-gray-300 rounded-xl p-4 shadow-xl transition-all duration-500 animate-slideInRight"
            style={{ 
              animationDelay: `${index * 0.2}s`,
              marginTop: index > 0 ? '16px' : '0'
            }}
          >
            <button
              onClick={() => closeAlert(alert.id)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-start space-x-3 pr-6">
              <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                {getNotificationIcon(alert.type)}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-2 text-gray-800 flex items-center space-x-2">
                  <span>{alert.title}</span>
                </h4>
                
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  {alert.message}
                </p>
                
                <div className="flex flex-col space-y-2">
                  {alert.action && (
                    <button
                      onClick={() => {
                        alert.action!.onClick();
                        closeAlert(alert.id);
                      }}
                      className="w-full bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      {alert.action.label}
                    </button>
                  )}
                  <button
                    onClick={() => closeAlert(alert.id)}
                    className="text-gray-600 text-sm py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotificationSystem;