'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'MVP Starter Kit',
    description: 'Made for participants of the Black CS Success Summit, providing a Next.js and MVP blocks starter kit to streamline project development for the hackathon. It includes essential setup instructions and links to official documentation to help students build and pitch their products effectively.',
    image: '/images/mvpstarter.png',
    link: 'https://mvpstarter-kit.vercel.app/',
  },
  {
    title: 'Receipt and Invoice Tool',
    description: 'A tool developed for businesses and freelancers for easy management of their receipting and invoicing.',
    image: '/images/microbizz.png',
    link: 'https://microbizz.vercel.app/',
  },
  {
    title: 'Learning Management System',
    description: 'A Learning Management System designed to make education in Uganda easy and accessible.',
    image: '/images/somahub.png',
    link: '#',
  },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section id='projects' className="py-20 bg-[#1C1917] dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative block overflow-hidden rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity bg-black opacity-40 duration-500 group-hover:bg-opacity-70 flex items-end p-6">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white mb-4">{project.description}</p>
                    <span className="text-white border-b-2 border-white pb-1 font-semibold transition-transform transform group-hover:translate-x-1">
                      View Project &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        {/* Get in touch section */}
        <div className="mt-20 text-center">
          <div className="p-8 bg-black dark:bg-gray-800 rounded-lg shadow-xl inline-block">
            <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-4">
              Get in touch for more
            </h3>
            <p className="text-gray-200 dark:text-gray-300 mb-6">
              Have a project in mind or want to collaborate? I would love to hear from you.
            </p>
            <Button variant="secondary" >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;