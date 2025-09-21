'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home, RefreshCw, Bug, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

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

  const shakeVariants = {
    shake: {
      x: [-10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        repeat: 2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Error Icon */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <motion.div
            variants={shakeVariants}
            animate="shake"
            className="text-6xl sm:text-8xl font-bold text-red-500 opacity-20 select-none"
          >
            💥
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-red-500" />
          </motion.div>
        </motion.div>

        {/* Main Message */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            <span className="text-red-600">Something went wrong!</span>
          </h1>
          <p className="text-lg text-neutral-600 mb-6">
            Oops! It looks like our code decided to take an unexpected coffee break. 
            Don't worry, even the best developers encounter bugs! 🐛
          </p>
        </motion.div>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
              <h3 className="font-semibold text-red-800 mb-2">Error Details (Development):</h3>
              <code className="text-sm text-red-700 break-all">
                {error.message}
              </code>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          </motion.div>
        )}

        {/* Fun Message */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <p className="text-neutral-700 italic">
              "The best error messages are the ones that make you laugh before you cry." 
              <br />
              <span className="text-sm text-neutral-500">- Every developer ever</span>
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="bg-red-600 hover:bg-red-700 text-white flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Try Again</span>
          </motion.button>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 px-6 py-3"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div variants={itemVariants} className="mt-12">
          <p className="text-sm text-neutral-500 mb-4">If the problem persists:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="text-red-600 hover:text-red-700 transition-colors">
              Contact Support
            </Link>
            <a 
              href="https://github.com/zeecnla/cesar-melchor-portfolio/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              Report Bug
            </a>
          </div>
        </motion.div>

        {/* Developer Message */}
        <motion.div variants={itemVariants} className="mt-12">
          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-4">
            <p className="text-sm text-neutral-700">
              <span className="font-mono text-red-600">// Error Handler:</span> 
              <br />
              This error has been logged and will be investigated. 
              Thanks for your patience while we debug this! 🛠️
            </p>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 opacity-20"
        >
          <Bug className="w-8 h-8 text-red-400" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 opacity-20"
        >
          <AlertTriangle className="w-6 h-6 text-orange-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Error;
