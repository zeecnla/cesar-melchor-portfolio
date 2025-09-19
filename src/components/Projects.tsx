'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';
import { Project } from '@/types';

interface ProjectsProps {
  projects?: Project[];
}

const Projects = ({ projects = [] }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Fallback projects if Contentful data is not available
  const fallbackProjects: Project[] = [
    {
      id: '1',
      name: 'Employee Onboarding Platform',
      description: 'A comprehensive onboarding application that streamlines the employee onboarding process by moving everything online and integrating seamlessly with existing HR systems. This custom-built solution significantly reduces onboarding time while improving the overall experience.',
      projectUrl: '#',
      repositoryUrl: '#',
      slug: 'onboarding-platform',
      technologies: ['ASP.NET MVC', 'Web APIs', 'SQL Server', 'ASPX Integration', 'HR Systems'],
      featured: true,
    },
    {
      id: '2',
      name: 'Business Website with SEO',
      description: 'A clean, professional business website with 4 pages including homepage, about, services, and contact. Features modern design, mobile responsiveness, and comprehensive SEO optimization for better search engine visibility.',
      projectUrl: '#',
      repositoryUrl: '#',
      slug: 'business-website',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO Optimization', 'Responsive Design'],
      featured: true,
    },
    {
      id: '3',
      name: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      projectUrl: '#',
      repositoryUrl: '#',
      slug: 'portfolio-website',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      featured: false,
    },
    {
      id: '4',
      name: 'Weather Dashboard',
      description: 'A comprehensive weather dashboard with location-based forecasts, interactive maps, and historical data.',
      projectUrl: '#',
      repositoryUrl: '#',
      slug: 'weather-dashboard',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'Chart.js'],
      featured: false,
    },
    {
      id: '5',
      name: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting features.',
      projectUrl: '#',
      repositoryUrl: '#',
      slug: 'social-analytics',
      technologies: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      featured: false,
    },
    {
      id: '6',
      name: 'Learning Management System',
      description: 'A comprehensive LMS with course creation, student management, and progress tracking capabilities.',
      projectUrl: '#',
      repositoryUrl: '#',
      slug: 'learning-management',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'AWS S3'],
      featured: false,
    },
  ];

  const displayProjects = projects.length > 0 ? projects : fallbackProjects;
  const featuredProjects = displayProjects.filter(project => project.featured);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="card p-6 h-full group"
    >
      {/* Project Image Placeholder */}
      <div className="relative w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-4 overflow-hidden" role="img" aria-label={`${project.name} project preview`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20" aria-hidden="true">💻</div>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
              <Star className="w-3 h-3 fill-current" />
              <span>Featured</span>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-display font-semibold mb-2 text-neutral-800 group-hover:text-primary-600 transition-colors">
            {project.name}
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        {project.technologies && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="section-padding bg-white" role="main" aria-label="Featured projects section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I love to work with
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl"
          >
            <h3 className="text-2xl font-display font-semibold mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new challenges. Let's discuss how we can bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Start a Project
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
