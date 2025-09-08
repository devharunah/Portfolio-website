'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../layouts/header/page';
import { GradientBars } from '../ui/gradient-bars';
import { Button } from '@/components/ui/Button';
export default function Globe3D() {
   const message = "Hello, I would like to use your service"
  const encodedmessage  = encodeURIComponent(message)
  const phonenumber = 256778895217;
  const whatsappLink = `https://wa.me/${phonenumber}?text=${encodedmessage}`; 
  return (
    <section
      className="relative w-full h-screen  py-6  overflow-hidden bg-[#0a0613]  pt-10 font-light text-white antialiased md:pt-20 md:pb-16"
      style={{
        background: 'linear-gradient(135deg, #0a0613 0%, #150d27 100%)',
      }}
    >
       <Navigation/>
      <GradientBars>
        </GradientBars>
          
      <div className="relative z-10 container pt-20 mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
          The Art of Code, 
           The Science of Building
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
           Im a passionate Full-Stack web developer with hands-on
            experience in building web applications using JavaScript, React.js, Next.js, 
           TypeScript, TailwindCSS, and Prisma. I focus on delivering
            impactful digital solutions with attention to detail.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row">
            <Link
              prefetch={false}
              href={whatsappLink}
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(155, 135, 245, 0.5)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-[#9b87f5]/30 sm:w-auto"
            >
           Connect
            </Link>
           <Button
           >
            <Link href="#projects">
            Explore my Projects
            </Link>
           </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
        </motion.div>
      </div>
      
    </section>
  );
}
