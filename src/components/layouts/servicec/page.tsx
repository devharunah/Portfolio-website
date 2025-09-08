// components/Services.tsx
'use client';

import { FaCode, FaPaintBrush, FaTools, FaDatabase } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className=" p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="text-4xl text-white bg-[#1C1917] dark:text-white mb-4 transition-transform transform hover:rotate-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white dark:text-white mb-2">{title}</h3>
      <p className="text-white dark:text-gray-400">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'UI/UX Development',
      description:
        'Crafting intuitive and visually appealing user interfaces to provide seamless user experiences.',
      icon: <FaPaintBrush />,
    },
    {
      title: 'Web Development',
      description:
        'Building robust and scalable web applications using modern technologies like Next.js.',
      icon: <FaCode />,
    },
    {
      title: 'Maintenance and Support',
      description:
        'Providing ongoing support and maintenance to ensure your applications are secure and up-to-date.',
      icon: <FaTools />,
    },
    {
      title: 'Database Designs',
      description:
        'Designing efficient and reliable database architectures to handle your application’s data needs.',
      icon: <FaDatabase />,
    },
  ];

  return (
    <section id='services' className="py-20 bg-black dark:bg-black text-black dark:text-white">
        <h1 className="text-4xl md:text-5xl text-center text-white font-bold  mb-4">
           What I can do for you
          </h1>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid text-white bg-[#1C1917] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;