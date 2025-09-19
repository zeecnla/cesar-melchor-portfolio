'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Twitter, Youtube, Twitch, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/zeecnla',
      icon: Github,
      color: 'hover:text-neutral-800',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/zeecnla',
      icon: Twitter,
      color: 'hover:text-blue-400',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@zeecnla',
      icon: Youtube,
      color: 'hover:text-red-500',
    },
    {
      name: 'Twitch',
      url: 'https://www.twitch.tv/zeecnla',
      icon: Twitch,
      color: 'hover:text-purple-500',
    },
    {
      name: 'Email',
      url: 'mailto:hello@cesarmelchor.me',
      icon: Mail,
      color: 'hover:text-primary-500',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="py-16 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CM</span>
                  </div>
                  <span className="font-display font-bold text-xl">Cesar Melchor</span>
                </Link>
                <p className="text-neutral-400 mb-6 max-w-md leading-relaxed">
                  Full-stack developer passionate about creating exceptional digital experiences. 
                  Let's build something amazing together.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center text-neutral-400 transition-colors ${social.color}`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-neutral-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-semibold text-lg mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-neutral-400">
                    <Mail size={16} />
                    <span>hello@cesarmelchor.me</span>
                  </div>
                  <div className="text-neutral-400">
                    <div>Available for freelance projects</div>
                    <div>Remote & Los Angeles, CA</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800 py-6 px-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-neutral-400">
              <span>© {currentYear} Cesar Melchor. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and Next.js</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-neutral-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
