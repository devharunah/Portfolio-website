'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '../ui/Button';
import { Label } from '@/components/ui/label';
import { Check, Loader2 } from 'lucide-react';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';
import { AnimatedTooltip } from '../ui/animated-tool-tip';
export default function ContactUs2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });
    const people = [
    {
      id: 1,
      name: "Twitter",
      designation: "@DevHarunah",
      icon: <FaSquareXTwitter />,
      link: "https://x.com/DevHarunah",
    },
    {
      id: 2,
      name: "Linkedin",
      designation: "Kakooza Harunah",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/kakooza-harunah-701882350/",
    },
    {
      id: 3,
      name: "Instagram",
      designation: "@dev_harunah",
      icon: <BsInstagram />,
      link: "https://www.instagram.com/dev_harunah/",
    },
    {
      id: 6,
      name: "Github",
      designation: "Kakooza Harunah",
      icon: <FaGithub />,
      link: "https://github.com/devharunah",
    },
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Form submitted:', { name, email, message });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black text-white relative w-full overflow-hidden py-16 md:py-24">
      {/* Subtle white glow accents */}
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, white, transparent 70%)`,
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-5 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, white, transparent 70%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="border border-white/10 bg-white/5 mx-auto max-w-5xl overflow-hidden rounded-[28px] shadow-xl backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            {/* Left Form */}
            <div className="relative p-6 md:p-10" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex w-full gap-2"
              >
                <h2 className="mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  Contact
                </h2>
                <span className="text-white relative z-10 w-full text-4xl font-bold tracking-tight italic md:text-5xl">
                  Us
                </span>
               
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="bg-black border border-white/20 text-white placeholder-gray-500"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="bg-black border border-white/20 text-white placeholder-gray-500"
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    required
                    className="h-40 resize-none bg-black border border-white/20 text-white placeholder-gray-500"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-semibold shadow-[0px_2px_6px_rgba(255,255,255,0.2)] hover:bg-gray-200"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <Check className="mr-2 h-4 w-4" />
                        Message Sent!
                      </span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative my-8 flex items-center justify-center overflow-hidden pr-8"
            >
              {/* <div className="flex flex-col items-center justify-center overflow-hidden">
                <article className="relative mx-auto h-[350px] min-h-60 max-w-[450px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-6 text-3xl tracking-tight text-white md:h-[450px] md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl">
                  Presenting you with the best UI possible.
                  <div className="absolute -right-20 -bottom-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-right-28 md:-bottom-28 md:max-w-[550px]">
                    <Earth
                      scale={1.1}
                      baseColor={[1, 1, 1]}
                      markerColor={[0, 0, 0]}
                      glowColor={[1, 1, 1]}
                    />
                  </div>
                </article>
              </div> */}
               <div className="w-full p-8 flex flex-col justify-center">
            <h3 className="text-center">Or</h3>
            <p className="flex flex-col gap-6 font-medium text-white/60  text-center">
              Find me on any of these
            </p>
            <div className="flex flex-row items-center  justify-center mb-10 mt-8 w-full">
              <AnimatedTooltip items={people} />
            </div>
            <p className="text-center text-white/60 max-w-lg mx-auto mt-8">
              <span className="italic">
               Software is like entropy: it is difficult to grasp, weighs
                nothing, and always tends to increase.
              </span>
              — Norman Augustine
            </p>
          </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
