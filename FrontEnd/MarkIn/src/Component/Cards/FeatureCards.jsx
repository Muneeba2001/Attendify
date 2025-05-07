import React from 'react';
import { FaUserCheck, FaCalendarAlt, FaChartBar } from 'react-icons/fa';

const features = [
  {
    title: 'Smart Attendance',
    description: 'Track student attendance efficiently and in real-time with intelligent monitoring.',
    icon: <FaUserCheck className="text-3xl text-indigo-600" />,
  },
  {
    title: 'Calendar Integration',
    description: 'Sync schedules and manage academic events seamlessly with our built-in calendar.',
    icon: <FaCalendarAlt className="text-3xl text-indigo-600" />,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Visualize performance and attendance trends with easy-to-understand analytics.',
    icon: <FaChartBar className="text-3xl text-indigo-600" />,
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Why Attendify?</h2>
        <p className="mt-2 text-gray-500 text-md">Explore the key features designed to simplify your attendance process.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 rounded-2xl p-8 shadow-lg text-left"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
