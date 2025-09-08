'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const message = "Hello, I would like to use your service"
  const encodedmessage  = encodeURIComponent(message)
  const phonenumber = 256778895217;
  const whatsappLink = `https://wa.me/${phonenumber}?text=${encodedmessage}`;
  const router = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 rounded-2xl ease-in-out py-4 px-6 md:px-12 ${
        isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="text-white flex font-bold space-x-2 text-xl">
          <Link className='flex space-x-2 items-center' href='/'>
           <Image className='rounded-full' src= "/images/harunah_logo.png" alt='' width={30} height={30}/>
        <h1>Harunah.K</h1>
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a 
          href='#about'
          className="text-white hover:text-gray-300 cursor-pointer transition-colors">
            About Me
          </a>
          <a 
            href='#skill'
           className="text-white cursor-pointer hover:text-gray-300 transition-colors">
           Proficiencies
          </a>
          <a 
          href="#services" className="text-white hover:text-gray-300 transition-colors">
            Services
          </a>
          <a href="#projects" className="text-white hover:text-gray-300 transition-colors">
            Projects
          </a>
        </div>
        <div>
           <Button
           onClick={()=>{router.push(`${whatsappLink}`)}}
            variant="secondary" >
             Connect
        </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 visible bg-black/90 backdrop-blur-md'
            : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col space-y-4 p-6">
          <a
            href='#about'
            className="text-white hover:text-gray-300 transition-colors text-lg py-2"
          >
            About Me
          </a>
          <a
            href='#skill'
            className="text-white hover:text-gray-300 transition-colors text-lg py-2"
          >
            Proficiencies
          </a>
          <a
            href="#services"
            className="text-white hover:text-gray-300 transition-colors text-lg py-2"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-white hover:text-gray-300 transition-colors text-lg py-2"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;