'use client';

import { motion } from 'framer-motion';

const PageLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* CM Logo */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg mb-8"
        >
          <span className="text-2xl font-bold text-white">CM</span>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-display font-semibold mb-2">
            <span className="gradient-text">Loading Amazing Content</span>
          </h2>
          <p className="text-neutral-600">
            Preparing your portfolio experience...
          </p>
        </motion.div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-primary-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Fun Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 max-w-md mx-auto">
            <p className="text-sm text-neutral-600 italic">
              "Good things come to those who wait... and have fast internet! 🚀"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PageLoading;
