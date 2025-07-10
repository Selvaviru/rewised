import React, { useState, useEffect } from 'react';
import { Bell, X, Calendar, AlertTriangle, CheckCircle, Info, Mail, MessageCircle } from 'lucide-react';

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
  const [showFloatingReminders, setShowFloatingReminders] = useState(false);

  // Sample notifications - In real app, these would come from backend
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
        type: 'success',
        title: 'ITR Filed Successfully',
        message: 'Your Income Tax Return for FY 2023-24 has been successfully filed. Acknowledgment number: ITR123456789.',
        date: new Date('2025-01-17'),
        read: true
      },
      {
        id: '4',
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

    // Auto-generate reminders based on current date
    const generateReminders = () => {
      const today = new Date();
      const reminders: Notification[] = [];

      // GST filing reminder (20th of every month)
      if (today.getDate() >= 15 && today.getDate() <= 20) {
        reminders.push({
          id: `gst-${today.getMonth()}`,
          type: 'deadline',
          title: 'GST Return Due Soon',
          message: `GST return filing deadline is approaching (${today.getDate() === 20 ? 'Today' : `${20 - today.getDate()} days left`}). Prepare your documents.`,
          date: today,
          read: false,
          action: {
            label: 'Get Help',
            onClick: () => {
              const phoneNumber = '919789485470';
              const message = 'Hi, I need help with GST return filing. Please assist me with the process.';
              window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
            }
          }
        });
      }

      // ITR filing reminder (July 31st deadline)
      if (today.getMonth() >= 5 && today.getMonth() <= 6) { // June to July
        reminders.push({
          id: `itr-${today.getFullYear()}`,
          type: 'deadline',
          title: 'ITR Filing Deadline Approaching',
          message: 'Income Tax Return filing deadline is July 31st. Start preparing your documents now.',
          date: today,
          read: false,
          action: {
            label: 'Start Filing',
            onClick: () => {
              const phoneNumber = '919789485470';
              const message = 'Hi, I want to start my Income Tax Return filing process. Please guide me.';
              window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
            }
          }
        });
      }

      return reminders;
    };

    const autoReminders = generateReminders();
    setNotifications(prev => [...prev, ...autoReminders]);

    // Show floating reminders after 15 seconds
    const reminderTimer = setTimeout(() => {
      setShowFloatingReminders(true);
    }, 15000);

    return () => clearTimeout(reminderTimer);
  }, []);

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
      case 'deadline': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'reminder': return <Calendar className="w-5 h-5 text-yellow-500" />;
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'update': return <Info className="w-5 h-5 text-blue-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'deadline': return 'border-l-red-500 bg-red-50';
      case 'reminder': return 'border-l-yellow-500 bg-yellow-50';
      case 'success': return 'border-l-green-500 bg-green-50';
      case 'update': return 'border-l-blue-500 bg-blue-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  // Auto-send email/SMS reminders (simulation)
  const sendAutoReminders = () => {
    const today = new Date();
    
    // Simulate sending reminders
    notifications.forEach(notification => {
      if (!notification.read && notification.type === 'deadline') {
        console.log(`Auto-reminder sent: ${notification.title}`);
        // In real app, this would trigger email/SMS API
      }
    });
  };

  useEffect(() => {
    // Check for reminders every hour
    const interval = setInterval(sendAutoReminders, 3600000);
    return () => clearInterval(interval);
  }, [notifications]);

  return (
    <>
      {/* Notification Bell */}
      <div className="fixed top-4 right-20 z-50">
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Bell className="w-6 h-6 text-gray-600" />
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* Notification Panel */}
      {showNotifications && (
        <div className="fixed top-16 right-4 w-96 bg-white rounded-2xl shadow-2xl border z-50 max-h-96 overflow-hidden animate-fadeInUp">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">Notifications</h3>
            <button
              onClick={() => setShowNotifications(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Notifications List */}
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Bell className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No notifications</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
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
                          <h4 className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-600'}`}>
                            {notification.title}
                          </h4>
                          <button
                            onClick={() => removeNotification(notification.id)}
                            className="text-gray-400 hover:text-gray-600 ml-2"
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
                              className="text-xs text-blue-600 hover:text-blue-700 font-medium"
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
                              className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition-colors"
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
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Mark all read
                </button>
                <button className="text-gray-600 hover:text-gray-700">
                  Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Reminder Cards */}
      {showFloatingReminders && notifications
        .filter(n => !n.read && n.type === 'deadline')
        .slice(0, 2)
        .map((notification, index) => (
          <div
            key={notification.id}
            className="fixed left-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-4 shadow-xl max-w-sm z-40 border border-blue-500 transition-all duration-300"
            style={{ 
              bottom: `${120 + (index * 140)}px`,
              animation: 'slideInLeft 0.5s ease-out'
            }}
          >
            <button
              onClick={() => removeNotification(notification.id)}
              className="absolute top-2 right-2 text-blue-200 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-start space-x-3">
              <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-sm mb-2 flex items-center space-x-1">
                  <span>{notification.title}</span>
                </h4>
                
                <p className="text-sm text-blue-100 mb-3">
                  {notification.message}
                </p>
                
                <div className="flex flex-col space-y-2">
                  {notification.action && (
                    <button
                      onClick={() => {
                        notification.action!.onClick();
                        markAsRead(notification.id);
                      }}
                      className="w-full bg-white text-blue-600 text-sm font-semibold py-2 px-4 rounded-md hover:bg-blue-50 transition-colors duration-300"
                    >
                      {notification.action.label}
                    </button>
                  )}
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="text-blue-200 text-sm py-2 px-4 border border-blue-400 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default NotificationSystem;