import React from 'react';
import { motion } from 'framer-motion';
import joystick from '../assets/joy_stick_1.png';
import { useNavigate } from 'react-router-dom';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: -40, transition: { duration: 1, ease: 'easeOut' } },
};


const Hero = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 800); // Scrolls to the top of the page
  };


  return (
    <section className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 relative mt-[-50px] sm:mt-[-80px] md:mt-[-100px]">
      {/* Left Section */}
      <motion.div
        className="flex flex-col justify-center px-6 sm:px-12 md:px-20 py-10 text-white space-y-6 z-10 lg:pl-0 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="text-[#e87d0e] text-3xl sm:text-4xl font-bold" variants={textVariants}>
          RENT A PLAYSTATION
        </motion.p>

        <motion.h1 className="text-5xl sm:text-6xl font-extrabold" style={{ lineHeight: '4.5rem' }} variants={textVariants}>
          <span className="block">SKIP THE STORES,</span>
          <span className="block">PLAY LIKE IT'S YOURS!</span>
        </motion.h1>

        <motion.p className="text-sm sm:text-base text-white/80 max-w-xl" style={{ lineHeight: '1.75rem' }} variants={textVariants}>
        No need to buy a console—rent a PlayStation with your favorite games from just 90 rupees. Affordable, convenient, and hassle-free.
        </motion.p>

        <motion.div variants={textVariants}>
          <button 
          onClick={() => handleNavigation('/contact')}
          className="custom-button w-fit">
            Get more details
          </button>
        </motion.div>
      </motion.div>

      {/* Right Section - Joystick Image */}
      <motion.div
        className="relative flex justify-center items-end lg:items-start px-6 sm:px-12 py-20 md:px-20 py-10"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={joystick}
          alt="Joystick"
          className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] object-contain lg:absolute lg:top-0 lg:right-[-100px]"
          variants={imageVariants}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
