import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-accent rounded-full blur-[80px]"></div>
        <div className="absolute -right-20 top-1/3 w-72 h-72 bg-accent-alt rounded-full blur-[80px]"></div>
        <div className="absolute left-1/3 -bottom-20 w-72 h-72 bg-accent rounded-full blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="relative float-animation">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-2xl rotate-45 mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 md:w-28 md:h-28 bg-primary rounded-2xl rotate-45 mx-auto"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-lg rotate-45 mx-auto transform transition-all duration-500 hover:rotate-[225deg]"></div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6">
            <span className="text-gradient">Geometry</span><br />
            <span className="text-white">Games</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl mx-auto">
            Experience the thrill of Geometry Dash right in your browser. 
            No downloads required. Just pure geometric jumping action.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/game/1"
              className="px-8 py-3 bg-gradient-to-r from-accent to-accent-alt rounded-full font-medium text-white transition-transform duration-300 hover:scale-105 shadow-lg shadow-accent/20"
            >
              Play Now
            </Link>
            
            <Link
              to="/#games"
              className="flex items-center text-text-primary hover:text-accent transition-colors duration-300"
            >
              <span className="mr-2">Browse Games</span>
              <ArrowDown className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#games" 
          className="animate-bounce"
        >
          <ArrowDown className="h-6 w-6 text-accent" />
        </a>
      </div>
    </div>
  );
};

export default Hero;