'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Users, Award, Coffee, Database } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'ASP.NET MVC', icon: Code, level: 95 },
    { name: 'React & Next.js', icon: Code, level: 90 },
    { name: 'Web APIs & Integration', icon: Zap, level: 92 },
    { name: 'SQL Server', icon: Database, level: 88 },
    { name: 'SEO Optimization', icon: Award, level: 85 },
    { name: 'Simple Websites', icon: Users, level: 95 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-white" role="main" aria-label="About section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Hello! I'm Cesar Melchor, a passionate full-stack developer with over 8 years of experience 
                  building everything from simple business websites to enterprise-level applications. I specialize 
                  in React, Next.js, ASP.NET MVC, Web APIs, SQL Server, and SEO optimization, with extensive 
                  experience in both simple projects and complex system integrations.
                </p>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  Currently, I'm working on an innovative onboarding application that streamlines the employee 
                  onboarding process by moving everything online and integrating seamlessly with existing HR systems. 
                  This custom-built solution uses ASP.NET MVC, Web APIs, and SQL Server to create a comprehensive 
                  platform that significantly reduces onboarding time while improving the overall experience.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  My experience spans both modern web technologies and enterprise systems, allowing me to bridge 
                  the gap between cutting-edge development and business-critical applications. When I'm not coding, 
                  you can find me streaming on Twitch, creating content on YouTube, or exploring new technologies.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">8+</div>
                  <div className="text-sm text-neutral-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-secondary-50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-600">Enterprise</div>
                  <div className="text-sm text-neutral-600">Applications</div>
                </div>
                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent-600">Full-Stack</div>
                  <div className="text-sm text-neutral-600">Development</div>
                </div>
                <div className="text-center p-4 bg-neutral-50 rounded-lg">
                  <div className="text-2xl font-bold text-neutral-600">Custom</div>
                  <div className="text-sm text-neutral-600">Solutions</div>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-display font-semibold mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <skill.icon size={16} className="text-primary-500" />
                        <span className="font-medium text-neutral-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-neutral-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
