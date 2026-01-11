"use client";
import { useState } from 'react';
import { MessageCircle, Phone, Mail, Send, X, Truck, PaintBucket } from 'lucide-react';

const FloatingButton = () => {
  const [isFloatingOpen, setIsFloatingOpen] = useState(false);

  const contactActions = [
    {
      icon: MessageCircle,
      label: 'WhatsApp Quote',
      action: () => window.open('https://wa.me/2348126907506?text=Hello Unlimited Build Zone! I need a quote for:', '_blank'),
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Quick quote'
    },
    {
      icon: Phone,
      label: 'Call for Bulk Orders',
      action: () => window.open('tel:+2348126907506', '_blank'),
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Bulk pricing'
    },
    {
      icon: Mail,
      label: 'Email Specifications',
      action: () => window.open('mailto:info@unlimitedbuildzone.com?subject=Building Materials Inquiry', '_blank'),
      color: 'bg-purple-500 hover:bg-purple-600',
      description: 'Send specs'
    },
    {
      icon: Truck,
      label: 'Delivery Inquiry',
      action: () => window.open('tel:+2348126907506', '_blank'),
      color: 'bg-orange-500 hover:bg-orange-600',
      description: 'Logistics'
    },
    {
      icon: PaintBucket,
      label: 'Paint Consultation',
      action: () => window.open('https://wa.me/2348126907506?text=I need paint consultation for:', '_blank'),
      color: 'bg-red-500 hover:bg-red-600',
      description: 'Paint help'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Contact Options */}
      <div 
        className={`absolute bottom-24 right-0 space-y-3 transition-all duration-500 ease-out ${
          isFloatingOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        {contactActions.map((action, index) => {
          const IconComponent = action.icon;
          return (
            <div
              key={action.label}
              className="group relative flex items-center gap-3"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: isFloatingOpen ? 'translateX(0)' : 'translateX(20px)',
                transition: `all 0.3s ${index * 0.1}s`
              }}
            >
              {/* Action card */}
              <div className="bg-white shadow-xl rounded-xl p-3 flex items-center gap-3 min-w-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`${action.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{action.label}</p>
                  <p className="text-xs text-gray-500">{action.description}</p>
                </div>
              </div>
              
              {/* Action button */}
              <button
                onClick={() => {
                  action.action();
                  setIsFloatingOpen(false);
                }}
                className={`${action.color} w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
                aria-label={action.label}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsFloatingOpen(!isFloatingOpen)}
        className="bg-linear-to-r from-yellow-500 to-yellow-600 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group ring-4 ring-yellow-100/30"
        aria-label={isFloatingOpen ? "Close contact options" : "Get in touch"}
      >
        {isFloatingOpen ? (
          <X className="w-7 h-7 text-white transition-transform duration-300" />
        ) : (
          <>
            <Send className="w-6 h-6 text-white mr-0.5" />
            <span className="absolute -bottom-8 text-xs font-bold text-yellow-600 bg-white px-2 py-1 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Contact
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default FloatingButton;