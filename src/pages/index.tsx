import Image from "next/image";
import Link from "next/link";  // Add this import
import { Geist } from "next/font/google";
import { Krona_One } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { motion } from "framer-motion";
import { HeroAnimation } from '@/components/ui/HeroAnimation';  // Update this import path
import Head from 'next/head';
import { useEffect, useState, useCallback } from 'react';
import { Sun, Moon } from 'lucide-react';

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const kronaOne = Krona_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-krona",
});

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleToggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const isLowEndDevice = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      return connection && (connection.saveData || connection.effectiveType.includes('2g'));
    };

    if (isLowEndDevice()) {
      setAnimationsEnabled(false);
    }
  }, []);

  const calculateGlow = (cardElement: HTMLElement) => {
    const rect = cardElement.getBoundingClientRect();
    const distanceX = mousePosition.x - (rect.left + rect.width / 2);
    const distanceY = mousePosition.y - (rect.top + rect.height / 2);
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = 200; // Glow radius
    return Math.max(0, 1 - distance / maxDistance);
  };

  return (
    <>
      <div 
        className={`${geist.variable} ${kronaOne.variable} font-sans min-h-screen bg-background relative`}
        data-animations-disabled={!animationsEnabled}
      >
        {/* Add this gradient background section */}
        <div className="gradient-background">
          <div className="gradient-orb-1" />
          <div className="gradient-orb-2" />
          <div className="gradient-orb-3" />
        </div>
      
        <Head>
          <title>Astrast Host: Free & Finest Host</title>
          <meta name="description" content="Astrast Host offers free & premium hosting services with a focus on security, uptime, and affordability. Join us for the best hosting experience." />
          <meta name="keywords" content="web hosting, game server hosting, customizable hosting, affordable hosting, secure hosting, free hosting" />
          <meta property="og:title" content="Astrast Host: Free & Finest Host" />
          <meta property="og:description" content="Astrast Host offers free & premium hosting services with a focus on security, uptime, and affordability. Join us today!" />
          <meta property="og:image" content="https://astrast.com/Images/astrast_1.png" />
          <meta property="og:url" content="https://astrast.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Astrast Host: Free & Finest Host" />
          <meta name="twitter:description" content="Astrast Host offers free & premium hosting services with a focus on security, uptime, and affordability. Join us today!" />
          <meta name="twitter:image" content="https://astrast.com/Images/astrast_1.png" />
        </Head>
        
        {/* Navigation */}
        <nav className="fixed w-full glass-panel z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <Image
                  src="https://astrast.com/Images/astrast_1.png"
                  alt="Astrast Host Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                  priority
                />
                <Menubar className="border-none">
                  <MenubarMenu>
                    <MenubarTrigger className="font-medium text-white/80 hover:text-white">
                      Home
                    </MenubarTrigger>
                  </MenubarMenu>

                  <MenubarSeparator className="bg-white/20" />

                  <MenubarMenu>
                    <MenubarTrigger className="font-medium text-white/80 hover:text-white">
                      Panel
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        <a href="https://panel.astrast.host/" target="_blank" rel="noopener noreferrer" className="w-full">
                          Go to Panel
                        </a>
                      </MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>

                  <MenubarSeparator className="bg-white/20" />
<<<<<<< HEAD
=======

>>>>>>> ab71c56 (fixed animations and added legal stuff)
                </Menubar>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="font-medium hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                  onClick={handleToggleAnimations}
                >
                  {animationsEnabled ? (
                    <>
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 10V3L4 14h7v7l9-11h-7z" 
                        />
                      </svg>
                      <span className="hidden sm:inline">Animations On</span>
                    </>
                  ) : (
                    <>
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" 
                        />
                      </svg>
                      <span className="hidden sm:inline">Animations Off</span>
                    </>
                  )}
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="font-medium hover:bg-white/10 relative" 
                  asChild
                >
                  <a href="https://discord.gg/A6nFK9NwyQ" target="_blank" rel="noopener noreferrer">
                    Discord
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-violet-500 rounded-full floating-badge" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Rest of the content */}
        {/* Hero Section */}
        <div className="relative min-h-screen overflow-hidden gradient-blur gradient-edge">
          <div className="absolute inset-0 gradient-mask">
            <div className="relative w-[100rem] h-[100rem] flex items-center justify-center">
              <HeroAnimation />
            </div>
          </div>

          {/* Hero content */}
          <main className="relative z-10 pt-24 flex items-center justify-center min-h-screen">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center glass-panel bg-transparent rounded-2xl py-12"
            >
              <div className="relative z-20">  {/* Added z-index to keep text above animation */}
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight font-[family-name:var(--font-krona)] text-glow">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    a s t r a s t
                  </span>
                </h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 text-xl leading-8 text-white/80"
                >
                  Your one-stop solution for premium hosting services : All For Free
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-10 flex items-center justify-center gap-x-6"
                >
                  <Button 
                    size="lg" 
                    className="font-medium transition-transform-opacity duration-300 hover:scale-105 
                      hover:shadow-lg hover:shadow-violet-500/20 relative overflow-hidden" 
                    asChild
                  >
                    <a 
                      href="https://discord.gg/A6nFK9NwyQ" 
                      target="_blank"
                      className="after:content-[''] after:absolute after:inset-0 
                        after:bg-gradient-to-r after:from-violet-500/10 after:to-blue-500/10 
                        after:opacity-0 hover:after:opacity-100 after:transition-opacity"
                    >
                      Join Now
                    </a>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="font-medium hover:bg-white/10 transition-all duration-300" 
                    asChild
                  >
                    <a href="#features">
                      Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </main>
        </div>

        {/* Features Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 glass-panel" id="features">
          <div className="text-center mb-16 glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-glow">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-white/80">
              Packed with features, but here's some of our prime focuses that are included with our services.
            </p>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 glass-effect rounded-2xl p-8"
          >
            {[
              {
                title: 'Direct Connection',
                description: 'We connect with our users, treating you like friends, not customers.'
              },
              {
                title: 'Security',
                description: 'We prioritize your data security with top-notch measures.'
              },
              {
                title: 'Free & Affordable',
                description: 'Quality services that fit your budget, free or affordable!'
              },
              {
                title: 'Dedicated Support Team',
                description: 'Always here to assist you with any issues or queries.'
              },
              {
                title: 'Uptime',
                description: '99% uptime and high speeds.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="group glass-card card-hover shimmer relative"
                  ref={(el) => {
                    if (el) {
                      const intensity = calculateGlow(el);
                      el.style.setProperty('--glow-intensity', `${intensity}`);
                      el.style.boxShadow = `0 0 ${30 * intensity}px ${10 * intensity}px rgba(255,255,255,${0.1 * intensity})`;
                    }
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-white/80">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          {/* add a little gaps between sections */}
          <div className="mt-32"></div>
          {/* Testimonials Section */}
          <div className="mt-32 text-center rounded-2xl p-8 glass-panel bg-transparent">
            <h2 className="text-3xl font-bold text-white text-glow">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-white/80">
              Here's what some of our customers have to say about their experience
              with our hosting services.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 glass-effect rounded-2xl p-8"
          >
            {[
              {
                name: 'Ace',
                date: '16-01-2025',
                rating: '10/10',
                comment: 'I have been using this hosting for the past few days now, and i have to say, the server is just GREAT! The support was also very responsive and quick.'
              },
              {
                name: 'i am being bullied (help)',
                date: '18-01-2025',
                rating: '10/10',
                comment: 'This is by far the best and most easy to use Minecraft server hosting on the face of this planet! My friend @Ace and I have been using this hosting for a couple days now and I got to say that the experience has been great. I would personally recommend everyone to use this hosting! 👍'
              },
              {
                name: 'Mikhail',
                date: '18-01-2025',
                rating: '9/10',
                comment: 'I would say the server performance can be better... Server is constantly closed and open, which is kinda annoying'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group glass-card card-hover shimmer relative h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                      <span className="text-sm text-white/60">{testimonial.date}</span>
                    </div>
                    <div className="text-violet-400 font-bold mb-2">Rating: {testimonial.rating}</div>
                    <CardDescription className="text-white/80">
                      "{testimonial.comment}"
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Section */}
          <div className="mt-32 text-center glass-effect rounded-2xl p-8 glass-panel">
            <h2 className="text-3xl font-bold text-white text-glow">Our Services</h2>
            <p className="mt-4 text-lg text-white/80">
              Explore the features and benefits of our hosting services designed to meet your needs.
            </p>
          </div>
          
          {/* Services Cards */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 glass-effect rounded-2xl p-8"
          >
            {[
              {
                title: 'Game Server Hosting',
                description: 'Easily host servers for Minecraft, Rust, and more with our pre-configured eggs.'
              },
              {
                title: 'Customizable Eggs',
                description: 'Add your choice of eggs, including Python, JavaScript, MongoDB, and more, for a personalized hosting experience.'
              },
              {
                title: 'Panel',
                description: 'Manage your servers effortlessly through our user-friendly and powerful panel.'
              },
              {
                title: 'Donation Option',
                description: 'Instantly qualify for a server by donating $1.'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="group glass-card card-hover shimmer relative"
                  ref={(el) => {
                    if (el) {
                      const intensity = calculateGlow(el);
                      el.style.setProperty('--glow-intensity', `${intensity}`);
                      el.style.boxShadow = `0 0 ${30 * intensity}px ${10 * intensity}px rgba(255,255,255,${0.1 * intensity})`;
                    }
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-white/80">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Section - Moved to end */}
          <div className="mt-32 glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-glow text-center mb-12">Our Team</h2>
            <div className="space-y-16">
              {/* SaFire's section */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image side */}
                <div className="w-full md:w-1/3">
                  <div className="gradient-border-wrapper">
                    <div className="gradient-border-inner">
                      <div className="relative aspect-square">
                        <Image
                          src="https://tejaswa.is-a.dev/img/app-profile-mockup.png"
                          alt="SaFire - Founder of Astrast Host"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content side */}
                <div className="w-full md:w-2/3 space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-white text-glow">Meet the Founder</h2>
                    <h3 className="text-xl text-violet-400">SaFire (Tejaswa)</h3>
                    <p className="text-white/60 text-sm">he/him • Founder / CEO of Astrast Host</p>
                  </div>
                  
                    <p className="text-lg text-white/80">
                    As the Founder and CEO of Astrast Host, I lead our mission to deliver enterprise-grade 
                    hosting solutions with uncompromising reliability and security. Drawing from extensive 
                    experience in cloud infrastructure and systems architecture, I'm committed to 
                    democratizing access to premium hosting services through our innovative platform.
                    </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://tejaswa.is-a.dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      tejaswa.is-a.dev
                    </a>
                    <a 
                      href="mailto:me@tejaswa.pro"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      me@tejaswa.pro
                    </a>
                    <a 
                      href="https://discord.com/users/1329994422938501213"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                      </svg>
                      _safire
                    </a>
                  </div>
                </div>
              </div>

              {/* Tidumm's section */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                {/* Image side */}
                <div className="w-full md:w-1/3">
                  <div className="gradient-border-wrapper">
                    <div className="gradient-border-inner">
                      <div className="relative aspect-square">
                        <Image
                          src="https://cdn.discordapp.com/avatars/926091994785267813/673fdaf69d4d9bdb99f71030a9868c97.webp?size=512"
                          alt="Tidumm - Developer"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content side */}
                <div className="w-full md:w-2/3 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl text-violet-400">Tidumm</h3>
                    <p className="text-white/60 text-sm">he/him • Full Stack Developer & Manager</p>
                  </div>
                  
                    <p className="text-lg text-white/80">
                    Full stack developer with deep expertise in Unreal Engine and cloud architecture. 
                    Leading technical solutions, infrastructure optimization, and spearheading innovative development initiatives. 
                    Committed to delivering scalable, high-quality solutions that transform ideas into reality.
                    </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://discord.gg/8T5YcfEu7j" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09 .09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                      </svg>
                      Indeservo
                    </a>
                    <a 
                      href="https://github.com/tidumm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* After Tidumm's section, add Mkeko's section */}
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image side */}
                <div className="w-full md:w-1/3">
                  <div className="gradient-border-wrapper">
                    <div className="gradient-border-inner">
                      <div className="relative aspect-square">
                        <Image
                          src="https://cdn.discordapp.com/avatars/1212043905059790881/0ab2b338f43e10efe051ab7380c7195e.png?size=1024"
                          alt="Mkeko - Discord Presence"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content side */}
                <div className="w-full md:w-2/3 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl text-violet-400">Mkeko </h3>
                    <p className="text-white/60 text-sm">he/him • Co-Founder</p>
                  </div>
                  
                    <p className="text-lg text-white/80">
                    Hey there! I&apos;m Mkeko, a passionate developer who values authenticity above all else.
                    While I navigate life&apos;s ups and downs, I stay true to my core belief:
                    &quot;Better a painful truth than a comforting lie.&quot;
                    </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://discord.com/invite/XmPm9nbd3u" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1a14.66 14.66 0 0 0-4.58 0a10.14 10.14 0 0 0-.53-1.1a16 16 0 0 0-4.13 1.3a17.33 17.33 0 0 0-3 11.59a16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83a3.39 3.39 0 0 0 .42-.33a11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84a12.41 12.41 0 0 0 1.08 1.78a16.44 16.44 0 0 0 5.06-2.59a17.22 17.22 0 0 0-3-11.59a16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.93 1.93 0 0 1 1.8 2a1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2a1.93 1.93 0 0 1 1.8-2a1.92 1.92 0 0 1 1.8 2a1.92 1.92 0 0 1-1.8 2z"/>
                      </svg>
                      Mkeko's Server
                    </a>

                    <a 
                      href="https://open.spotify.com/playlist/4TfvKpk5kuQlUD4tr26Rxp" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="2.02 2.02 19.98 19.98" fill="currentColor">
                        <path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991c0 5.494 4.496 9.99 9.991 9.99c5.494 0 9.99-4.496 9.99-9.99c0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201c-2.349-1.45-5.296-1.75-8.793-.951c-.348.102-.648-.148-.748-.449c-.101-.35.149-.648.45-.749c3.795-.85 7.093-.499 9.69 1.1c.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249c-2.697-1.646-6.792-2.148-9.939-1.148c-.398.101-.85-.1-.949-.498c-.101-.402.1-.852.499-.952c3.646-1.098 8.143-1.198 11.14.101c.35.149.4.548.251.848zm.1-2.748c-.251.349-.7.499-1.051.249c-2.697-1.646-6.792-2.148-9.939-1.148c-.398.101-.85-.1-.949-.498c-.101-.402.1-.852.499-.952c3.646-1.098 8.143-1.198 11.14.101c.35.149.4.548.251.848z"/>
                      </svg>
                      Spotify Playlist
                    </a>
                  </div>
                </div>
              </div>

              {/* After Mkeko's section, add Staff sections */}
            
            {/* Artix's section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              {/* Image side */}
              <div className="w-full md:w-1/3">
                <div className="gradient-border-wrapper">
                  <div className="gradient-border-inner">
                    <div className="relative aspect-square">
                      <Image
                        src="https://cdn.discordapp.com/avatars/834867471885271053/de5ff2d889ee05817d210ad5d5c372c1.png?size=1024"
                        alt="Artix - Staff Member"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-2/3 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl text-violet-400">Artix</h3>
                  <p className="text-white/60 text-sm">Admin</p>
                </div>
                
                <p className="text-lg text-white/80">
                  As an Administrator, I help manage the community and ensure smooth operations. 
                  Passionate about technology and dedicated to providing excellent support to our users.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://discordapp.com/users/834867471885271053"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                    </svg>
                    artixdev#0
                  </a>
                </div>
              </div>
            </div>

            {/* Simba's section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image side */}
              <div className="w-full md:w-1/3">
                <div className="gradient-border-wrapper">
                  <div className="gradient-border-inner">
                    <div className="relative aspect-square">
                      <Image
                        src="https://cdn.discordapp.com/avatars/1009458215412564098/8fcca929c6463b3a4145bcab49aa3f5a.png?size=1024"
                        alt="Simba - Staff Member"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-2/3 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl text-violet-400">Simba</h3>
                  <p className="text-white/60 text-sm">System Admin</p>
                </div>
                
                <p className="text-lg text-white/80">
                  Experienced system administrator responsible for maintaining server infrastructure,
                  optimizing performance, and ensuring system reliability. Dedicated to providing
                  stable and secure hosting services for our users.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://discordapp.com/users/1009458215412564098"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                    </svg>
                    susamogusmovie#0
                  </a>
                </div>
              </div>
            </div>

            {/* Dark Phoenix's section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              {/* Image side */}
              <div className="w-full md:w-1/3">
                <div className="gradient-border-wrapper">
                  <div className="gradient-border-inner">
                    <div className="relative aspect-square">
                      <Image
                        src="https://cdn.discordapp.com/avatars/916281203584282634/56044f9b4522665550c612a076d902f2.png?size=1024"
                        alt="Dark Phoenix - Staff Member"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content side */}
              <div className="w-full md:w-2/3 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl text-violet-400">Dark Phoenix</h3>
                  <p className="text-white/60 text-sm">.realamethyst.</p>
                </div>
                
                <p className="text-lg text-white/80">
                  Passionate about cybersecurity and system administration. Dedicated to ensuring 
                  robust security measures and smooth operations while maintaining service quality. 
                  Experienced in network security, infrastructure management, and threat mitigation.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://discordapp.com/users/916281203584282634"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                    </svg>
                    .realamethyst.
                  </a>
                </div>
              </div>
            </div>

          </div> {/* This closes the space-y-16 div */}
          </div> {/* This closes the glass-effect div */}

        </div>

        {/* Footer */}
        <footer className="mt-32 border-t border-white/10 relative z-10 glass-panel">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <Link href="/legal" className="text-sm text-white/60 hover:text-white">
                  Legal
                </Link>
                <span className="text-white/20">•</span>
                <Link href="/terms-of-service" className="text-sm text-white/60 hover:text-white">
                  Terms of Service
                </Link>
              </div>
              <p className="text-sm text-center text-white/80">
                © 2025 Astrast Host | Web Hosting & More @ astrast.net
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
