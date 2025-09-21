'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-2xl mx-auto text-center"
      >
        {/* 404 Number */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="text-9xl sm:text-[12rem] font-bold gradient-text opacity-20 select-none"
          >
            404
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="float"
            style={{ animationDelay: '1s' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <AlertCircle className="w-16 h-16 sm:w-20 sm:h-20 text-primary-500" />
          </motion.div>
        </motion.div>

        {/* Main Message */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Oops! Are you lost?</span>
          </h1>
          <p className="text-lg text-neutral-600 mb-6">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best developers get lost sometimes! 🚀
          </p>
        </motion.div>

        {/* Fun Message */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <p className="text-neutral-700 italic">
              "Translation is not a neutral act. It is an act of interpretation, of making choices about meaning." 
              <br />
              <span className="text-sm text-neutral-500">- R.F. Kuang, Babel (probably about debugging code)</span>
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 px-6 py-3"
            >
              <Home className="w-5 h-5" />
              <span>Return Home</span>
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.back()}
            className="btn-secondary flex items-center space-x-2 px-6 py-3"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </motion.button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div variants={itemVariants} className="mt-12">
          <p className="text-sm text-neutral-500 mb-4">Maybe you were looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#about" className="text-primary-600 hover:text-primary-700 transition-colors">
              About Me
            </Link>
            <Link href="/#projects" className="text-primary-600 hover:text-primary-700 transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="text-primary-600 hover:text-primary-700 transition-colors">
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Fun Developer Message */}
        <motion.div variants={itemVariants} className="mt-12">
          <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-4">
            <p className="text-sm text-neutral-700">
              <span className="font-mono text-primary-600">// How did we get here?</span> 
              <br />
              You've stumbled into the digital equivalent of a hidden room. 
              Maybe you took a wrong turn, or maybe the universe just wanted you to see this message. 
              Either way, you're here now, and that's pretty cool! 🎯
            </p>
            <div className="mt-3 pt-3 border-t border-primary-200">
              <p className="text-xs font-mono text-primary-500">
                01000111 01100001 01101101 01100101 00100000 01101111 01101110 00101100 00100000 01100001 01101110 01101111 01101110
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '2s' }}
          className="absolute top-20 left-10 opacity-20"
        >
          <Search className="w-8 h-8 text-primary-400" />
        </motion.div>
        
        <motion.div
          variants={floatingVariants}
          animate="float"
          style={{ animationDelay: '3s' }}
          className="absolute bottom-20 right-10 opacity-20"
        >
          <AlertCircle className="w-6 h-6 text-secondary-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
